App.ChatTrack = function ChatTrack() {
  this.initialize();
}

App.ChatTrack.prototype = {
  constructor: App.ChatTrack,

  initialize: function() {
    this.$msgInput = $("#msg-form");
    this.$msgForm = $("#new_message");
    this.$messages = $('#messages');
    this.paddingDefault = parseInt(getComputedStyle(this.$msgInput[0], null)["paddingTop"], 10) * 2;
    this.listeners();
    this.scrollBottom();
  },

  listeners: function() {
    $(this.$msgInput).on('keypress', this.inputKeypress.bind(this));
    $(this.$msgInput).on('input', this.setHeight.bind(this));
    $(this.$msgForm).on('keypress', this.formKeypress.bind(this));
    $(document).on('keypress', this.documentKeypress.bind(this));
  },

  inputKeypress: function(e) {
    if(e.ctrlKey === true && e.which === 13 || e.which === 10){
      e.preventDefault();
      $(e.currentTarget)[0].value = $(e.currentTarget)[0].value + "\n";
      this.setHeight();
    }
  },

  formKeypress: function(e) {
    if (e.which === 13) {
      e.preventDefault();
    }
    if(e.which === 13 && e.ctrlKey != true && this.$msgInput[0].value.trim() != "") {
      e.preventDefault();
      $('#new_message').submit();
     }
  },

  documentKeypress: function(e) {
    if(!this.$msgInput.is(':focus')) {
        this.$msgInput.focus();
    }
  },

  setHeight: function() {
    this.$msgInput.css({'height':'auto','overflow-y':'hidden'}).height(this.$msgInput[0].scrollHeight - this.paddingDefault);
  },

  scrollBottom: function() {
    var val = this.$messages[0].scrollHeight - parseInt(this.$messages.css('height'), 10);
    this.$messages.scrollTop(val);
  }
}
