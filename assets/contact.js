$(function () {
    var $name = $('#ContactFormName'),
        $nameKana = $('#contact_お名前ふりがな'),
        $mail = $('#ContactFormEmail'),
        $tel = $('#ContactFormPhone'),
        $contactBody = $('#ContactFormMessage'),
        $agree = $('#agreement'),
        $mordalView = $('.mordal-view-btn'),
        $mordalName = $('.mordal-name'),
        $mordalNameKana = $('.mordal-nameKana'),
        $mordalMail = $('.mordal-mail'),
        $mordalTel = $('.mordal-tel'),
        $mordalContactBody = $('.mordal-contactBody'),
        $mordalWindow = $('.mordal-form-check'),
        $mordalMask = $('.contact-mask'),
        $mordalFix = $('.mordal-button').find('button'),
        $mordalClose = $('.mordal-close');
    var flag = false;



    $mordalView.click(function () {
        agreeChecked = $agree.prop("checked");
        $notInput = $('.not-input').text();
        $notKana = $('.not-kana').text();
      	$notTel = $('.not-tel').text();
        $telNum = $tel.val().replace(/[^0-9]/g, '').length;
        if ($nameKana.val().match(/(?=.*?[^\u3041-\u309F])[^\u3041-\u309F\s].*/)) {
            $notKana = $('.not-kana').text();
            if ($notKana == "" || $notKana == null) {
                $mordalView.after('<p class="not-kana">ふりがなは全てひらがなで入力してください。</p>')
            } else {
            }
            flag = false;
            if ($name.val() == "" || $nameKana.val() == "" || $mail.val() == "" || $tel.val() == "" || agreeChecked == false) {
                flag = false;
                if ($notInput == "" || $notInput == null) {
                    $mordalView.after('<p class="not-input">必須項目が入力されていません</p>')
//                     return;
                } else {
                }
            } else {
                flag = true;
                if ($notInput == "" || $notInput == null) {
                } else {
                    $('.not-input').remove();
                }
            }
//             return;
        } else {
            $('.not-kana').remove();
        }
      

      if ($telNum == 10 || $telNum == 11) {
            $('.not-tel').remove();
        if ($nameKana.val().match(/(?=.*?[^\u3041-\u309F])[^\u3041-\u309F\s].*/)) {
           $notKana = $('.not-kana').text();
            if ($notKana == "" || $notKana == null) {
                $mordalView.after('<p class="not-kana">ふりがなは全てひらがなで入力してください。</p>');
            } else {
            }
            flag = false;
            return;
        }
      } else {
            flag = false;
        if($notTel == "" || $notTel == null){
          	$mordalView.after('<p class="not-tel">電話番号は10桁もしくは11桁の半角数字で入力してください。</p>');
        }
            return;
      }
      
      
        if ($name.val() == "" || $nameKana.val() == "" || $mail.val() == "" || $tel.val() == "" || agreeChecked == false) {
            flag = false;
            if ($notInput == "" || $notInput == null) {
                $mordalView.after('<p class="not-input">必須項目が入力されていません</p>')
                return;
            } else {
            }
        } else {
            flag = true;
            if ($notInput == "" || $notInput == null) {

            } else {
                $('.not-input').remove();
            }
        }



        if (flag) {
            $mordalName.text($name.val());
            $mordalNameKana.text($nameKana.val());
            $mordalMail.text($mail.val());
            $mordalTel.text($tel.val());
            $mordalContactBody.text($contactBody.val());
            $mordalWindow.css("visibility", "visible");
            $mordalWindow.animate({ opacity: 1 }, { duration: 400 });
            $mordalMask.css("visibility", "visible");
            $mordalMask.animate({ opacity: 0.6 }, { duration: 400 });         
            $('body').css("overflow", "hidden");
            $('html').css("overflow", "hidden");
			var scrollTop;
          $('body').css({
              position: 'fixed',
              top: -scrollTop,
            width:'100%'
            });
        }
        else {

        }
    });


    $mordalFix.click(function () {
        $mordalMask.animate({ opacity: 0 }, { duration: 400 });
        $mordalMask.css("visibility", "hidden");

        $mordalWindow.animate({ opacity: 0 }, { duration: 400 });
        $mordalWindow.css("visibility", "hidden");
        $('body').css("overflow", "visible");
        $('html').css("overflow", "visible");
         $('body').css({
            position: '',
            top: ''
          });
    });

 
  
})

