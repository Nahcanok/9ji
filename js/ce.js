$('.tool-top').on('click',function(e){
    e.preventDefault();
    $('html,body').animate({
        scrollTop:0
    })
})