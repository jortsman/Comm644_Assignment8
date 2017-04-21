$(function() {
  $('#counter p:first-of-type').on('click', function() {
    $('#slider').css("background-image", "url('img/1.jpeg')");
  });
  $('#counter p:nth-of-type(2)').on('click', function() {
    $('#slider').css("background-image", "url('img/2.jpeg')");
  });
  $('#counter p:nth-of-type(3)').on('click', function() {
    $('#slider').css("background-image", "url('img/3.jpg')");
  });
  $('#counter p:nth-of-type(4)').on('click', function() {
    $('#slider').css("background-image", "url('img/4.jpeg')");
  });
  $('#counter p:last-of-type').on('click', function() {
    $('#slider').css("background-image", "url('img/5.jpg')");
  });
});
