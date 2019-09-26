window.onload = function () {
    v = [{
        "href": "https://www.9ji.com/product/78431.html",
        "src": "https://img2.ch999img.com/newstatic/1528/f583c3e4cee58d.jpg"
    }, {
        "href": "https://www.9ji.com/product/77946.html",
        "src": "https://img2.ch999img.com/newstatic/1529/f583b6eeb41700.jpg"
    }, {
        "href": "https://www.9ji.com/product/72772.html",
        "src": "https://img2.ch999img.com/newstatic/1525/ccb0343809e1fb.jpg"
    }, {
        "href": "https://www.9ji.com/product/75036.html",
        "src": "https://img2.ch999img.com/newstatic/1530/cc107d2281f08c.jpg"
    }, {
        "href": "https://www.9ji.com/product/71783.html",
        "src": "https://img2.ch999img.com/newstatic/1526/ccb054c7e70515.jpg"
    }, {
        "href": "https://www.9ji.com/product/77776.html",
        "src": "https://img2.ch999img.com/newstatic/1525/eac2fbe63a084a.jpg"
    }, {
        "href": "https://www.9ji.com/product/76630.html",
        "src": "https://img2.ch999img.com/newstatic/1528/e28cd77038e181.jpg"
    }, {
        "href": "https://www.9ji.com/product/77283.html",
        "src": "https://img2.ch999img.com/newstatic/1524/e28cedc7e2ac1f.jpg"
    }, {
        "href": "https://www.9ji.com/product/54242.html",
        "src": "https://img2.ch999img.com/newstatic/1528/83e7c94021c4a5.jpg"
    }, {
        "href": "https://www.9ji.com/product/77556.html",
        "src": "https://img2.ch999img.com/newstatic/1526/eebc499de6a54d.jpg"
    }, {
        "href": "https://www.9ji.com/product/77962.html",
        "src": "https://img2.ch999img.com/newstatic/1530/eebc70810bead2.jpg"
    }, {
        "href": "https://www.9ji.com/product/72719.html",
        "src": "https://img2.ch999img.com/newstatic/1525/bb0d3859849caa.jpg"
    }]
    let aDt = $(".nav-menu dt"),
        aDd = $(".nav-menu dd"),
        aDl = $(".nav-menu dl"),
        rightDiv = $(".right_box"),
        C = 0;
    for (let i = 0; i < aDt.length; i++) {
        let aDiv = document.createElement("div"),
            html = "";
        for (C = 1; C <= 2; C++) {
            if (i > 0) {
                html += `<a href=${v[i+C].href} 
                style="border-top:0px;">
                <img src=${v[i+C].src}
                width="200" height="230">
                </a>`
            } else {
                html = `<a href=${v[i].href} 
                style="border-top:0px;">
                <img src=${v[i].src} width="200" height="230"> 
                </a><a href=${v[i+1].href} style="border-top:0px;">
                <img src=${v[i+1].src} width="200" height="230"> 
                </a>`
            }
            aDiv.innerHTML = html;
            // console.log(rightDiv[i]);
            rightDiv[i].appendChild(aDiv)
        }
        // aDt[i].index = i;
        // aDt[i].onmouseenter = function () {
        //     for (let i = 0; i < aDt.length; i++) {
        //         aDt[i].classList.remove("cur");
        //         aDd[i].classList.remove("on");
        //     }
        //     aDt[this.index].classList.add("cur");
        //     aDd[this.index].classList.add("on");
        // }
        // aDt[i].onmouseleave = function () {
        //     for (let i = 0; i < aDt.length; i++) {
        //         aDt[i].classList.remove("cur");
        //         aDd[i].classList.remove("on");
        //     }
        // }
        aDt[i].index = i;
        
        aDl[i].addEventListener('mouseenter', function () {
            for (let i = 0; i < aDt.length; i++) {
                aDt[i].classList.remove("cur");
                aDd[i].style.cssText="display:none";
            }
            aDt[i].classList.add("cur");
            aDd[i].style.cssText="display:block";
        })
        aDl[i].addEventListener('mouseleave', function () {
            for (let i = 0; i < aDt.length; i++) {
                aDt[i].classList.remove("cur");
                aDd[i].style.cssText="display:none";
            }
        })
    }
    // 
}



//数据
// var oLPlist=document.getElementsByClassName("nav-menu-item");
// for(let i=0;i<oLPlist.length;i++){
// let p=oLPlist[i].children[1].children.length;
// for(let j=0;j<p;j++){
// console.log(oLPlist[i].children[1].children[j]);
// }
// }