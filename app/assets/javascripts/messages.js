function h(e) {
  $(e).css({'height':'auto','overflow-y':'hidden'}).height(e.scrollHeight - 16);
}

$(document).ready(function(){

  $('#new_message').keypress(function(e){
    if(e.which == 13 && e.ctrlKey === false){
       e.preventDefault();
       $('#new_message').submit();
     }
  });


  $(document).on('keypress', function() {
    var $input = $('#message_content');

    if(!$input.is(':focus')) {
        $input.focus();
    }
  });

  $('#message_content').on('input',function(e){
    h(e.currentTarget);
	});

  $('#message_content').keypress(function(e){
    if(e.which == 13 && e.ctrlKey === true){
      e.preventDefault();
      $(e.currentTarget)[0].value = $(e.currentTarget)[0].value + "\n";
      h(e.currentTarget);
    }
  });

});
