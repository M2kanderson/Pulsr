class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if(@user)
      session[:session_token] = @user.reset_token!
      render :show
    else
      render json: {base: ['Invalid Credentials']}, status: 401
    end
  end


  def destroy
    @user = current_user
    if(@user)
      logout
    else
      render json: {base: ['No user to log out']}, status: 404
    end
    render :show
  end
end
