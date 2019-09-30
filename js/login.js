$(function(){
    $(".login-button").click(function(e){
        e.preventDefault();
        $.ajax({
            type:"post",
            url:"../server/login.php",
            data:`username=${$("#username-ID").val()}&password=${$("#password-ID").val()}`,
            dataType:"json",
            success:function(response){
                if(response.status=="success"){
                    alert(response.data.msg)
                    let id = (response.userid)
                    window.location.href = "../html/index.html?"+"userid="+id;
                }else{
                    alert(response.data.msg)
                }
            }
        })
    })
})