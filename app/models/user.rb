class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true

  has_many :photos
  has_many :comments

  attr_reader :password
  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    @user = User.find_by_username(username)
    if(@user)
      return @user.is_password?(password) ? @user: nil
    end
    return nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password);
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def reset_token!
    self.session_token = generate_session_token
    self.save
    self.session_token
  end
end
