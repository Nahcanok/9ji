var targetData;
/* 获取数据库中所有购物车相关的信息 */
getCatInfo();

function getCatInfo() {
    $.ajax({
        type: "get",
        url: "../server/getcar.php",
        dataType: "json",
        success: function (data) {
            console.log(data);

            targetData = data;
            /* 根据数据来渲染页面 */
            var res = data.map(function (ele) {
                console.log(ele);
                
                var html = `
                    <ul class="cart-list" id=${ele.goodsid}>
                        <li><input class="checkbox-class" type="checkbox" ${ele.isActive==1 ? "checked" : "" }></li>
                        <li><img src=${ele.src}></li>
                        <li><span>${ele.title}</span></li>
                        <li><span>￥${ele.price}</span></li>
                        <li><button class="car-">-</button><input type="text" value=${ele.num}><button class="car+">+</button></li>
                        <li><span>￥${ele.price}</span></li>
                        <li><a class="del" href="">删除</a></li>
                    </ul>
                    `;
                return html;
            }).join("");

            $(".cart-main").html(res);

            // console.log(targetData);
            computedTotalPrice();
        }
    });
}

function computedTotalPrice() {
    var res = 0;
    targetData.forEach(element => {
        if (element.isActive == 1) {
            res += element.total * 1;
            $(".carright").html("总计：" + res);
        }else{
            $(".carright").html("总计：" + 0);
        }
    });
    
}

$("#allSelector").click(function () {
    $(".checkbox-class").prop("checked", $(this).is(":checked"))
})

$(".cart-main").on("click",".car-",function(){
    alert("该商品限制一人一件");
})

$(".cart-main").on("click",".car+",function(){
    alert("该商品限制一人一件");
})

$(".cart-main").on("click", ".del", function (e) {
    e.preventDefault();
    let goodsid=$(".cart-list").attr("id")*1;
    $.ajax({
        type: "get",
        url: "../server/removecar.php",
        data: "goodsid="+goodsid,
        success: function (response) {}
    });
})