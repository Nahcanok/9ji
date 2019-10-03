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
                <div class="floor-title"><img src=${ele.src}></div>
                <div class="floor-main">
                <div class="leftAD">
                <img src=${ele.src1}></div>
                <div class="shop-list">
                <ul class="overflow-hide">
                <li>
                <a class="anim-left">
                <img src=${ele.src2} width="120" height="120">
                <div class="diy-tip">
                <h3>${ele.title}</h3>
                <p style="color:#555">${ele.title2}</p>
                <div class="get-price">￥${ele.price}</div>
                </div>
                </a>
                </li>
                <li>
                <a class="anim-left">
                <img src=${ele.src2} width="120" height="120">
                <div class="diy-tip">
                <h3>${ele.title}</h3>
                <p style="color:#555">${ele.title2}</p>
                <div class="get-price">￥${ele.price}</div>
                </div>
                </a>
                </li>
                <li>
                <a class="anim-left">
                <img src=${ele.src2} width="120" height="120">
                <div class="diy-tip">
                <h3>${ele.title}</h3>
                <p style="color:#555">${ele.title2}</p>
                <div class="get-price">￥${ele.price}</div>
                </div>
                </a>
                </li>
                <li>
                <a class="anim-left">
                <img src=${ele.src2} width="120" height="120">
                <div class="diy-tip">
                <h3>${ele.title}</h3>
                <p style="color:#555">${ele.title2}</p>
                <div class="get-price">￥${ele.price}</div>
                </div>
                </a>
                </li>
                <li>
                <a class="anim-left">
                <img src=${ele.src2} width="120" height="120">
                <div class="diy-tip">
                <h3>${ele.title}</h3>
                <p style="color:#555">${ele.title2}</p>
                <div class="get-price">￥${ele.price}</div>
                </div>
                </a>
                </li>
                <li>
                <a class="anim-left">
                <img src=${ele.src2} width="120" height="120">
                <div class="diy-tip">
                <h3>${ele.title}</h3>
                <p style="color:#555">${ele.title2}</p>
                <div class="get-price">￥${ele.price}</div>
                </div>
                </a>
                </li>
                <li>
                <a class="anim-left">
                <img src=${ele.src2} width="120" height="120">
                <div class="diy-tip">
                <h3>${ele.title}</h3>
                <p style="color:#555">${ele.title2}</p>
                <div class="get-price">￥${ele.price}</div>
                </div>
                </a>
                </li>
                <li>
                <a class="anim-left">
                <img src=${ele.src2} width="120" height="120">
                <div class="diy-tip">
                <h3>${ele.title}</h3>
                <p style="color:#555">${ele.title2}</p>
                <div class="get-price">￥${ele.price}</div>
                </div>
                </a>
                </li>
                </ul>
                </div>
                <div class="rightAD">
                <a href="" class="anim-left">
                <img src=${ele.src2} width="80" height="80">
                <div class="diy-tip">
                <h3>${ele.title}</h3>
                <p style="color:#555">${ele.title2}</p>
                </div>
                </a>
                <a href="" class="anim-left">
                <img src=${ele.src2} width="80" height="80">
                <div class="diy-tip">
                <h3>${ele.title}</h3>
                <p style="color:#555">${ele.title2}</p>
                </div>
                </a>
                <a href="" class="anim-left">
                <img src=${ele.src2} width="80" height="80">
                <div class="diy-tip">
                <h3>${ele.title}</h3>
                <p style="color:#555">${ele.title2}</p>
                </div>
                </a>
                <a href="" class="anim-left">
                <img src=${ele.src2} width="80" height="80">
                <div class="diy-tip">
                <h3>${ele.title}</h3>
                <p style="color:#555">${ele.title2}</p>
                </div>
                </a>
                </div>
                </div>
                <div class="brand-link">
                <div class="link-list">
                <span class="left">品质推荐</span>
                </div>
                <div class="link-bg" style="background:#734e8b"></div>
                </div>
                </div>`
            }).join("");
            $(".rq").html(html)
        },
        error: function (e) { 
            }
        },
    );
    })
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