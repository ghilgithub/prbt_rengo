jQuery(document).ready(function($) {
  "use strict";

  // 問い合わせフォームの挙動
  $('form.mail-form').submit(function(event) {
    
    event.preventDefault(); // デフォルトのform操作を一時的に防止する

    var action = $(this).attr('action');
    var str = $(this).serialize();
    var this_form = $(this);
    
    this_form.find('.alert-success').slideUp();
    this_form.find('.alert-danger').slideUp();
    this_form.find('.loading').slideDown(
      function(){
        $.ajax({
          type: "POST",
          url: action,
          data: str,
          timeout: 30000, // タイムアウト時間 30秒
          dataType: "text",
        }).done(function( data, textStatus, jqXHR ) {
          if (data == 'success') {
            this_form.find('.loading').slideUp();
            this_form.find('.alert-success').slideDown();
            this_form.find("input, textarea").val('');
          }else{
            this_form.find('.loading').slideUp();
            this_form.find('.alert-danger').slideDown();
          }
        }).fail(function( jqXHR, textStatus, errorThrown ) {
          this_form.find('.loading').slideUp();
          this_form.find('.alert-danger').slideDown();
        });
    });

    return false;
  });

});
