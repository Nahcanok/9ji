$(function(){
    console.log($(".zhuce-tab ul li"));
    
    $(".zhuce-tab ul li").click(function(){
        $(this).addClass("xz").siblings().removeClass("xz");
        let index = $(this).index();
        $(".reg").eq(index).css("display","block").siblings().css("display","none")
    })
})