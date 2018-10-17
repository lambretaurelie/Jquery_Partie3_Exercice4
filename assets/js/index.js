$(function(){
  $('#butonForm').click(function(){
    if( $('#rectangle').height() < 100 ) {
      $('#rectangle').css('height', $('#rectangle').height()+10+'px');
    } else {
      $('#rectangle').css('height', '10px');
    }
  });
  $('#butonColor').click(function(){
    $('#rectangle').css('backgroundColor','green');
  });
  $('#butonInit').click(function(){
    $('#rectangle').css('backgroundColor','blue');
  });
  $('#butonHide').click(function(){
    $('#rectangle').hide();
  });
  $('#butonShow').click(function(){
    $('#rectangle').show();
  });
});
