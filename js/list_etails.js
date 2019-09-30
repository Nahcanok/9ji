new Promise(
    function(resolve){
        var queryString = decodeURI(window.location.search.slice(4));
        console.log(queryString);
    $.ajax({
        type: "post",
        url: "../server/list_etails.php",
        data: `id=${queryString}`,
        dataType: "json",
        success: function (response) {
            data = response.data[0];
            maxsrc = data.src;
            minsrc = maxsrc;
            price = data.price;
            maxsrc = minsrc;
            $(".preview-image").attr("src", minsrc)
            $(".pane-container").append(`<img src="${maxsrc}">`)
            $(".pointer b").text(price);
            resolve();
        }, 
    });
    }
).then(function(){
    return new Promise((resolve) => {
        var imgBox = $('.imgbox');
    var minBox = $('.minImg');
    var minImg = $('.minImg img');
    var mask = $('.img-mask');
    var maxBox = $('.maxImg');
    var maxImg = $('.maxImg img');
    minBox.mouseenter(function(){
        mask.css("display","block");
        maxBox.css("display","block");
    })
    minBox.mousemove(function(e){
        var moveX = e.pageX - imgBox.offset().left - mask.width()/2;
        var moveY = e.pageY - imgBox.offset().top - mask.height()/2;
        var maxX = minBox.width() - mask.width(); 
        var maxY = minBox.height() - mask.height(); 
        if(moveX>= maxX) {
            moveX = maxX;
        }
        if(moveY>= maxY) {
            moveY = maxY;
        }
        if(moveX <=0){
            moveX = 0;
        }
        if(moveY<=0){
            moveY = 0;
        }
        var biliX = (maxImg.width() - maxBox.width())/maxX;
        var biliY = ((maxImg.height() - maxBox.height())/maxY);
        //小黑
        mask.css("top",`${moveY}px`);
        mask.css("left",`${moveX}px`);
        //放大图
        maxImg.css("top",`-${moveY*biliY}px`);
        maxImg.css("left",`-${moveX*biliX}px`);
    })
     minBox.mouseleave(function(){
        mask.css("display","none");
        maxBox.css("display","none");
    })
    });
});

$(function(){
    $(".cart-btn").click(function(){
        console.log("11111");
        let goodsid=decodeURI(window.location.search.slice(4))*1;
        let price=$(".pointer b").text()*1;
        $.ajax({
            type: "GET",  
            url: "../server/ADDcart.php",  
            data: `goodsid=${goodsid}&price=${price}`,  
            dataType: "json",
            success: function (response) {     
            }
        });
    })
})


    