

    /* 首頁 */
    const content2 = document.querySelector('.content2 article')
    const content3 = document.querySelector('.content3 article')
    const content4 = document.querySelector('.content4 article')
    const content4_h1 = document.querySelector('.content4 h1')
    const content5 = document.querySelector('.content5 article')
    const content6 = document.querySelector('.content6 article')
    const content7 = document.querySelector('.content7 article')
    const mob_menu_div = document.getElementById('mob_menu_div')
    const mob_top = document.getElementById('mob_top')




    $('.go_top img,#mob_top').on("click",function(){
        $('html').animate({scrollTop: 0,},1000);
    })


    //查看當前狀態
    window.addEventListener('scroll',function(){
        const body_height = document.body.scrollHeight;
        mob_menu_div.style.height = `${body_height}px`;
        const content2_top = document.querySelector('.content2 article').offsetTop;
        const content3_top = document.querySelector('.content3 article').offsetTop;
        const content4_top = document.querySelector('.content4 article').offsetTop;
        const content5_top = document.querySelector('.content5 article').offsetTop;
        const content6_top = document.querySelector('.content6 article').offsetTop;
        const content7_top = document.querySelector('.content7 article').offsetTop;
        // console.log('top2',content2_top)
        // console.log('top3',content3_top)
        const now_height = document.documentElement.scrollTop;
        console.log('目前網頁高度',now_height)
        const now_width = document.documentElement.scrollWidth;
        console.log('目前網頁寬度',now_width)
        const height = document.documentElement.clientHeight;
        console.log('目前網頁可視高度',height)
        
        if(now_width >= 1024){
            mob_top.style.display = 'none';
        }else{
            mob_top.style.display = 'block';
        }
        if(height <= now_height){
            mob_top.style.transform = `translateX(0%)`
        }else{
            mob_top.style.transform = `translateX(1000%)`
        }

        const control2 = content2_top - height <= now_height;
        const control3 = content3_top - height <= now_height;
        const control4 = content4_top - height <= now_height;
        const control5 = content5_top - height <= now_height;
        const control6 = content6_top - height <= now_height;
        const control7 = content7_top - height <= now_height;
        // console.log('2',control2)
        // console.log('3',control3)

        if(control2 === true){
            content2.classList.add('content_ani')
        }
        if(control3 === true){
            content3.classList.add('content_ani')
        }
        if(control4 === true){
            content4_h1.classList.add('content_ani_h1')
            function c4(){
                content4.classList.add('content_ani')
            }
            setTimeout(() => {
                c4()
            }, 700);
        }
        if(control5 === true){
            content5.classList.add('content_ani')
        }
        if(control6 === true){
            content6.classList.add('content_ani')
        }
        if(control7 === true){
            content7.classList.add('content_ani')
        }

    })

    //取得元素

    //取得元素離頂部位置

    // console.log('1',content1_top)
    // console.log('2',content2_top)
    // console.log('3',content3_top)
    const svg1 = document.getElementById('svg1')
    const svg2 = document.getElementById('svg2')
    const mob_menu_control = document.querySelector('.mob_menu_control')
    mob_menu_control.addEventListener('click',function(){
        const svg1_view = window.getComputedStyle(svg1,null).opacity
        const svg2_view = window.getComputedStyle(svg2,null).opacity
        console.log('svg1',svg1_view)
        console.log('svg2',svg2_view)
        if(svg1_view === '1'){
            svg1.style.opacity = '0';
            svg2.style.opacity = '1';
        }else if(svg2_view === '1'){
            svg1.style.opacity = '1';
            svg2.style.opacity = '0';
        }
    })

