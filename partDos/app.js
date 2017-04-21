$(function() {
  // Slider
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
  // Tabs
  $('#tabs ul li:first-child').on('click', function() {
    $('#tabs ul li:first-child').addClass('active');
    $('#tabs ul li:nth-child(2)').removeClass('active');
    $('#tabs ul li:nth-child(3)').removeClass('active');
    $('#panel1').removeClass('hide');
    $('#panel2').addClass('hide');
    $('#panel3').addClass('hide');
  });
  $('#tabs ul li:nth-child(2)').on('click', function() {
    $('#tabs ul li:nth-child(1)').removeClass('active');
    $('#tabs ul li:nth-child(2)').addClass('active');
    $('#tabs ul li:nth-child(3)').removeClass('active');
    $('#panel1').addClass('hide');
    $('#panel2').removeClass('hide');
    $('#panel3').addClass('hide');
  });
  $('#tabs ul li:nth-child(3)').on('click', function() {
    $('#tabs ul li:nth-child(1)').removeClass('active');
    $('#tabs ul li:nth-child(2)').removeClass('active');
    $('#tabs ul li:nth-child(3)').addClass('active');
    $('#panel1').addClass('hide');
    $('#panel2').addClass('hide');
    $('#panel3').removeClass('hide');
  });
});
