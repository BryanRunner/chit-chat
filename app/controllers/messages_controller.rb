class MessagesController < ApplicationController

  def index
    #code
  end

  def show
    #code
  end

  def new
    #code
  end

  def create
    message = Message.new(message_params)
    message.user = current_user
    if message.save
      ActionCable.server.broadcast 'messages',
        message: message.content,
        user: message.user.username
      head :ok
    else
      redirect_to chat_path(message_params[:message][:chat_id])
    end
  end

  def destroy
    #code
  end

  private

  def message_params
    params.require(:message).permit(:content, :chat_id)
  end
end
