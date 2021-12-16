(function(){

    const menuTarget = document.getElementById('menuTarget')
    const navMenu = document.querySelector('.nav_menu')
    const menuLis = document.querySelectorAll('.nav_menu>li>a')
    menuLis.forEach(item=>{
        item.addEventListener('mouseenter',function(){
            const position = item.getBoundingClientRect()
            // const {width , height , top , left} = position
            let windowPosition = {
                top: window.scrollY+position.top,
                left: window.scrollX+position.left,
                width: position.width,
                height: position.height
            }
            menuTarget.style.width = `${windowPosition.width}px`
            menuTarget.style.height = `${windowPosition.height}px`
            menuTarget.style.top = `${windowPosition.top}px`
            menuTarget.style.left = `${windowPosition.left}px`
            menuTarget.style.transform = 'scale(100%)'
        })
    })
    navMenu.addEventListener('mouseleave',function(){
        menuTarget.style.transform = 'scale(0)'
    })
    document.querySelector('.nav_menu>a').addEventListener('mouseenter',function(){
        menuTarget.style.transform = 'scale(0)'
    })




    new Vue({
        el:'#banner',
        data:{
            bannerKey:0,
            banner:[
                {href:'./htmlExplain.html',src:'./images/banner1.webp',alt:'HTML CODE圖片',title:'前往HTML頁面'},
                {href:'./cssExplain.html',src:'./images/banner2.webp',alt:'CSS CODE圖片',title:'前往CSS頁面'},
                {href:'./javaScriptExplain.html',src:'./images/banner3.webp',alt:'JS CODE圖片',title:'前往JS頁面'}
            ]
        },
        methods: {
            imgSwitch(index){
                this.bannerKey = (index + this.banner.length) % this.banner.length
            }
        },
        mounted(){
            setInterval(()=>{
                if(this.bannerKey < this.banner.length -1){
                    this.bannerKey +=1;
                }else{
                    this.bannerKey = 0;
                }
            },30000)
        },

    })

    const touchMenu = document.getElementById('touchMenu')
    const svg1 = document.getElementById('svg1')
    const svg2 = document.getElementById('svg2')
    const mobileMenu = document.querySelector('.mob_menu')
    touchMenu.addEventListener('click',function(){
        const svg1Opacity = window.getComputedStyle(svg1,null).opacity
        if(svg1Opacity === '1'){
            svg1.style.opacity = 0;
            svg2.style.opacity = 1;
            mobileMenu.style.transform = 'translateY(0%)';
        }else{
            svg1.style.opacity = 1;
            svg2.style.opacity = 0;
            mobileMenu.style.transform = 'translateY(-200%)';
        }
    })



    

})()