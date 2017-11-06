//headerのjQueryをここに書きます.

$(function() {

  $('header .menulists li').eq(0).css('border-left', '1px solid #000000');

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

  //TOPを押すと一番上に戻る
  $('.header-top').click(function(){
    //var id = $(this).attr('href');
    //var position = $(id).offset().top;
    $('html, body').animate({'scrollTop': 0}, 500);
  });

  //headerのボタンを押すと、そのセクションに飛ばす
  $('header a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).get(0).offsetTop;
    $('html, body').animate({'scrollTop': position - 80}, 500);
  });

  //背景の視差効果
  $(window).scroll(function() {
    var mypos = $(document).scrollTop();
    var bgsc = - 0.5 * mypos + 10;
    $('body').css({'background-position-y': bgsc + "px"});
  });

  //ここからレスポンシブデザイン
  $('.top_responsive').click(function(){
    $('html, body').animate({'scrollTop': 0}, 500);
  });

  $('.menu_responsive').click(function(){
    $('header .menulists li').eq(6).css('border-bottom', '5px solid rgba(240, 240, 0, 1)');
    $('header .menulists').slideToggle();
    return false;
  });

  $('header #toggle .top_responsive').click(function(){
    $('.menulists').slideUp();
  });

  $(window).resize(function(){
    var win = $(window).width();
    var p = 1000;
    if(win > p){
      $('.header-top').show();
      $('.menulists').show();
    } else {
      $('.header-top').hide();
      $('.menulists').hide();
      $('header .menulists li').click(function(){
        $('.menulists').slideUp();
      });
    }
  });
  //ここまでレスポンシブデザイン

});
