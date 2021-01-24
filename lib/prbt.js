// テーブルをマウスオーバーしたとき選択カーソルになる
var trFunc = function() {
  if ($(this).is('[tr-id]')) {
    var tr_id = $(this).attr('tr-id') + '_d';
    var table_id = $(this).parent().parent().attr('id');
    var target_tr = $('#' + table_id + ' tbody tr[tr-id="' + tr_id + '"]');
    if (target_tr.css('display') == 'none') {
      target_tr.show('fast');
    } else {
      target_tr.hide('fast');
    }
    }
};
// テーブルをクリックしたとき詳細の行の表示非表示が変わる
var trMFunc = function() {
  if ($(this).is('[tr-id]')) {
    if ($(this).attr('tr-id').slice(-1)!='d') {
      $(this).css("cursor","pointer");
    }
  }
};
$('tr').on('click', trFunc);
$('tr').on('mouseover', trMFunc);

// 絞り込み検索フォームの表示（出演者）
$('#person_form_button').on('click', function() {
  var target_form = $('#person_search_form');
  if (target_form.css('display') == 'none') {
    target_form.css('display', '');
    $(this).children('i').removeClass('fa-angle-down');
    $(this).children('i').addClass('fa-angle-up');
  } else {
    target_form.css('display', 'none');
    $(this).children('i').removeClass('fa-angle-up');
    $(this).children('i').addClass('fa-angle-down');
  }
});

// 絞り込み検索フォームの表示（俳句）
$('#haiku_form_button').on('click', function() {
  var target_form = $('#haiku_search_form');
  if (target_form.css('display') == 'none') {
    target_form.css('display', '');
    $(this).children('i').removeClass('fa-angle-down');
    $(this).children('i').addClass('fa-angle-up');
  } else {
    target_form.css('display', 'none');
    $(this).children('i').removeClass('fa-angle-up');
    $(this).children('i').addClass('fa-angle-down');
  }
});

// 発表が早い順に並べ替える
$('#date-asc').click(function () {
  var size = $('#person_haiku_table > tbody > tr').length / 2;
  for (var i=1; i<=size; i++) {
    $('tr[tr-id="' + i + '_d"]').clone().prependTo('#person_haiku_table > tbody');
    $('tr[tr-id="' + i + '"]').clone().prependTo('#person_haiku_table > tbody');
  }
  $('#person_haiku_table > tbody > tr').each(function(i, elem) {
    if ( i+1 > size*2 ) {
      $(elem).remove();
    }
  });
  $('tr').on('click', trFunc);
  $('tr').on('mouseover', trMFunc);
});

// 発表が遅い順に並べ替える
$('#date-desc').click(function () {
  var size = $('#person_haiku_table > tbody > tr').length / 2;
  for (var i=size; i>0; i--) {
    $('tr[tr-id="' + i + '_d"]').clone().prependTo('#person_haiku_table > tbody');
    $('tr[tr-id="' + i + '"]').clone().prependTo('#person_haiku_table > tbody');
  }
  $('#person_haiku_table > tbody > tr').each(function(i, elem) {
    if ( i+1 > size*2 ) {
      $(elem).remove();
    }
  });
  $('tr').on('click', trFunc);
  $('tr').on('mouseover', trMFunc);
});

// スクロール時にページトップボタン表示
var appear = false;
$(window).scroll(function () { 
  if ($(this).scrollTop() > 30) {
  if (appear == false) {
    appear = true;
    $('#page_top').stop().animate({
      'bottom': '0px'
    }, 300);
  }
  } else {
  if (appear) {
    appear = false;
    $('#page_top').stop().animate({
      'bottom': '-71px'
    }, 300);
  }
  }
});

// ページトップボタン押下、0.25秒かけてトップへ
$('#page_top').click(function () {
  $('body, html').animate({ scrollTop: 0 }, 250);
  return false;
});

// パネル型ボタン遷移
$('.clickable').click(function () {
  location.href = jQuery(this).attr('data-url');
});