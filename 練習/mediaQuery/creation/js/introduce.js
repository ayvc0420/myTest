


    const mob_menu_div = document.getElementById('mob_menu_div')
    const mob_top = document.getElementById('mob_top')

    const control_header_img1 = document.getElementById('control_header_img1')
    const control_header_img2 = document.getElementById('control_header_img2')
    const control_header_img3 = document.getElementById('control_header_img3')
    const control_header_img4 = document.getElementById('control_header_img4')
    const header_div1 = document.querySelector('.img1')
    const header_div2 = document.querySelector('.img2')
    const header_div3 = document.querySelector('.img3')
    const header_div4 = document.querySelector('.img4')

    //以下動畫不可用迴圈 消耗效能過大
    // const vt_player_all = Array.from(document.querySelectorAll('.vt_player'))
    // const vt_player_top = vt_player_all.map(item => item.offsetTop)
    
    const vt_player1 = document.querySelector('.vt_player1')
    const vt_player2 = document.querySelector('.vt_player2')
    const vt_player3 = document.querySelector('.vt_player3')
    const vt_player4 = document.querySelector('.vt_player4')
    const vt_player5 = document.querySelector('.vt_player5')
    const vt_player6 = document.querySelector('.vt_player6')
    const vt_player7 = document.querySelector('.vt_player7')
    const vt_player8 = document.querySelector('.vt_player8')
    const vt_player9 = document.querySelector('.vt_player9')
    const vt_player10 = document.querySelector('.vt_player10')
    const vt_player11 = document.querySelector('.vt_player11')
    const vt_player12 = document.querySelector('.vt_player12')
    const vt_player13 = document.querySelector('.vt_player13')
    const vt_player14 = document.querySelector('.vt_player14')
    const vt_player15 = document.querySelector('.vt_player15')
    const vt_player16 = document.querySelector('.vt_player16')
    const vt_player17 = document.querySelector('.vt_player17')
    const vt_player18 = document.querySelector('.vt_player18')
    const vt_player19 = document.querySelector('.vt_player19')
    const vt_player20 = document.querySelector('.vt_player20')
    const vt_player21 = document.querySelector('.vt_player21')
    const vt_player22 = document.querySelector('.vt_player22')
    const vt_player23 = document.querySelector('.vt_player23')
    const vt_player24 = document.querySelector('.vt_player24')
    const vt_player25 = document.querySelector('.vt_player25')
    const vt_player26 = document.querySelector('.vt_player26')
    const vt_player27 = document.querySelector('.vt_player27')
    const vt_player28 = document.querySelector('.vt_player28')
    const vt_player29 = document.querySelector('.vt_player29')
    const vt_player30 = document.querySelector('.vt_player30')
    const vt_player31 = document.querySelector('.vt_player31')
    const vt_player32 = document.querySelector('.vt_player32')
    const vt_player33 = document.querySelector('.vt_player33')
    const vt_player34 = document.querySelector('.vt_player34')
    const vt_player35 = document.querySelector('.vt_player35')
    const vt_player36 = document.querySelector('.vt_player36')
    const vt_player37 = document.querySelector('.vt_player37')
    const vt_player38 = document.querySelector('.vt_player38')
    const vt_player39 = document.querySelector('.vt_player39')
    const vt_player40 = document.querySelector('.vt_player40')


    const vt_player_1_top = vt_player1.offsetTop
    const vt_player2_top = vt_player2.offsetTop
    const vt_player3_top = vt_player3.offsetTop
    const vt_player4_top = vt_player4.offsetTop
    const vt_player5_top = vt_player5.offsetTop
    const vt_player6_top = vt_player6.offsetTop
    const vt_player7_top = vt_player7.offsetTop
    const vt_player8_top = vt_player8.offsetTop
    const vt_player9_top = vt_player9.offsetTop
    const vt_player10_top = vt_player10.offsetTop
    const vt_player11_top = vt_player11.offsetTop
    const vt_player12_top = vt_player12.offsetTop
    const vt_player13_top = vt_player13.offsetTop
    const vt_player14_top = vt_player14.offsetTop
    const vt_player15_top = vt_player15.offsetTop
    const vt_player16_top = vt_player16.offsetTop
    const vt_player17_top = vt_player17.offsetTop
    const vt_player18_top = vt_player18.offsetTop
    const vt_player19_top = vt_player19.offsetTop
    const vt_player20_top = vt_player20.offsetTop
    const vt_player21_top = vt_player21.offsetTop
    const vt_player22_top = vt_player22.offsetTop
    const vt_player23_top = vt_player23.offsetTop
    const vt_player24_top = vt_player24.offsetTop
    const vt_player25_top = vt_player25.offsetTop
    const vt_player26_top = vt_player26.offsetTop
    const vt_player27_top = vt_player27.offsetTop
    const vt_player28_top = vt_player28.offsetTop
    const vt_player29_top = vt_player29.offsetTop
    const vt_player30_top = vt_player30.offsetTop
    const vt_player31_top = vt_player31.offsetTop
    const vt_player32_top = vt_player32.offsetTop
    const vt_player33_top = vt_player33.offsetTop
    const vt_player34_top = vt_player34.offsetTop
    const vt_player35_top = vt_player35.offsetTop
    const vt_player36_top = vt_player36.offsetTop
    const vt_player37_top = vt_player37.offsetTop
    const vt_player38_top = vt_player38.offsetTop
    const vt_player39_top = vt_player39.offsetTop
    const vt_player40_top = vt_player40.offsetTop


    //svg切換
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

    //輪播圖切換固定順序圖片
    function header1(){
        control_header_img1.checked = true
    }
    function header2(){
        control_header_img2.checked = true
    }
    function header3(){
        control_header_img3.checked = true
    }
    function header4(){
        control_header_img4.checked = true
    }
    
    setTimeout(() => {
        header2()
    }, 5000);
    setTimeout(() => {
        header3()
    }, 10000);
    setTimeout(() => {
        header4()
    }, 15000);
    setInterval(() => {
        setTimeout(() => {
            header1()
        }, 0);
        setTimeout(() => {
            header2()
        }, 5000);
        setTimeout(() => {
            header3()
        }, 10000);
        setTimeout(() => {
            header4()
        }, 15000);
    }, 20000);


    //top_btn按鈕效果
    $('.go_top img,#mob_top').on("click",function(){
        $('html').animate({scrollTop: 0,},1000);
    })

    //mob的menu3開關
    document.querySelector('.menu3_control').addEventListener('click',function(){
        const menu3 = document.querySelector('.menu3');
        const menu3_display = window.getComputedStyle(menu3,null).display;
        if(menu3_display === 'none'){
            menu3.style.display = 'block';
        }else{
            menu3.style.display = 'none';
        }
    })


    // 以下建構子函式效能比原來消耗更大
    // class Player_ani{
    //     add_ani(event){
    //         event.classList.add('vt_player_ani')
    //     }
    //     remove_ani(event){
    //         event.classList.remove('vt_player_ani')
    //     }
    // }


    window.addEventListener('scroll',function(){

        const body_height = document.body.scrollHeight;
        mob_menu_div.style.height = `${body_height}px`;
        
        const now_height = document.documentElement.scrollTop;
        const now_width = document.documentElement.scrollWidth;
        const height = document.documentElement.clientHeight;

        const vt_control1 = vt_player_1_top - height <= now_height-100;
        const vt_control2 = vt_player2_top - height <= now_height-100;
        const vt_control3 = vt_player3_top - height <= now_height-100;
        const vt_control4 = vt_player4_top - height <= now_height-100;
        const vt_control5 = vt_player5_top - height <= now_height-100;
        const vt_control6 = vt_player6_top - height <= now_height-100;
        const vt_control7 = vt_player7_top - height <= now_height-100;
        const vt_control8 = vt_player8_top - height <= now_height-100;
        const vt_control9 = vt_player9_top - height <= now_height-100;
        const vt_control10 = vt_player10_top - height <= now_height-100;
        const vt_control11 = vt_player11_top - height <= now_height-100;
        const vt_control12 = vt_player12_top - height <= now_height-100;
        const vt_control13 = vt_player13_top - height <= now_height-100;
        const vt_control14 = vt_player14_top - height <= now_height-100;
        const vt_control15 = vt_player15_top - height <= now_height-100;
        const vt_control16 = vt_player16_top - height <= now_height-100;
        const vt_control17 = vt_player17_top - height <= now_height-100;
        const vt_control18 = vt_player18_top - height <= now_height-100;
        const vt_control19 = vt_player19_top - height <= now_height-100;
        const vt_control20 = vt_player20_top - height <= now_height-100;
        const vt_control21 = vt_player21_top - height <= now_height-100;
        const vt_control22 = vt_player22_top - height <= now_height-100;
        const vt_control23 = vt_player23_top - height <= now_height-100;
        const vt_control24 = vt_player24_top - height <= now_height-100;
        const vt_control25 = vt_player25_top - height <= now_height-100;
        const vt_control26 = vt_player26_top - height <= now_height-100;
        const vt_control27 = vt_player27_top - height <= now_height-100;
        const vt_control28 = vt_player28_top - height <= now_height-100;
        const vt_control29 = vt_player29_top - height <= now_height-100;
        const vt_control30 = vt_player30_top - height <= now_height-100;
        const vt_control31 = vt_player31_top - height <= now_height-100;
        const vt_control32 = vt_player32_top - height <= now_height-100;
        const vt_control33 = vt_player33_top - height <= now_height-100;
        const vt_control34 = vt_player34_top - height <= now_height-100;
        const vt_control35 = vt_player35_top - height <= now_height-100;
        const vt_control36 = vt_player36_top - height <= now_height-100;
        const vt_control37 = vt_player37_top - height <= now_height-100;
        const vt_control38 = vt_player38_top - height <= now_height-100;
        const vt_control39 = vt_player39_top - height <= now_height-100;
        const vt_control40 = vt_player40_top - height <= now_height-100;


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
        if(vt_control1 === true){
            vt_player1.classList.add('vt_player_ani')
        }else{
            vt_player1.classList.remove('vt_player_ani')
        }
        if(vt_control2 === true){
            vt_player2.classList.add('vt_player_ani')
        }else{
            vt_player2.classList.remove('vt_player_ani')
        }
        if(vt_control3 === true){
            vt_player3.classList.add('vt_player_ani')
        }else{
            vt_player3.classList.remove('vt_player_ani')
        }
        if(vt_control4 === true){
            vt_player4.classList.add('vt_player_ani')
        }else{
            vt_player4.classList.remove('vt_player_ani')
        }
        if(vt_control5 === true){
            vt_player5.classList.add('vt_player_ani')
        }else{
            vt_player5.classList.remove('vt_player_ani')
        }
        if(vt_control6 === true){
            vt_player6.classList.add('vt_player_ani')
        }else{
            vt_player6.classList.remove('vt_player_ani')
        }
        if(vt_control7 === true){
            vt_player7.classList.add('vt_player_ani')
        }else{
            vt_player7.classList.remove('vt_player_ani')
        }
        if(vt_control8 === true){
            vt_player8.classList.add('vt_player_ani')
        }else{
            vt_player8.classList.remove('vt_player_ani')
        }
        if(vt_control9 === true){
            vt_player9.classList.add('vt_player_ani')
        }else{
            vt_player9.classList.remove('vt_player_ani')
        }
        if(vt_control10 === true){
            vt_player10.classList.add('vt_player_ani')
        }else{
            vt_player10.classList.remove('vt_player_ani')
        }
        if(vt_control11 === true){
            vt_player11.classList.add('vt_player_ani')
        }else{
            vt_player11.classList.remove('vt_player_ani')
        }
        if(vt_control12 === true){
            vt_player12.classList.add('vt_player_ani')
        }else{
            vt_player12.classList.remove('vt_player_ani')
        }
        if(vt_control13 === true){
            vt_player13.classList.add('vt_player_ani')
        }else{
            vt_player13.classList.remove('vt_player_ani')
        }
        if(vt_control14 === true){
            vt_player14.classList.add('vt_player_ani')
        }else{
            vt_player14.classList.remove('vt_player_ani')
        }
        if(vt_control15 === true){
            vt_player15.classList.add('vt_player_ani')
        }else{
            vt_player15.classList.remove('vt_player_ani')
        }
        if(vt_control16 === true){
            vt_player16.classList.add('vt_player_ani')
        }else{
            vt_player16.classList.remove('vt_player_ani')
        }
        if(vt_control17 === true){
            vt_player17.classList.add('vt_player_ani')
        }else{
            vt_player17.classList.remove('vt_player_ani')
        }
        if(vt_control18 === true){
            vt_player18.classList.add('vt_player_ani')
        }else{
            vt_player18.classList.remove('vt_player_ani')
        }
        if(vt_control19 === true){
            vt_player19.classList.add('vt_player_ani')
        }else{
            vt_player19.classList.remove('vt_player_ani')
        }
        if(vt_control20 === true){
            vt_player20.classList.add('vt_player_ani')
        }else{
            vt_player20.classList.remove('vt_player_ani')
        }
        if(vt_control21 === true){
            vt_player21.classList.add('vt_player_ani')
        }else{
            vt_player21.classList.remove('vt_player_ani')
        }
        if(vt_control22 === true){
            vt_player22.classList.add('vt_player_ani')
        }else{
            vt_player22.classList.remove('vt_player_ani')
        }
        if(vt_control23 === true){
            vt_player23.classList.add('vt_player_ani')
        }else{
            vt_player23.classList.remove('vt_player_ani')
        }
        if(vt_control24 === true){
            vt_player24.classList.add('vt_player_ani')
        }else{
            vt_player24.classList.remove('vt_player_ani')
        }
        if(vt_control25 === true){
            vt_player25.classList.add('vt_player_ani')
        }else{
            vt_player25.classList.remove('vt_player_ani')
        }
        if(vt_control26 === true){
            vt_player26.classList.add('vt_player_ani')
        }else{
            vt_player26.classList.remove('vt_player_ani')
        }
        if(vt_control27 === true){
            vt_player27.classList.add('vt_player_ani')
        }else{
            vt_player27.classList.remove('vt_player_ani')
        }
        if(vt_control28 === true){
            vt_player28.classList.add('vt_player_ani')
        }else{
            vt_player28.classList.remove('vt_player_ani')
        }
        if(vt_control29 === true){
            vt_player29.classList.add('vt_player_ani')
        }else{
            vt_player29.classList.remove('vt_player_ani')
        }
        if(vt_control30 === true){
            vt_player30.classList.add('vt_player_ani')
        }else{
            vt_player30.classList.remove('vt_player_ani')
        }
        if(vt_control31 === true){
            vt_player31.classList.add('vt_player_ani')
        }else{
            vt_player31.classList.remove('vt_player_ani')
        }
        if(vt_control32 === true){
            vt_player32.classList.add('vt_player_ani')
        }else{
            vt_player32.classList.remove('vt_player_ani')
        }
        if(vt_control33 === true){
            vt_player33.classList.add('vt_player_ani')
        }else{
            vt_player33.classList.remove('vt_player_ani')
        }
        if(vt_control34 === true){
            vt_player34.classList.add('vt_player_ani')
        }else{
            vt_player34.classList.remove('vt_player_ani')
        }
        if(vt_control35 === true){
            vt_player35.classList.add('vt_player_ani')
        }else{
            vt_player35.classList.remove('vt_player_ani')
        }
        if(vt_control36 === true){
            vt_player36.classList.add('vt_player_ani')
        }else{
            vt_player36.classList.remove('vt_player_ani')
        }
        if(vt_control37 === true){
            vt_player37.classList.add('vt_player_ani')
        }else{
            vt_player37.classList.remove('vt_player_ani')
        }
        if(vt_control38 === true){
            vt_player38.classList.add('vt_player_ani')
        }else{
            vt_player38.classList.remove('vt_player_ani')
        }
        if(vt_control39 === true){
            vt_player39.classList.add('vt_player_ani')
        }else{
            vt_player39.classList.remove('vt_player_ani')
        }
        if(vt_control40 === true){
            vt_player40.classList.add('vt_player_ani')
        }else{
            vt_player40.classList.remove('vt_player_ani')
        }
    })

