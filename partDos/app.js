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
  // Accordian
  $('#accordion h3:first-child').on('click', function() {
    $('#accordion h3:first-child').addClass('active');
    $('#accordion h3:nth-child(2)').removeClass('active');
    $('#accordion h3:nth-child(3)').removeClass('active');
    $('#acPanel1Contents').removeClass('hide');
    $('#acPanel2Contents').addClass('hide');
    $('#acPanel3Contents').addClass('hide');
  });
  $('#accordion h3:nth-child(2)').on('click', function() {
    $('#accordion h3:first-child').removeClass('active');
    $('#accordion h3:nth-child(2)').addClass('active');
    $('#accordion h3:nth-child(3)').removeClass('active');
    $('#acPanel1Contents').addClass('hide');
    $('#acPanel2Contents').removeClass('hide');
    $('#acPanel3Contents').addClass('hide');
  });
  $('#accordion h3:nth-child(3)').on('click', function() {
    $('#accordion h3:first-child').removeClass('active');
    $('#accordion h3:nth-child(2)').removeClass('active');
    $('#accordion h3:nth-child(3)').addClass('active');
    $('#acPanel1Contents').addClass('hide');
    $('#acPanel2Contents').addClass('hide');
    $('#acPanel3Contents').removeClass('hide');
  });
});
