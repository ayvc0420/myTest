    /* vt */
    const vt_content1 = document.querySelector('.vt_content1 article')
    const vt_content2 = document.querySelector('.vt_content2 article')
    const vt_content2_h1 = document.querySelector('.vt_content2 h1')
    const vt_content3_c1 = document.querySelector('.c1')
    const vt_content3_c2 = document.querySelector('.c2')
    const vt_content3_c3 = document.querySelector('.c3')
    const vt_content3_h1 = document.querySelector('.vt_content3 h1')

    const mob_menu_div = document.getElementById('mob_menu_div')
    const mob_top = document.getElementById('mob_top')

    $('.go_top img,#mob_top').on("click",function(){
        $('html').animate({scrollTop: 0,},1000);
    })

    const control_header_img1 = document.getElementById('control_header_img1')
    const control_header_img2 = document.getElementById('control_header_img2')
    const control_header_img3 = document.getElementById('control_header_img3')
    // header_label
    function header1(){
        control_header_img1.checked = true

    }
    function header2(){
        control_header_img2.checked = true
    }
    function header3(){
        control_header_img3.checked = true
    }
    setInterval(() => {
        setTimeout(() => {
            header1()
        }, 0);
        setTimeout(() => {
            header2()
        }, 3000);
        setTimeout(() => {
            header3()
        }, 6000);
    }, 9000);


    const svg1 = document.getElementById('svg1')
    const svg2 = document.getElementById('svg2')
    const mob_menu_control = document.querySelector('.mob_menu_control')
    mob_menu_control.addEventListener('click',function(){
        const svg1_view = window.getComputedStyle(svg1,null).opacity
        const svg2_view = window.getComputedStyle(svg2,null).opacity
        if(svg1_view === '1'){
            svg1.style.opacity = '0';
            svg2.style.opacity = '1';
        }else if(svg2_view === '1'){
            svg1.style.opacity = '1';
            svg2.style.opacity = '0';
        }
    })



    window.addEventListener('scroll',function(){

        const body_height = document.body.scrollHeight;
        mob_menu_div.style.height = `${body_height}px`;

        const vt_content1_top = document.querySelector('.vt_content1 article').offsetTop;
        const vt_content2_top = document.querySelector('.vt_content2 article').offsetTop;
        
        const vt_content3_c1_top = document.querySelector('.c1').offsetTop;
        const vt_content3_c2_top = document.querySelector('.c2').offsetTop;
        const vt_content3_c3_top = document.querySelector('.c3').offsetTop;
        // console.log('top2',content2_top)
        // console.log('top3',content3_top)
        const now_height = document.documentElement.scrollTop;
        // console.log('目前網頁高度',now_height)
        const now_width = document.documentElement.scrollWidth;
        // console.log('目前網頁寬度',now_width)
        const height = document.documentElement.clientHeight;
        // console.log('目前網頁可視高度',height)

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


        const vt_control1 = vt_content1_top - height <= now_height;
        const vt_control2 = vt_content2_top - height <= now_height;
        const vt_control3_c1 = vt_content3_c1_top - height <= now_height;
        const vt_control3_c2 = vt_content3_c2_top - height <= now_height;
        const vt_control3_c3 = vt_content3_c3_top - height <= now_height;
        if(vt_control1 === true){
            vt_content1.classList.add('vt_content_ani')
        }
        if(vt_control2 === true){
            vt_content2_h1.classList.add('vt_content_ani')
            function c2(){
                vt_content2.classList.add('vt_content_ani')
            }
            setTimeout(() => {
                c2()
            }, 300);
        }
        if(vt_control3_c1 === true){
            vt_content3_h1.classList.add('vt_content_ani_h1')
            function c3(){
                vt_content3_c1.classList.add('vt_content_ani')
            }
            setTimeout(() => {
                c3()
            }, 400);
        }
        if(vt_control3_c2 === true){
            setTimeout(() => {
                vt_content3_c2.classList.add('vt_content_ani')
            }, 550);
        }
        if(vt_control3_c3 === true){
            setTimeout(() => {
                vt_content3_c3.classList.add('vt_content_ani')
            }, 700);
        }


    })