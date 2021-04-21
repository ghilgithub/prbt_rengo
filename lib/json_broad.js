//JSONデータを取得し、配列に格納する
$.getJSON('output2.json', function(allHdata){

  function selectFunc(){

    var dateVal = $('#select-date').val();
    var normal_index = 0;
    var exam_index = 30;
    var title_index = 60;
    var themeArray = [];
  
  
    // セレクトボックスの日付をもとに配列の内容を順に走査
    var hDataArray_normal = $.grep(allHdata, function(elem, index) {
      // 通常査定でフィルター
      return (elem.日付 == dateVal && elem.結果 != '');
    });
    if ( hDataArray_normal.length != 0 ) {
      $('#div-tables').append('<h3 id="topage"><i class="fa fa-angle-right"></i> 通常査定</h3><div class="showback"><table class="table table-advance table-hover" id="broadcast_haiku_table"><thead><tr><th>順位</th><th class="hidden-xs"><i class="fa fa-clipboard"></i> 査定</th><th><i class="fa fa-pencil"></i> 俳句</th><th class="hidden-xs"><i class="fa fa-user"></i> 作者</th></tr></thead><tbody></tbody></table></div>');
    }
    $.each(hDataArray_normal, function(index, elem) {
      var i = normal_index + index + 1;
      $('#broadcast_haiku_table tbody').append('<tr tr-id="' + i + '"></tr><tr tr-id="' + i + '_d" style="display:none" class="haiku_detail"></tr>');
      $('tr[tr-id="' + i + '"]').append('<td class="noenter">' + elem.順位 + '</td>');
      var hResult = '';
      if (elem.結果 == '才能アリ') {
        var tokutaisei = elem.flg == '特待生昇格' ? ' <span class="label label-toku">特待生昇格</span>' : '';
        hResult = '<span class="label label-ari">' + elem.結果  + '&nbsp;' + elem.評価 + '</span>' + tokutaisei;
      } else if (elem.結果 == '凡人') {
        hResult = '<span class="label label-bon">' + elem.結果  + '&nbsp;' + elem.評価 + '</span>'
      } else if (elem.結果 == '才能ナシ') {
        hResult = '<span class="label label-nasi">' + elem.結果 + '&nbsp;' + elem.評価 + '</span>'
      } else {
        hResult = '<b>' + elem.結果 + '</b>';
      }
      $('tr[tr-id="' + i + '"]').append('<td class="hidden-xs">' + hResult + '</td>');
      if (elem.前書き == '') {
        $('tr[tr-id="' + i + '"]').append('<td><b>' + elem.俳句 + '</b><br><span class="visible-xs"><div class="row"><div class="col-xs-5">' + hResult + '</div><div class="col-xs-7">' + elem.名前 + '</div></div></span></td>');
      } else {
        $('tr[tr-id="' + i + '"]').append('<td><span style="font-size:11px;">' + elem.前書き + '</span><br><b>' + elem.俳句 + '</b><br><span class="visible-xs"><div class="row"><div class="col-xs-5">' + hResult + '</div><div class="col-xs-7">' + elem.名前 + '</div></div></span></td>');
      }
      $('tr[tr-id="' + i + '"]').append('<td class="hidden-xs">' + elem.名前 + '</td>');
      $('tr[tr-id="' + i + '_d"]').append('<td></td>');
      var tensakumaegaki = ''
      if (elem.添削前書き != '') {
        tensakumaegaki = '<span style="font-size:10px;">' + elem.添削前書き + ' </span>'
      }
      if (elem.r1 == '') {
        retake = '添削なし'
      } else if (elem.r1 != '' && elem.r2 == '') {
        retake = '添削例 : ' + tensakumaegaki + '<b>' + elem.r1 + '</b>';
      } else if (elem.r1 != '' && elem.r2 != '') {
        retake = '添削例1 : ' + tensakumaegaki + '<b>' + elem.r1 + '</b>';
      }
      if (elem.r2 != '') {
        retake += '<br>添削例2 : ' + tensakumaegaki + '<b>' + elem.r2 + '</b>';
      }
      if (elem.r3 != '') {
        retake += '<br>添削例3 : ' + tensakumaegaki + '<b>' + elem.r3 + '</b>';
      }
      if (elem.r4 != '') {
        retake += '<br>添削例4 : ' + tensakumaegaki + '<b>' + elem.r4 + '</b>';
      }
      if (elem.r5 != '') {
        retake += '<br>添削例5 : ' + tensakumaegaki + '<b>' + elem.r5 + '</b>';
      }
      if (elem.etc != '') {
        retake += '<br>' + elem.etc;
      }
      $('tr[tr-id="' + i + '_d"]').append('<td colspan="4">' + retake + '</td>');
      if (themeArray.length == 0) {
        themeArray.push(elem.お題);
      } else if ($.inArray(elem.お題, themeArray) == -1) {
        themeArray.push(elem.お題);
      }
    });
  
  
  
    // セレクトボックスの日付をもとに配列の内容を順に走査
    var specialTitleDict = {}
    var hDataArray_exam = $.grep(allHdata, function(elem, index) {
      // 昇格試験でフィルター
      if (elem.特別タイトル != '') {
        specialTitleDict[elem.日付] = elem.特別タイトル
      }
      return (elem.日付 == dateVal && elem.結果_試験 != '' && elem.タイトル == '');
    });
    if ( hDataArray_exam.length != 0 ) {
      divTables = '<h3 id="topage"><i class="fa fa-angle-right"></i> 昇格試験</h3><div class="showback"><table class="table table-advance table-hover" id="exam_haiku_table"><thead><tr><th class="hidden-xs"><i class="fa fa-clipboard"></i> 査定</th><th><i class="fa fa-pencil"></i> 俳句</th><th class="hidden-xs"><i class="fa fa-user"></i> 作者</th></tr></thead><tbody></tbody></table></div>'
      if (dateVal in specialTitleDict) {
        divTables = divTables.replace('昇格試験', specialTitleDict[dateVal])
      }
      $('#div-tables').append(divTables)
    }
    $.each(hDataArray_exam, function(index, elem) {
      var i = exam_index + index + 1;
      $('#exam_haiku_table tbody').append('<tr tr-id="' + i + '"></tr><tr tr-id="' + i + '_d" style="display:none" class="haiku_detail"></tr>');
      if (elem.結果_試験 == '1ランク昇格' || elem.結果_試験 == '2ランク昇格' || elem.結果_試験 == '4ランク昇格' || elem.結果_試験 == '一つ前進') {
        hResult = elem.段位 + ' へ <span class="label label-up">' + elem.結果_試験 + '</span>'
      } else if (elem.結果_試験 == '現状維持') {
        hResult = elem.段位 + ' で <span class="label label-even">' + elem.結果_試験 + '</span>'
      } else if (elem.結果_試験 == '1ランク降格' || elem.結果_試験 == '一つ後退') {
        hResult = elem.段位 + ' に <span class="label label-down">' + elem.結果_試験 + '</span>'
      } else if (elem.結果_試験 == '傑作認定') {
        hResult = elem.段位 + ' / 50句 で <span class="label label-up">' + elem.結果_試験 + '</span>'
      } else if (elem.結果_試験 == 'ボツ') {
        hResult = elem.段位 + ' / 50句 で <span class="label label-down">' + elem.結果_試験 + '</span>'
      } else if (titleResult != '') {
        hResult = titleResult
      } else {
        hResult = '<b>' + elem.結果 + '</b>';
      }
      $('tr[tr-id="' + i + '"]').append('<td class="noenter hidden-xs">' + hResult + '</td>');
      if (elem.前書き == '') {
        $('tr[tr-id="' + i + '"]').append('<td><b>' + elem.俳句 + '</b><br><span class="visible-xs"><div class="row"><div class="col-xs-7">' + hResult + '</div><div class="col-xs-5">' + elem.名前 + '</div></div></span></td>');
      } else {
        $('tr[tr-id="' + i + '"]').append('<td><span style="font-size:11px;">' + elem.前書き + '</span><br><b>' + elem.俳句 + '</b><br><span class="visible-xs"><div class="row"><div class="col-xs-7">' + hResult + '</div><div class="col-xs-5">' + elem.名前 + '</div></div></span></td>');
      }
      $('tr[tr-id="' + i + '"]').append('<td class="noenter hidden-xs">' + elem.名前 + '</td>');
      $('tr[tr-id="' + i + '_d"]').append('<td class="hidden-xs"></td>');
      var tensakumaegaki = ''
      if (elem.添削前書き != '') {
        tensakumaegaki = '<span style="font-size:10px;">' + elem.添削前書き + ' </span>'
      }
      if (elem.r1 == '') {
        retake = '添削なし'
      } else if (elem.r1 != '' && elem.r2 == '') {
        retake = '添削例 : ' + tensakumaegaki + '<b>' + elem.r1 + '</b>';
      } else if (elem.r1 != '' && elem.r2 != '') {
        retake = '添削例1 : ' + tensakumaegaki + '<b>' + elem.r1 + '</b>';
      }
      if (elem.r2 != '') {
        retake += '<br>添削例2 : ' + tensakumaegaki + '<b>' + elem.r2 + '</b>';
      }
      if (elem.r3 != '') {
        retake += '<br>添削例3 : ' + tensakumaegaki + '<b>' + elem.r3 + '</b>';
      }
      if (elem.r4 != '') {
        retake += '<br>添削例4 : ' + tensakumaegaki + '<b>' + elem.r4 + '</b>';
      }
      if (elem.r5 != '') {
        retake += '<br>添削例5 : ' + tensakumaegaki + '<b>' + elem.r5 + '</b>';
      }
      if (elem.etc != '') {
        retake += '<br>' + elem.etc;
      }
      $('tr[tr-id="' + i + '_d"]').append('<td colspan="3">' + retake + '</td>');
      if (themeArray.length == 0) {
        themeArray.push(elem.お題);
      } else if ($.inArray(elem.お題, themeArray) == -1) {
        themeArray.push(elem.お題);
      }
    });
  
  
  
    // セレクトボックスの日付をもとに配列の内容を順に走査
    var hDataArray_title = $.grep(allHdata, function(elem, index) {
      // タイトル戦でフィルター
      return (elem.日付 == dateVal && elem.結果_タイトル != '');
    });
    $.each(hDataArray_title, function(index, elem) {
      var i = title_index + index + 1;
      if(!$('#title_haiku_table').length){
        $('#div-tables').append('<h3 id="topage"><i class="fa fa-angle-right"></i> ' + elem.タイトル + '</h3><div class="showback"><table class="table table-advance table-hover" id="title_haiku_table"><thead><tr><th>順位</th><th><i class="fa fa-pencil"></i> 俳句</th><th class="hidden-xs"><i class="fa fa-user"></i> 作者</th></tr></thead><tbody></tbody></table></div>');
      }
      $('#title_haiku_table tbody').append('<tr tr-id="' + i + '"></tr><tr tr-id="' + i + '_d" style="display:none" class="haiku_detail"></tr>');
      var hResult = '';
      if (elem.flg == 'up') {
        hResult = '<td><span class="label label-up">' + elem.結果_タイトル + '</span></td>'
      } else if (elem.flg == 'even') {
        hResult = '<td><span class="label label-even">' + elem.結果_タイトル + '</span></td>'
      } else if (elem.flg == 'down') {
        hResult = '<td><span class="label label-down">' + elem.結果_タイトル + '</span></td>'
      } else {
        hResult = '<td><b>' + elem.結果_タイトル + '</b></td>';
      }
      $('tr[tr-id="' + i + '"]').append(hResult);
      if (elem.前書き == '') {
        $('tr[tr-id="' + i + '"]').append('<td><b>' + elem.俳句 + '</b><br><span class="visible-xs">' + elem.名前 + '</span></td>');
      } else {
        $('tr[tr-id="' + i + '"]').append('<td><span style="font-size:11px;">' + elem.前書き + '</span><br><b>' + elem.俳句 + '</b><br><span class="visible-xs">' + elem.名前 + '</span></td>');
      }
      $('tr[tr-id="' + i + '"]').append('<td class="hidden-xs">' + elem.名前 + '</td>');
      $('tr[tr-id="' + i + '_d"]').append('<td></td>');
      var tensakumaegaki = ''
      if (elem.添削前書き != '') {
        tensakumaegaki = '<span style="font-size:10px;">' + elem.添削前書き + ' </span>'
      }
      if (elem.r1 == '') {
        retake = '添削なし'
      } else if (elem.r1 != '' && elem.r2 == '') {
        retake = '添削例 : ' + tensakumaegaki + '<b>' + elem.r1 + '</b>';
      } else if (elem.r1 != '' && elem.r2 != '') {
        retake = '添削例1 : ' + tensakumaegaki + '<b>' + elem.r1 + '</b>';
      }
      if (elem.r2 != '') {
        retake += '<br>添削例2 : ' + tensakumaegaki + '<b>' + elem.r2 + '</b>';
      }
      if (elem.r3 != '') {
        retake += '<br>添削例3 : ' + tensakumaegaki + '<b>' + elem.r3 + '</b>';
      }
      if (elem.r4 != '') {
        retake += '<br>添削例4 : ' + tensakumaegaki + '<b>' + elem.r4 + '</b>';
      }
      if (elem.r5 != '') {
        retake += '<br>添削例5 : ' + tensakumaegaki + '<b>' + elem.r5 + '</b>';
      }
      if (elem.etc != '') {
        retake += '<br>' + elem.etc;
      }
      $('tr[tr-id="' + i + '_d"]').append('<td colspan="3">' + retake + '</td>');
      if (themeArray.length == 0) {
        themeArray.push(elem.お題);
      } else if ($.inArray(elem.お題, themeArray) == -1) {
        themeArray.push(elem.お題);
      }
    });
  
    var theme = ''
    if (themeArray.length == 1) {
      theme = themeArray[0];
    } else {
      $.each(themeArray, function(index, value) {
        theme += value + ', ';
      });
      theme = theme.substr(0, theme.length-2);
    }
    theme = 'お題：' + theme
    $("#theme-and-date").html('<i class="fa fa-angle-right"></i><span class="noenter"> ' + dateVal + '</span>　<span class="noenter">' + theme + '</span>');
    $("#date-xs").html(dateVal);
    $("#theme-xs").html(theme);
  
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
  
  };
  
  
  
  /* 初期表示処理 */
  $(function() {
    var date_array = [];
    var date_array_dic = {};
    // 日付を抽出
    $.each(allHdata, function(index, elem) {
      if (elem.特別タイトル != '' && !date_array_dic[elem.日付]) {
        date_array_dic[elem.日付] = elem.特別タイトル;
      }
      if (elem.タイトル != '' && !date_array_dic[elem.日付]) {
        date_array_dic[elem.日付] = elem.タイトル;
      }
      date_array.push(elem.日付);
    });
    // 重複した日付の削除
    date_array = date_array.filter(function (x, i, self) {
      return self.indexOf(x) === i;
    });
    // セレクトボックスに日付を追加
    $.each(date_array, function(index, value) {
      var date_value = value;
      if (date_array_dic[value]) {
        date_value += ' ' + date_array_dic[value]
      }
      $('#select-date').append($('<option>').html(date_value).val(value));
      if( index == 0 ){
        $('#select-date option[value="' + value + '"]').prop('selected', true);
      }
    });
    // 画面表示
    selectFunc();
  });
  
  /* セレクトボックス選択時 */
  $("#select-date").on('change', function() {
    $("#theme-and-date").empty();
    $("#div-tables").empty();
    selectFunc();
  });
  
});

