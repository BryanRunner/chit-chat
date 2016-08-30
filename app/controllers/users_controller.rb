class UsersController < ApplicationController

  def show
    @user = current_user
    @chats = @user.chats
  end
end
