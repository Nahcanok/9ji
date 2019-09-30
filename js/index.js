$(function(){
    var url = window.location.search.length;
console.log(url);
if (url > 0) {
    let url1 = window.location.href;
    console.log($(".nav-menu-item p a"));
    $(".nav-menu-item p a").eq(0).attr("href", url1);
}
})