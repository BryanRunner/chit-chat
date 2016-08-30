App.messages = App.cable.subscriptions.create('MessagesChannel', {
  received: function(data) {
    $('#message_content').val("");
    $('#message_content').attr("rows", 1);
    return $('#messages').append(this.renderMessage(data));
  },

  renderMessage: function(data) {
    return "<p> <strong>" + data.user + " </strong>" + "</br>" + data.message + "</p>";
  }
});
