$(function() {
  // Problem 1
  $('#btn1').click(function() {
    alert('You clicked me with click!');
  });
  // Problem 2
  $('#btn2').bind('click', function() {
    alert('You clicked me with bind!');
  });
  // Problem 3
  $('#btn3').on('click', function() {
    alert('You clicked me with on!');
  });
  // Problem 4
  $('#btn4, #btn5').on('click', function() {
    alert('You clicked either of the buttons from problem 4!');
  });
  // Problem 5
  // $('#div').css('background-color', '#f2f2f2')
  //   .css('width', '400px')
  //   .css('height', '400px')
  //   .on('click', function() {
  //     alert('You clicked the div!');
  //   })
  //   .on('mouseenter', function() {
  //     alert('You\'ve entered the div');
  //   })
  //   .on('mouseleave', function() {
  //     alert('You\'ve left the div');
  //   });
  // Problem 6
  // $('#div2').css('background-color', '#f2f2f2')
  //   .css('width', '400px')
  //   .css('height', '400px')
  //   .on('click', function() {
  //     $('#div2 span').append('<p>you clicked the div</p>');
  //   })
  //   .on('mouseenter', function() {
  //     $('#div2 span').append('<p>you entered the div</p>');
  //   })
  //   .on('mouseleave', function() {
  //     $('#div2 span').append('<p>you left the div</p>');
  //   });
  // Problem 7
  $('a').on('click', function(e) {
    e.preventDefault();
    $('a').css('color', '#ff0000');
    var node = $(this).get(0);
    alert("Clicked on: " + node.nodeName);
  })
  // Problem 8
  $("#resize").html("<h3>Resize</h3><b>Width</b> : " +
    $(window).width() + ", <b>Height : </b>" +
    $(window).height());
  $(window).resize(function() {
    $("#resize").html("<h3>Resize</h3><b>Width</b> : " +
      $(window).width() + ", <b>Height : </b>" +
      $(window).height());
  });
  // Problem 9
  $('#text').focus(function() {
    $('#text').css('background-color', '#eee');
  });
  $('#text').focusout(function() {
    $('#text').css('background-color', '#fff');
  });
  // Problem 10
  $('#submit').on('click', function(e) {
    var name = $('#name').val();
    var email = $('#email').val();
    e.preventDefault();
    if (name.length === 0 && email.length === 0) {
      alert('Both fields are required bruh');
      $('#name, #email').css('border-color', '#ff0000');
    } else if (name.length === 0) {
      alert('The name field is required bruh');
      $('#name').css('border-color', '#ff0000');
      $('#email').css('border-color', 'green');
    } else if (email.length === 0) {
      alert('The email field is required bruh');
      $('#email').css('border-color', '#ff0000');
      $('#name').css('border-color', 'green');
    } else {
      $('#name, #email').css('border-color', 'green');
    }
  })
});
