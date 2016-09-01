App.messages = App.cable.subscriptions.create('MessagesChannel', {
  received: function(data) {
    var $msgs = $('#messages');
    $msgs.append(this.renderMessage(data));
    this.resetMsgContent();
    this.scrollMsgBottom($msgs);
  },

  renderMessage: function(data) {
    var div = document.createElement('div');
    var user = document.createElement('p');
    var msgContent = document.createElement('p');
    var msg = data.message.split("\n");

    user.className = "msg-user";
    user.appendChild(document.createTextNode(data.user));

    msgContent.className = "msg-content";

    msg.forEach(function(line){
      msgContent.appendChild(App.messages.createMsgContent('span', 'msg-line', line));
    });

    div.className = "msg";
    div.appendChild(user);
    div.appendChild(msgContent);

    return div
  },

  createMsgContent: function(tag, className, text){
    var element = document.createElement(tag);
    element.className = className;

    if (text) {
      var textNode = document.createTextNode(text);
      element.appendChild(textNode);
    }
    return element
  },

  resetMsgContent: function() {
    // border top & btm = (0.0625rem * 2) = 0.125rem
    // padding top & btm = (0.5rem * 2) = 1rem
    // inner-height = 1.25rem
    // total = 2.375rem
    var height = "2.375rem";
    var $msg = $("#msg-form");

    $msg.val("");
    $msg.css("height", height);
  },

  scrollMsgBottom: function(el) {
    var val = el[0].scrollHeight - parseInt(el.css('height'), 10);
    el.scrollTop(val);
  }
});
