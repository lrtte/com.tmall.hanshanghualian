//轮播图

$(function () {
    $('.nav').on('click', function () {
        console.log('11')
    })
    //点击title背景颜色变
    $('.title1').hover(function () {
        $(this).find('span').toggleClass('arrow')
        $(this).toggleClass('awm')
    })
    $('.title2').hover(function () {
        $(this).find('span').toggleClass('arrow')
        $(this).toggleClass('awm')
    })
    // $('.title3').hover(function(){
    //     $(this).find('span').toggleClass('arrow')
    //     $(this).toggleClass('awm')
    // })
    $('.title4').hover(function () {
        $(this).find('span').toggleClass('arrow')
        $(this).toggleClass('awm')
    })
    $('.title5').hover(function () {
        $(this).find('span').toggleClass('arrow')
        $(this).toggleClass('awm')
    })
    //----------------------------------------------------------------------------->
    setTimeout(function () {
        $('.bee').show()
        // alert('我喜欢你')
    }, 1000)
    //鼠标点击 关掉蜜蜂
    $('.bee #bee-hide').on('click', function () {
        $('.bee').slideUp();
        $('.bee-question').slideDown()
    })


    //---------------------------------------------------------------------------->
    // 轮播图
    //声明变量来计算点击次数
    let index = 0;
    //给arrow-left添加点击事件
    $('.arrow-right').on('click', function () {
        //点击一次  +1
        index++;
        //给轮播图做限定
        if (index > $('.carousel li').lenght - 1) {
            index = 0
        }
        // console.log('11')
        $('.carousel li').eq(index).fadeIn(500).siblings('li').fadeOut(500)
    })
    //点击做箭头 往右走一张
    $('.arrow-left').on('click', function () {
        index--;
        if (index < 0) {
            index = $('.carousel li').lenght - 1;
        }
        $('.carousel li').eq(index).fadeIn(500).siblings('li').fadeOut(500)
    })
    //自动走
    setInterval(function () {
        $('.arrow-right').click();
    }, 3000)
    //---------------------------------------------------->
    // 鼠标移入到title上面对应的盒子显示出来

    $('.title1').hover(function () {
        $('.show1').toggle()
    })
    $('.title2').hover(function () {
        $('.show2').toggle()
    })
    $('.title3').hover(function () {
        $('.show3').toggle()
    })
    $('.title4').hover(function () {
        $('.show4').toggle()
    })
    $('.title5').hover(function () {
        $('.show5').toggle()
    })
    //本地所有商品-------------------------------------->
    $('.all-shangpin').hover(function () {
        $('.local-all-shangpin').toggle()
    })
    $('#baby-list').hover(function () {
        $('.baby-list').toggle()

    })
    $('#new-series').hover(function () {
        $('.new-series').toggle()
    })
    $('#trimmings').hover(function () {
        $('.trimmings').toggle()
    })
    $('#acket').hover(function () {
        $('.acket').toggle()
    })
    $('#trousers').hover(function () {
        $('.trousers').toggle()
    })
    $('.all-list').hover(function () {
        $('.baby-list').toggle()
    })



    // $('.list-1').hover(function () {
    //     $('.baby-list').toggle()
    //     // $('.baby-list').css('zIndex','3')
    //     // $(this).css('zIndex','0')
    //     // $('.list-2').css('zIndex','1')
    // })
    // $('.list-2').hover(function () {
    //     $('.new-series').toggle()
    //     // $('.list-1').css('zIndex','1')
    //     // $(this).css('zIndex','2')
    // })
    // $('.list-3').hover(function () {
    //     $('.trimmings').toggle()
    // })
    // $('.list-4').hover(function () {
    //     $('.acket').toggle()
    // })
    // $('.list-5').hover(function () {
    //     $('.trousers').toggle()
    // })

    //-购物车--------------------------------------------------------------->
    // 功能1: 点击  点击弹出登录框按钮 弹出登录框
    $('#link').on('click', function () {
        $('#login').show();
        $('#bg').show();
    })
    // 功能2: 点击 关闭按钮  关闭登录框
    $('#closeBtn').on('click', function () {
        $('#login').hide();
        $('#bg').hide();
    })
    // 返回顶部------------------------------------------------------->
     //功能1
     $(document).scroll(function(){
         if($(document).scrollTop()>=1168){
            $('#come-back').show();
         }else{
            $('#come-back').hide();
         }
     })
     $('#come-back').click(function(){
        $(document).scrollTop(0)
     })

    // 登录框tab栏------------------------------------------->
       // 1.给li添加点击事件
       
       $('.tab_list>ul>li').click(function () {
        // 1.1 让所有的item隐藏
        // $('.item').eq(index).show();
        $('.item').hide();
        $(this).addClass('current').siblings('li').removeClass('current')
        // $(this).addClass('active').siblings('li').removeClass('active');
        // 1.2 让点击的这个li的索引对应的那个item显示
        let index = $(this).index();
        // console.log(index);
        $('.item').eq(index).show();
      })
      $('.login-tab-ewm>a').click(function(){
        $('.login-tab-Tv').show();
        $('.login-tab').hide()

       })
       $('.tv>a').click(function(){
           $('.login-tab-Tv').hide();
           $('.login-tab').show()
       })
      
})



