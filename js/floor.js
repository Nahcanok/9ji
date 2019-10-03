//电梯楼层
$(function(){
    $(window).on('scroll',function(){
        var $scroll=$(this).scrollTop();
        // console.log($scroll);
        
        if($scroll>=800){
            $('.diy-elevator').show();
        }else{
            $('.diy-elevator').hide();
        }
        $('.diy-floor').each(function(){
            var $loutitop=$('.diy-floor').eq($(this).index()).offset().top+400;
            // console.log($loutitop);
            if($loutitop>$scroll){
                $('.diy-elevator a').removeClass('active');
                $('.diy-elevator a').eq($(this).index()).addClass('active');
                return false;
            }
        });
    });
    
    var $loutia=$('.diy-elevator a').not('.last');
    $loutia.on('click',function(e){
        e.preventDefault();
        $(this).addClass('active').siblings('a').removeClass('active');
        var $loutitop=$('.diy-elevator').eq($(this).index()).offset().top;
        $('html,body').animate({
            scrollTop:$loutitop
        })
    });

    $('.last').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:0
        })
    });
})