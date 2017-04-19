$(function() {
  $('body').css('background-color', '#D35400')
    .css('text-align', 'center')
    .css('padding-top', '50px');
  $('#result').css('background-color', '#FDE3A7')
    .css('width', '210px')
    .css('height', '30px')
    .css('margin-bottom', '3px')
    .css('font-size', '18px')
    .css('color', '#D35400')
    .css('text-align', 'right')
    .css('padding-right','5px');
  $('[type="button"]').css('background-color', '#F4B350')
    .css('border', 'none')
    .css('width', '50px')
    .css('height', '50px')
    .css('margin', '3px 1px')
    .css('font-size', '18px')
    .css('color', '#D35400')
    .on('mousedown', function() {
      $(this).css('background-color', '#EB974E')
    })
    .on('mouseup', function() {
      $(this).css('background-color', '#F4B350')
    });
  $('#container input[type=button]').on('click', function() {
    var total = 0;
    $('input[type=button]').on('click',function() {
      total += $(this).val();
      $('#result').val(total);
    })

  });
});
