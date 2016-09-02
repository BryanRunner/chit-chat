// function h(e) {
//   // default padding for top and bottom is 1rem(16px)
//   var paddingDefault = 16;
//   $(e).css({'height':'auto','overflow-y':'hidden'}).height(e.scrollHeight - paddingDefault);
// }
//
// $(document).ready(function(){
//
//   $('#new_message').keypress(function(e){
//     if (e.which === 13) {
//       e.preventDefault();
//     }
//     if(e.which === 13 && e.ctrlKey != true && $("#msg-form")[0].value != "") {
//        e.preventDefault();
//        $('#new_message').submit();
//      }
//   });
//
//
//   $(document).on('keypress', function() {
//     var $input = $('#msg-form');
//
//     if(!$input.is(':focus')) {
//         $input.focus();
//     }
//   });
//
//   $('#msg-form').on('input',function(e){
//     h(e.currentTarget);
// 	});
//
//   $('#msg-form').keypress(function(e){
//     if(e.ctrlKey === true && e.which === 13 || e.which === 10){
//       e.preventDefault();
//       $(e.currentTarget)[0].value = $(e.currentTarget)[0].value + "\n";
//       h(e.currentTarget);
//     }
//   });
//
// });

App.ChatTrack = function ChatTrack() {
  this.initialize();
}

App.ChatTrack.prototype = {
  constructor: App.ChatTrack,

  initialize: function() {
    this.$msgInput = $("#msg-form");
    this.$msgForm = $("#new_message");
    this.listeners();
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
    if(e.which === 13 && e.ctrlKey != true && $("#msg-form")[0].value != "") {
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
    // default padding for top and bottom is 1rem(16px)
    // var paddingDefault = parseInt(getComputedStyle(el, null)["paddingTop"], 10) * 2;
    var paddingDefault = 16;
    this.$msgInput.css({'height':'auto','overflow-y':'hidden'}).height(this.$msgInput[0].scrollHeight - paddingDefault);
  }
}
