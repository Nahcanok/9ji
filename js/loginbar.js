$(".top-user").hover(function(){
    $(".top-user").addClass("cur");
    $(".top-user-show").css({display:"block",left:"466px"});
},function(){
    $(".top-user-show").css("display","none");
    $(".top-user").removeClass("cur");
});
/*****************/
$(".top-app").hover(function(){
    $(".top-app").addClass("cur");
    $(".top-app-show").css({display:"block",left:"562px"});
},function(){
    $(".top-app-show").css("display","none");
    $(".top-app").removeClass("cur");
})
/*****************/
$(".top-sitemap").hover(function(){
    $(".top-sitemap").addClass("cur");
    $(".top-sitemap-show").css({display:"block"});
},function(){
    $(".top-sitemap-show").css("display","none");
    $(".top-sitemap").removeClass("cur");
})
/****************/
$(".top-telephone").hover(function(){
    $(".top-telephone").addClass("cur");
    $(".top-free-phone").css({display:"block",left:"1053px"});
},function(){
    $(".top-free-phone").css("display","none");
    $(".top-telephone").removeClass("cur");
})
$(function(){
    var queryString = decodeURI(window.location.search.slice(8));
    console.log(queryString);
$.ajax({
    type: "post",
    url: "../server/loginbar.php",
    data: `userid=${queryString*1}`,
    dataType: "json",
    success: function (response) {
        data = response.data[0];
        username = data.username;
        $(".top-login a").eq(0).text(username);
        $(".top-login a").eq(0).after('<a href="../html/index.html">注销</a>')
    }, 
});
})