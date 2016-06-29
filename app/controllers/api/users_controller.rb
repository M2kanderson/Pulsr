class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if(@user.save)
      # session[:session_token] = @user.reset_token!
      login(@user)
      render :show
    else
      render json: @user.errors, status: 422
    end
  end

  def user_params
    params.require(:user).permit(:username, :password, :email, :firstname, :lastname)
  end
end
