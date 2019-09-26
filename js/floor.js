$(function(){
    $.ajax({
        type: "get",  
        url: "../server/getdata.php", 
        data: "table=\"floor-title\"", 
        dataType: "json",
        success: function (response) {  
            let data=response.data;
            let html = data.map((ele,index)=>{
                return`<div id="go_floor${index+1}" class="diy-floor">
                <img src=${ele.src}>
                </div>`
            }).join("");
            $(".rq").html(html)
        },
        error: function (e) { 
            }
        },
    );
})

//楼层
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