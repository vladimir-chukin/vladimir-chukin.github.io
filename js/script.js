$(document).ready(function(){



});

$(document).on('click', '#boxclose', function(){
  $('#overlay').fadeToggle('fast',function(){
      $('#box').animate({'right':'-80vw'},500);
  });
});

$(document).on('click', '.overlay', function(){
  $('#overlay').fadeToggle('fast',function(){
      $('#box').animate({'right':'-80vw'},500);
  });
});
