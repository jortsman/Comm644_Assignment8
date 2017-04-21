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
    $('#panel1').show();
    $('#panel2').hide();
    $('#panel3').hide();
  });
  $('#tabs ul li:nth-child(2)').on('click', function() {
    $('#tabs ul li:nth-child(1)').removeClass('active');
    $('#tabs ul li:nth-child(2)').addClass('active');
    $('#tabs ul li:nth-child(3)').removeClass('active');
    $('#panel1').hide();
    $('#panel2').show();
    $('#panel3').hide();
  });
  $('#tabs ul li:nth-child(3)').on('click', function() {
    $('#tabs ul li:nth-child(1)').removeClass('active');
    $('#tabs ul li:nth-child(2)').removeClass('active');
    $('#tabs ul li:nth-child(3)').addClass('active');
    $('#panel1').hide();
    $('#panel2').hide();
    $('#panel3').show();
  });
  // Accordian
  $('#accordion h3:first-child').on('click', function() {
    $('#accordion h3:first-child').addClass('active');
    $('#accordion h3:nth-child(2)').removeClass('active');
    $('#accordion h3:nth-child(3)').removeClass('active');
    $('#acPanel1Contents').show();
    $('#acPanel2Contents').hide();
    $('#acPanel3Contents').hide();
  });
  $('#accordion h3:nth-of-type(2)').on('click', function() {
    $('#accordion h3:first-of-type').removeClass('active');
    $('#accordion h3:nth-of-type(2)').addClass('active');
    $('#accordion h3:nth-of-type(3)').removeClass('active');
    $('#acPanel1Contents').hide();
    $('#acPanel2Contents').show();
    $('#acPanel3Contents').hide();
  });
  $('#accordion h3:nth-of-type(3)').on('click', function() {
    $('#accordion h3:first-of-type').removeClass('active');
    $('#accordion h3:nth-of-type(2)').removeClass('active');
    $('#accordion h3:nth-of-type(3)').addClass('active');
    $('#acPanel1Contents').hide();
    $('#acPanel2Contents').hide();
    $('#acPanel3Contents').show();
  });
});
