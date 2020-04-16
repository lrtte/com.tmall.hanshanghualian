//轮播图

    $(function(){
        $('.nav').on('click',function(){
            console.log('11')
        })
        $('.title').hover(function(){
            $(this).find('span').toggleClass('arrow')
            $(this).toggleClass('awm')
        })
    })
  
  // 点击文字和小箭头的空白区域
        // 1. 给title区域添加点击事件
        // $('.title').on('click',function(){
        //     // 1.1下的面板进行折叠和展开的切换
        //     $(this).next().stop().slideToggle()
        //     // 1.2箭头的方向的切换
        //     $(this).find('span').toggleClass('arrow')
        // })
        // $('.title').hover(function(){
        //     $(this).css('backgroundColor','white')
        //     $(this).find('span').toggleClass('arrow')
        //     // console.log(11)
        // })

        // $('#title').on('mouseenter',function(){
        //     console.log(11)
        // })
    //   $('.nav ol>.title').on('mouseenter',function(){
    //       console.log('11')
    //   })

    //   $('.title').on('mouseenter',function(){
    //       console.log('11')
    //   })