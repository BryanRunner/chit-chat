class ChatsController < ApplicationController
  before_action :authenticate_user!

  def index
    # @user = User.find(params[:user_id])
    @user_chats = current_user.chats
    @public_chats = Chat.where(public: true)
  end

  def show
    @chat = Chat.find(params[:id])
    @message = Message.new
  end

  def new
    #code
  end

  def create
    user = User.find(params[:user_id])
    chat = user.chats.build(chat_params)
    if chat.save
      current_user.participants.create(chat_id: chat.id)
      redirect_to user_chats_path(user), notice: "Chat Created"
    end
  end

  def destroy
    #code
  end

  private

  def chat_params
    params.require(:chat).permit(:name, :user_id, :public)
  end
end
