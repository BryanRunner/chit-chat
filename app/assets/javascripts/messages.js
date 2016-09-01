function h(e) {
  // default padding for top and bottom is 1rem(16px)
  var paddingDefault = 16;
  $(e).css({'height':'auto','overflow-y':'hidden'}).height(e.scrollHeight - paddingDefault);
}

$(document).ready(function(){

  $('#new_message').keypress(function(e){
    if (e.which == 13) {
      e.preventDefault();
    }
    if(e.which == 13 && e.ctrlKey != true && $("#msg-form")[0].value != "") {
       e.preventDefault();
       $('#new_message').submit();
     }
  });


  $(document).on('keypress', function() {
    var $input = $('#msg-form');

    if(!$input.is(':focus')) {
        $input.focus();
    }
  });

  $('#msg-form').on('input',function(e){
    h(e.currentTarget);
	});

  $('#msg-form').keypress(function(e){
    if(e.which == 13 && e.ctrlKey === true){
      e.preventDefault();
      $(e.currentTarget)[0].value = $(e.currentTarget)[0].value + "\n";
      h(e.currentTarget);
    }
  });

});
