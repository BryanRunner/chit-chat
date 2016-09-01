App.messages = App.cable.subscriptions.create('MessagesChannel', {
  received: function(data) {
    this.$messages = $('#messages');
    this.$messages.append(this.renderMessage(data));
    this.resetMessageForm();
    this.scrollMessageBottom();
  },

  renderMessage: function(data) {
    var div     = this.makeElement('div', 'msg'),
        user    = this.makeElement('p', 'msg-user', data.user),
        content = this.makeElement('p', 'msg-content'),
        msgData = data.message.split("\n");

    msgData.forEach(function(line){
      content.appendChild(App.messages.makeElement('span', 'msg-line', line));
    });

    div.appendChild(user);
    div.appendChild(content);

    return div;
  },

  makeElement: function(tag, className, text){
    var el = document.createElement(tag);
    el.className = className;

    if (text) {
      var t = document.createTextNode(text);
      el.appendChild(t);
    }
    return el;
  },

  resetMessageForm: function() {
    // border top & btm = (0.0625rem * 2) = 0.125rem
    // padding top & btm = (0.5rem * 2) = 1rem
    // inner-height = 1.25rem
    // total = 2.375rem
    var height = "2.375rem";
    var $msg = $("#msg-form");

    $msg.val("");
    $msg.css("height", height);
  },

  scrollMessageBottom: function() {
    var val = this.$messages[0].scrollHeight - parseInt(this.$messages.css('height'), 10);
    this.$messages.scrollTop(val);
  }
});
