$(function() {

  //ナビゲーションメニューにhoverした時の反応
  $('.menulist').hover(
    function(){
      $(this).animate({'font-size': '25px'}, 10);
  },
    function(){
      $(this).animate({'font-size': '20px'}, 10);
  });

  $('.header-top').hover(
    function(){
      $(this).animate({'font-size': '40px'}, 10);
  },
    function(){
      $(this).animate({'font-size': '35px'}, 10);
  });

  //ナビゲーションバーの機能部分
  $('.header-top').click(function(){
    $('html, body').animate({'scrollTop': 0}, 500);
  });

  $('header a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({'scrollTop': position - 75}, 500);
  });

/*
  var mypos = $('html, body').offset().top;

  if (0 < mypos && mypos < 100) {
    $('header a').css('color', '#ffff00';
  }
*/
});
