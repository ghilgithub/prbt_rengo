/* 初期表示処理 */
$(function() {
  // JSONデータを取得し、配列に格納する
  $.getJSON('output.json', function(allPdata){
    $.getJSON('output2.json', function(allHdata){
  
      var userId = Number(location.search.split('=')[1]);

      // 配列の内容を順に走査
      var pData = $.grep(allPdata, function(elem, index) {
        // IDの値でフィルター
        return (elem.ID == userId);
      })[0];
      $('#h-name').text(pData.名前);
      $('title').text(pData.名前 + ' - Prbt Haiku Database');
      $('#h-rank').text(pData.段位);
      if ( pData.段位.substr( 0, 3 ) == '特待生' ) {
        $('#h-rank').addClass('label-toku');
      } else if ( pData.段位.substr( 0, 2 ) == '名人' || pData.段位 == '永世名人' ) {
        $('#h-rank').addClass('label-mei');
      } else {
        $('#h-rank').parent().remove();
      }

      /*
      if (pData.ari != '' || pData.bon != '' || pData.nasi != '') {
        $('#table-person-info').append('<tr><td class="nowrap">通常成績</td><td id="sense-info"></td></tr>');
        if (pData.ari != '') {
          $('#sense-info').append('<span class="nowrap"><span class="label label-ari">才能アリ</span>&nbsp;× ' + pData.ari + '&nbsp;&nbsp;&nbsp;&nbsp;</span> ');
        }
        if (pData.bon != '') {
          $('#sense-info').append('<span class="nowrap"><span class="label label-bon">凡人</span>&nbsp;× ' + pData.bon + '&nbsp;&nbsp;&nbsp;&nbsp;</span> ');
        }
        if (pData.nasi != '') {
          $('#sense-info').append('<span class="nowrap"><span class="label label-nasi">才能ナシ</span>&nbsp;× ' + pData.nasi + '&nbsp;&nbsp;&nbsp;&nbsp;</span>');
        }
      }
      if (pData.up1 != '' || pData.even != '' || pData.down1 != '') {
        $('#table-person-info').append('<tr><td class="nowrap">昇格試験</td><td id="rank-info"></td></tr>');
        if (pData.up4 != '') {
          $('#rank-info').append('<span class="nowrap"><span class="label label-up">4ランク昇格</span>&nbsp;× ' + pData.up4 + '&nbsp;&nbsp;&nbsp;&nbsp;</span> ');
        }
        if (pData.up2 != '') {
          $('#rank-info').append('<span class="nowrap"><span class="label label-up">2ランク昇格</span>&nbsp;× ' + pData.up2 + '&nbsp;&nbsp;&nbsp;&nbsp;</span> ');
        }
        if (pData.up1 != '') {
          $('#rank-info').append('<span class="nowrap"><span class="label label-up">1ランク昇格</span>&nbsp;× ' + pData.up1 + '&nbsp;&nbsp;&nbsp;&nbsp;</span> ');
        }
        if (pData.even != '') {
          $('#rank-info').append('<span class="nowrap"><span class="label label-even">現状維持</span>&nbsp;× ' + pData.even + '&nbsp;&nbsp;&nbsp;&nbsp;</span> ');
        }
        if (pData.down1 != '') {
          $('#rank-info').append('<span class="nowrap"><span class="label label-down">1ランク降格</span>&nbsp;× ' + pData.down1 + '&nbsp;&nbsp;&nbsp;&nbsp;</span>');
        }
      }
      if (pData.adv != '' || pData.stop != '' || pData.back != '') {
        $('#table-person-info').append('<tr><td class="nowrap">永世名人への道</td><td id="michi-info"></td></tr>');
        if (pData.adv != '') {
          $('#michi-info').append('<span class="nowrap"><span class="label label-up">一つ前進</span>&nbsp;× ' + pData.adv + '&nbsp;&nbsp;&nbsp;&nbsp;</span> ');
        }
        if (pData.stop != '') {
          $('#michi-info').append('<span class="nowrap"><span class="label label-even">現状維持</span>&nbsp;× ' + pData.stop + '&nbsp;&nbsp;&nbsp;&nbsp;</span> ');
        }
        if (pData.back != '') {
          $('#michi-info').append('<span class="nowrap"><span class="label label-down">一つ後退</span>&nbsp;× ' + pData.back + '&nbsp;&nbsp;&nbsp;&nbsp;</span>');
        }
      }
      if (pData.kessaku != '' || pData.botu != '') {
        $('#table-person-info').append('<tr><td class="nowrap">俳句傑作認定</td><td id="kushu-info"></td></tr>');
        if (pData.kessaku != '') {
          $('#kushu-info').append('<span class="nowrap"><span class="label label-up">傑作認定</span>&nbsp;× ' + pData.kessaku + '&nbsp;&nbsp;&nbsp;&nbsp;</span> ');
        }
        if (pData.botu != '') {
          $('#kushu-info').append('<span class="nowrap"><span class="label label-down">ボツ</span>&nbsp;× ' + pData.botu + '&nbsp;&nbsp;&nbsp;&nbsp;</span>');
        }
      }
      */

      // 配列の内容を順に走査
      var hDataArray = $.grep(allHdata, function(elem, index) {
        // IDの値でフィルター
        return (elem.名前 == pData.名前);
      });
      var all_i = 0;

      // ユーザー情報変数群
      var ari = 0;
      var bon = 0;
      var nasi = 0;
      var up4 = 0;
      var up3 = 0;
      var up2 = 0;
      var up1 = 0;
      var even = 0;
      var down1 = 0;
      var down3 = 0;
      var adv2 = 0;
      var adv = 0;
      var stop = 0;
      var back = 0;
      var kessaku = 0;
      var botu = 0;
      var title = new Array();

      // 総数取得、ユーザー情報取得
      $.each(hDataArray, function(index, elem) {
        // 総句数をカウント
        all_i = all_i + 1;
        // 通常査定をカウント
        if ( elem.結果 != '' ) {
          if ( elem.結果 == '才能アリ' ) {
            ari = ari + 1;
          } else if ( elem.結果 == '凡人' ) {
            bon = bon + 1;
          } else if ( elem.結果 == '才能ナシ' ) {
            nasi = nasi + 1;
          }
        }
        // 昇格試験をカウント
        if ( elem.結果_試験 != '' ) {
          if ( elem.結果_試験 == '4ランク昇格' ) {
            up4 = up4 + 1;
          } else if ( elem.結果_試験 == '3ランク昇格' ) {
            up3 = up3 + 1;
          } else if ( elem.結果_試験 == '2ランク昇格' ) {
            up2 = up2 + 1;
          } else if ( elem.結果_試験 == '1ランク昇格' ) {
            up1 = up1 + 1;
          } else if ( elem.結果_試験 == '現状維持' && elem.段位.indexOf('★') == -1 ) {
            even = even + 1;
          } else if ( elem.結果_試験 == '1ランク降格' ) {
            down1 = down1 + 1;
          } else if ( elem.結果_試験 == '3ランク降格' ) {
            down3 = down3 + 1;
          } else if ( elem.結果_試験 == '二つ前進' ) {
            adv2 = adv2 + 1;
          } else if ( elem.結果_試験 == '一つ前進' ) {
            adv = adv + 1;
          } else if ( elem.結果_試験 == '現状維持' && elem.段位.indexOf('★') != -1 ) {
            stop = stop + 1;
          } else if ( elem.結果_試験 == '一つ後退' ) {
            back = back + 1;
          } else if ( elem.結果_試験 == '傑作認定' ) {
            kessaku = kessaku + 1;
          } else if ( elem.結果_試験 == 'ボツ' ) {
            botu = botu + 1;
          }
        }
        // タイトル戦をカウント
        if ( elem.ユーザータイトル != '' ) {
          title.push(elem.ユーザータイトル);
        }
      });

      // カウントをした情報をもとにユーザー情報を作成
      if (ari != 0 || bon != 0 || nasi != 0) {
        $('#table-person-info').append('<tr><td class="nowrap">通常成績</td><td id="sense-info"></td></tr>');
        if (ari != 0) {
          $('#sense-info').append('<span class="nowrap"><span class="label label-ari">才能アリ</span>&nbsp;× ' + ari + '&nbsp;&nbsp;&nbsp;&nbsp;</span> ');
        }
        if (bon != 0) {
          $('#sense-info').append('<span class="nowrap"><span class="label label-bon">凡人</span>&nbsp;× ' + bon + '&nbsp;&nbsp;&nbsp;&nbsp;</span> ');
        }
        if (nasi != 0) {
          $('#sense-info').append('<span class="nowrap"><span class="label label-nasi">才能ナシ</span>&nbsp;× ' + nasi + '&nbsp;&nbsp;&nbsp;&nbsp;</span>');
        }
      }
      if (up1 != 0 || even != 0 || down1 != 0) {
        $('#table-person-info').append('<tr><td class="nowrap">昇格試験</td><td id="rank-info"></td></tr>');
        if (up4 != 0) {
          $('#rank-info').append('<span class="nowrap"><span class="label label-up">4ランク昇格</span>&nbsp;× ' + up4 + '&nbsp;&nbsp;&nbsp;&nbsp;</span> ');
        }
        if (up3 != 0) {
          $('#rank-info').append('<span class="nowrap"><span class="label label-up">3ランク昇格</span>&nbsp;× ' + up3 + '&nbsp;&nbsp;&nbsp;&nbsp;</span> ');
        }
        if (up2 != 0) {
          $('#rank-info').append('<span class="nowrap"><span class="label label-up">2ランク昇格</span>&nbsp;× ' + up2 + '&nbsp;&nbsp;&nbsp;&nbsp;</span> ');
        }
        if (up1 != 0) {
          $('#rank-info').append('<span class="nowrap"><span class="label label-up">1ランク昇格</span>&nbsp;× ' + up1 + '&nbsp;&nbsp;&nbsp;&nbsp;</span> ');
        }
        if (even != 0) {
          $('#rank-info').append('<span class="nowrap"><span class="label label-even">現状維持</span>&nbsp;× ' + even + '&nbsp;&nbsp;&nbsp;&nbsp;</span> ');
        }
        if (down1 != 0) {
          $('#rank-info').append('<span class="nowrap"><span class="label label-down">1ランク降格</span>&nbsp;× ' + down1 + '&nbsp;&nbsp;&nbsp;&nbsp;</span>');
        }
        if (down3 != 0) {
          $('#rank-info').append('<span class="nowrap"><span class="label label-down">3ランク降格</span>&nbsp;× ' + down1 + '&nbsp;&nbsp;&nbsp;&nbsp;</span>');
        }
      }
      if (adv2 != 0 || adv != 0 || stop != 0 || back != 0) {
        $('#table-person-info').append('<tr><td class="nowrap">永世名人への道</td><td id="michi-info"></td></tr>');
        if (adv2 != 0) {
          $('#michi-info').append('<span class="nowrap"><span class="label label-up">二つ前進</span>&nbsp;× ' + adv2 + '&nbsp;&nbsp;&nbsp;&nbsp;</span> ');
        }
        if (adv != 0) {
          $('#michi-info').append('<span class="nowrap"><span class="label label-up">一つ前進</span>&nbsp;× ' + adv + '&nbsp;&nbsp;&nbsp;&nbsp;</span> ');
        }
        if (stop != 0) {
          $('#michi-info').append('<span class="nowrap"><span class="label label-even">現状維持</span>&nbsp;× ' + stop + '&nbsp;&nbsp;&nbsp;&nbsp;</span> ');
        }
        if (back != 0) {
          $('#michi-info').append('<span class="nowrap"><span class="label label-down">一つ後退</span>&nbsp;× ' + back + '&nbsp;&nbsp;&nbsp;&nbsp;</span>');
        }
      }
      if (kessaku != '' || botu != '') {
        $('#table-person-info').append('<tr><td class="nowrap">俳句傑作認定</td><td id="kushu-info"></td></tr>');
        if (kessaku != '') {
          $('#kushu-info').append('<span class="nowrap"><span class="label label-up">傑作認定</span>&nbsp;× ' + kessaku + '&nbsp;&nbsp;&nbsp;&nbsp;</span> ');
        }
        if (botu != '') {
          $('#kushu-info').append('<span class="nowrap"><span class="label label-down">ボツ</span>&nbsp;× ' + botu + '&nbsp;&nbsp;&nbsp;&nbsp;</span>');
        }
      }
      if (title.length > 0) {
        title = title.reverse();
        $('#table-person-info').append('<tr><td class="nowrap">制覇タイトル</td><td id="title-info"></td></tr>');
        for (const elem of title) {
          var result = elem.split('/');
          $('#title-info').append('<span class="nowrap"><span class="label label-' + result[1] + '">' + result[0] + ' 🏆</span></span>&nbsp;&nbsp; ');
        }
      }

      $.each(hDataArray, function(index, elem) {
        var i = all_i;
        $('#person_haiku_table tbody').append('<tr tr-id="' + i + '"></tr><tr tr-id="' + i + '_d" style="display:none" class="haiku_detail"></tr>');
        var hResult = '';
        var titleResult = '';
        if (elem.タイトル != '') {
          var titleLabel = 'up';
          if ( elem.flg == 'up' ) {
            titleLabel = 'up';
          } else if ( elem.flg == 'even' ) {
            titleLabel = 'even';
          } else if ( elem.flg == 'down' ) {
            titleLabel = 'down';
          } else {
            titleLabel = 'down';
          }
          titleResult = elem.タイトル + '&nbsp;<span class="label label-' + titleLabel + '">' + elem.結果_タイトル + '</span>'
        }
        var t = titleResult == '' ? '' : titleResult + '&nbsp;&nbsp;&nbsp;&nbsp;'
        var juni = elem.順位 == '' ? '' : elem.順位 + '&nbsp;'
        if (elem.結果 == '才能アリ') {
          var tokutaisei = elem.flg == '特待生昇格' ? ' <span class="label label-toku">特待生昇格</span>' : '';
          hResult = '<span class="label label-ari">' + elem.結果 + '&nbsp;' + juni + elem.評価 + '</span>' + tokutaisei
        } else if (elem.結果 == '凡人') {
          hResult = '<span class="label label-bon">' + elem.結果 + '&nbsp;' + juni + elem.評価 + '</span>'
        } else if (elem.結果 == '才能ナシ') {
          hResult = '<span class="label label-nasi">' + elem.結果 + '&nbsp;' + juni + elem.評価 + '</span>'
        } else if (elem.結果_試験 == '1ランク昇格' || elem.結果_試験 == '2ランク昇格' || elem.結果_試験 == '3ランク昇格' || elem.結果_試験 == '4ランク昇格' || elem.結果_試験 == '一つ前進' || elem.結果_試験 == '二つ前進') {
          hResult = t + elem.段位 + ' へ <span class="label label-up">' + elem.結果_試験 + '</span>'
        } else if (elem.結果_試験 == '現状維持') {
          hResult = elem.段位 + ' で <span class="label label-even">' + elem.結果_試験 + '</span>'
        } else if (elem.結果_試験 == '1ランク降格' || elem.結果_試験 == '3ランク降格' || elem.結果_試験 == '一つ後退') {
          hResult = t + elem.段位 + ' に <span class="label label-down">' + elem.結果_試験 + '</span>'
        } else if (elem.結果_試験 == '傑作認定') {
          hResult = t + elem.段位 + ' / 50句 で <span class="label label-up">' + elem.結果_試験 + '</span>'
        } else if (elem.結果_試験 == 'ボツ') {
          hResult = t + elem.段位 + ' / 50句 で <span class="label label-down">' + elem.結果_試験 + '</span>'
        } else if (titleResult != '') {
          hResult = titleResult;
        } else {
          hResult = '<b>' + elem.結果 + '</b>';
        }
        $('tr[tr-id="' + i + '"]').append('<td>' + i + '</td>');
        if (elem.前書き == '') {
          $('tr[tr-id="' + i + '"]').append('<td><b>' + elem.俳句 + '</b><br><span class="visible-xs">' + hResult + '</span></td>');
        } else {
          $('tr[tr-id="' + i + '"]').append('<td><span style="font-size:11px;">' + elem.前書き + '</span><br><b>' + elem.俳句 + '</b><br><span class="visible-xs">' + hResult + '</span></td>');
        }
        $('tr[tr-id="' + i + '"]').append('<td class="hidden-xs">' + hResult + '</td>');
        $('tr[tr-id="' + i + '"]').append('<td class="hidden-xs">' + elem.お題 + '</td>');
        $('tr[tr-id="' + i + '"]').append('<td class="hidden-xs">' + elem.日付 + '</td>');
        $('tr[tr-id="' + i + '_d"]').append('<td></td>');
        var retake = '';
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
        $('tr[tr-id="' + i + '_d"]').append('<td colspan="4">' + retake + '<span class="visible-xs">' + elem.日付 + '&nbsp;&nbsp;&nbsp;&nbsp;お題 : ' + elem.お題 + '</span></td>');
        all_i = all_i - 1;
      });

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

    });
  });

});