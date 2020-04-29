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
        if (index > $('.carousel li').length - 1) {
            index = 0
        }
        // console.log('11')
        $('.carousel li').eq(index).fadeIn(500).siblings('li').fadeOut(500)
        // console.log( $('.carousel li').length)
    })
    //点击做箭头 往右走一张
    $('.arrow-left').on('click', function () {
        index--;
        if (index < 0) {
            index = $('.carousel li').length - 1;
        }
        $('.carousel li').eq(index).fadeIn(500).siblings('li').fadeOut(500)
    })
    //自动走
    setInterval(function () {
        $('.arrow-right').click();
    }, 5000)
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
    // $('.all-shangpin').hover(function () {
    //     $('.local-all-shangpin').toggle()
    // })
    // $('#baby-list').hover(function () {
    //     $('.baby-list').toggle()

    // })
    // $('#new-series').hover(function () {
    //     $('.new-series').toggle()
    // })
    // $('#trimmings').hover(function () {
    //     $('.trimmings').toggle()
    // })
    // $('#acket').hover(function () {
    //     $('.acket').toggle()
    // })
    // $('#trousers').hover(function () {
    //     $('.trousers').toggle()
    // })
    // $('.all-list').hover(function () {
    //     $('.baby-list').toggle()
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
       $('#yes').click(function(){
           $('.classify').hide()
           $('.classify-small').show()
       })
       $('#no').click(function(){
        $('.classify-small').hide()
        $('.classify').show()
    })
    //折叠面板
    $('.all-things .header').on('click',function(){
        $(this).next().stop().toggle()
        $(this).find('img').toggleClass('arrow')
    })
    // 点击+号显示  点击-号隐藏  
   $('#no').on('click',function(){
       $('.all-things').show()
   })
   $('#yes').on('click',function(){
    $('.all-things').hide()
    })
    // 换肤------------------------------------------->
    $('#han_chinese_clothing-list>li').click(function(){
        //获取到每个li的src
        // $(this).addClass('shoot-border')
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list2>li').click(function(){
        //获取到每个li的src
        // $(this).addClass('shoot-border')
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list2').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list3>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list3').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list4>li').click(function(){
          let imgSrc=$(this).find('img').attr('src');
          $('.han_chinese_clothing-list4').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list5>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list5').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list6>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list6').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list7>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list7').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list8>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list8').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list10>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list10').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list11>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list11').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list12>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list12').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list13>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list13').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list14>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list14').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list15>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list15').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list16>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list16').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list17>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list17').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list18>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list18').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list19>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list19').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list20>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list20').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list21>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list21').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list22>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list22').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list23>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list23').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list24>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list24').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list25>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list25').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list26>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list26').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list27>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list27').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list28>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list28').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list29>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list29').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list30>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list30').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list31>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list31').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list32>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list32').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list33>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list33').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list34>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list34').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list35>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list35').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list36>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list36').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list37>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list37').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list38>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list38').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list39>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list39').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list40>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list40').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list41>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list41').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list42>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list42').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list43>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list43').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list44>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list44').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list45>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list45').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list46>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list46').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list47>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list47').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list48>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list48').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list49>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list49').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list50>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list50').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list51>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list51').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list52>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list52').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list53>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list53').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list54>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list54').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list55>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list55').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list56>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list56').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list57>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list57').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list58>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list58').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list59>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list59').css('backgroundImage',`url(${imgSrc})`)
      })
      $('#han_chinese_clothing-list60>li').click(function(){
        let imgSrc=$(this).find('img').attr('src');
        $('.han_chinese_clothing-list60').css('backgroundImage',`url(${imgSrc})`)
      })

      // 放大镜------------------------------>
      $("#exzoom").exzoom();
})



