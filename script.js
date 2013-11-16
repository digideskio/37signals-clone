$(document).ready(function(){
  // $('.message1, .message2, .message3').hide();

  $('.mini_box1').hover(function(){
    $('.message1').removeClass("message1");
  });

  $('.mini_box2').hover(function(){
    $('.message2').toggle();
  });

  $('.mini_box3').hover(function(){
    $('.message3').toggle();
  });
})
