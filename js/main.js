(function() {
	setTimeout(function(){
            $(".loading_text").fadeOut(500)
        },500)
        setTimeout(function(){
            TweenMax.to($('.loaging_img_box'), 1.5, {scale: 40, opacity: 0});
        }, 2500)
        setTimeout(function(){
            $('#loading').fadeOut({
                duration: 1500,
                complete: function(){
                    $('#loading').remove();
                }
            })
        },2500)


})();
