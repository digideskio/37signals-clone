$(document).ready(function(){
  $default_message = $('div.default_message');

  $('#first_a').hover(
    function(){
    $default_message.detach();
    $('img.arrow_left.first_box').addClass('visibility_on');
    $('div.container').append('<div class="message1"><h2><span>Basecamp</span> is the project management tool you wish you had on your last project.</h2><p>Are you still managing projects with email? Are you still using Excel for your to-do lists? It’s time to upgrade to Basecamp. Manage projects and collaborate with your team and clients the modern way.</p></div>');
  }, function(){
    $('img.arrow_left.first_box').removeClass('visibility_on');
    $('div.message1').remove();
    $('div.container').append($default_message);
  });

  $('#second_a').hover(
    function(){
    $default_message.detach();
    $('img.arrow_left.second_box').addClass('visibility_on');
    $('div.container').append('<div class="message2"><h2><span>Hirise</span> remembers the important things about people you’d normally forget.</h2><p>Keep a permanent record of people you do business with. Know who you talked to, when you talked to them, what was said, and when to follow up next. Over 20,000,000 contacts are tracked using Highrise.</p></div>');
  }, function(){
    $('img.arrow_left.second_box').removeClass('visibility_on');
    $('div.message2').remove();
    $('div.container').append($default_message);
  });

  $('#third_a').hover(
    function(){
    $default_message.detach();
    $('img.arrow_right').addClass('visibility_on');
    $('div.container').append('<div class="message3"><h2>From near or far, <span>Campfire</span> helps teams work together over the web in real-time.</h2><p>Share ideas, discussions, concepts, images, code samples, videos, mockups, and documents in a real-time private chat room. It’s game changing. We couldn’t run our own business without Campfire.</p></div>');
  }, function(){
    $('img.arrow_right').removeClass('visibility_on');
    $('div.message3').remove();
    $('div.container').append($default_message);
  });
});
