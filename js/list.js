$(function () {
    console.log("___");
    let currentType = 0;
    new Promise(function (resolve, reject) {
        $.ajax({
            type: "get",
            url: "../server/getPageCount.php",
            dataType: "json",
            success: function (response) {
                console.log(response);
                let pageCount = response.data;
                for (let i = 0; i < pageCount; i++) {
                    let oPage = $(`<a href="javascript:;">${i+1}</a>`);
                    $("#page").append(oPage);
                }
                $("#page").children("a").first().addClass("active");
                resolve();
            }
        });
    }).then(function () {
        getDatWithPage(currentType, 0);
    })

    /* 002-当拿到数据后根据数据来渲染页面 */
    $("#page").on("click", "a", function (e) {
        e.preventDefault();
        $(this).addClass("active").siblings().removeClass("active");
        /* 先获取当前是第几页 */
        let index = $(this).index();
        // console.log(index);
        getDatWithPage(currentType, index);
    })

    let getDatWithPage = (type, page) => {
        $.ajax({
            type: "get",
            url: "../server/getProductData.php",
            data: `type=${type}&page=${page}`,
            dataType: "json",
            success: function (response) {
                let data = response.data;
                let html = data.map((ele) => {
                    return `
          <li class="item" id="${ele.id}">
              <div class="item-box">
              <a href="http://127.0.0.1/9jiji/9ji/html/list_etails.html"> 
              <img src=${ele.src}>
                  <div class="price">￥${ele.price}</div>
                  <div class="title">${ele.title}</div>
                  <div class="dis">${ele.dis}</div>
              </a>
              </div>
          </li>
          `
                }).join("");
                $(".box-list").html(html);
            },
            error: function () {
                console.log("++");
            }
        });
    }

    $(".typeBtn").click(function () {
        let index = $(this).index();
        currentType = index;
        getDatWithPage(currentType, 0);
        $("#page").children("a").first().addClass("active").siblings().removeClass("active");
    })
    $(".box-list").on("click","li",function(e){
        e.preventDefault();
        let id=$(this).attr("id");
        window.location.href="http://127.0.0.1/9jiji/9ji/html/list_etails.html?"+"id="+id;
    })
});