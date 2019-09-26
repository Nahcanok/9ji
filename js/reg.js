$(function(){
    let userID = $("#userUID");
    let userWord = $("#userpwd3");
    let userWordB = $("#userpwd4");
    let phoneNum = $("#usermobile2");
    let phoneCode = $("#phonecode2");
    let phoneBtn = $("#getCode2");
    
    let userIDReg = /^[\u4E00-\u9FA5|a-z|A-Z|0-9]{4,16}$/;
    let userWordReg =/^[a-zA-Z\d]{6,}$/;
    let phoneNumReg = /^[1][3-9]\d{9}$/;
    
    $(".zhuce-tab ul li").click(function(){
        $(this).addClass("xz").siblings().removeClass("xz");
        let index = $(this).index();
        $(".reg").eq(index).css("display","block").siblings().css("display","none")
    });
//用户名
    userID.blur(function(){
        var val = $(this).val().trim();
        if(val.length == 0){
            $(this).next().text("用户名不能为空");
        }else{
            if(!userIDReg.test(val)){
                $(this).next().text("用户名不合规范！");
            }else{
                $(this).next().text("✔");
            }
        }
    })
//密码
    userWord.blur(function(){
        var val = $(this).val().trim();
        if(val.length == 0){
            $(this).next().text("密码不能为空");
        }else{
            if(!userWordReg.test(val)){
                $(this).next().text("密码不合规范！")
            }else{
                $(this).next().text("✔")
            }
        }
    })
//重复密码
    userWordB.blur(function(){
        var val = $(this).val().trim();
        if(val.length == 0){
            $(this).next().text("确认密码不能为空！");
        }else{
            if(userWordB.val()!= val){
                $(this).next().text("两次输入的密码不一致！")
            }else{
                $(this).next().text("✔")
            }
        }
    })
//手机
    phoneNum.blur(function(){
        var val =$(this).val().trim();
        if(val.length == 0){
            $(this).next().text("手机号码不能为空！");
        }else{
            if(!phoneNumReg.test(val)){
                $(this).next().text("手机号码不符合规范！");
            }else{
                $(this).next().text("✔");
            }
        }
    }) 
//短信验证码
    phoneBtn.click(function(){
        phoneNum.trigger("blur");
        let flag = phoneNum.next().text();
        console.log(flag);
        if(flag=="手机号码不符合规范！"){
            alert("手机号码不正确！请检查");
            return;
        }else{
                /* 开启倒计时 */
                let timeCount = 60;
                let timer = setInterval(function() {
                    timeCount--;
                    phoneBtn.text(`${timeCount} 秒`);
                    if (timeCount == 0) {
                        clearInterval(timer);
                        phoneBtn.text(`发送短信验证码`);
                    }
                }, 1000);
                function formatterDateTime() {
                    var date = new Date()
                    var month = date.getMonth() + 1
                    var datetime = date.getFullYear() +
                        "" // "年"
                        +
                        (month >= 10 ? month : "0" + month) +
                        "" // "月"
                        +
                        (date.getDate() < 10 ? "0" + date.getDate() : date
                            .getDate()) +
                        "" +
                        (date.getHours() < 10 ? "0" + date.getHours() : date
                            .getHours()) +
                        "" +
                        (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
                            .getMinutes()) +
                        "" +
                        (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
                            .getSeconds());
                    return datetime;
                }
    
                num = (~~(Math.random()*10000));
                console.log(num);
                
                $.ajax({
                    type: 'post',
                    url: 'http://route.showapi.com/28-1',
                    dataType: 'json',
                    data: {
                        "showapi_timestamp": formatterDateTime(),
                        "showapi_appid": '105009', //这里需要改成自己的appid
                        "showapi_sign": '51084e3ee1f34d5c86af6e0e3506a8fa', //这里需要改成自己的应用的密钥secret
                        "mobile": phoneNum.val().trim(),
                        "content": `{\"code\":\"${num}\",\"minute\":\"3\",\"comName\":\"千锋教育\"}`,
                        "tNum": "T150606060601",
                        "big_msg": ""
                    },
                    error: function(XmlHttpRequest, textStatus, errorThrown) {
                        alert("操作失败!");
                    },
                    success: function(result) {
                        console.log(result) //console变量在ie低版本下不能用
                        alert(result.showapi_res_code)
                    }
                });

               
        }
        
    })
//短信验证码校对
    phoneCode.blur(function(){
        var val =$(this).val().trim();
        if(val.length == 0){
            $(this).next().text("短信验证码不能为空！");
        }else{
            if(num!=val){
                $(this).next().text("短信验证码不正确！");
            }else{
                $(this).next().text("✔");
            }
        }
    })
    //注册
    let btn = $("#regbut2");
    btn.click(function(){
        let isChecked = $("#mmprovision2").is(":checked");
        let userText = userID.val();
        let phoneText = phoneNum.val();
        let phoneCodeText = phoneCode.val();
        let userWordTextA = userWord.val();
        let userWordTextB = userWordB.val();
        let isSuccess = 
        ($("em").text().split("✔").length-1)==5&&userText&&phoneText&&phoneCodeText&&userWordTextA&&userWordTextB;
        console.log(isChecked,isSuccess);
        if(!isChecked){
            alert("请阅读并同意用户协议");
            return;
        }else{
            if(!isSuccess){
                alert("请完善信息");
                return;
            }else{
                $.ajax({
                    type: "post",
                    url: "../server/reg.php",
                    data: `username=${userText}&phone=${phoneText}&password=${userWordTextA}`,
                    dataType: "json",
                    success: function(response) {
                        // console.log(response);
                        if (response.status == "success") {
                            alert(response.data.msg);
                            window.location.href = "/9jiji/9ji/html/login.html";
                        } else {
                            alert(response.data.msg);
                        }
                    }
                });
            }
        }
    })

})

