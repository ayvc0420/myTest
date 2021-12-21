(function(){

    const menuTarget = document.getElementById('menuTarget')
    const navMenu = document.querySelector('.nav_menu')
    const menuLis = document.querySelectorAll('.nav_menu>li>a')
    const menu5 = document.querySelector('.mob_menu>.menu5')
    
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

    const menu5more = document.querySelector('.menu5_more')
    menu5.addEventListener('click',function(){
        document.querySelectorAll('.mob_menu>li').forEach(item=>item.style.display = 'none')
        menu5more.style.left = '0%'
    })


    new Vue({
        el:'#banner',
        data:{
            bannerKey:0,
            mobBannerKey:0,
            keyN:0,
            width:window.innerWidth,
            banner:[
                {href:'./htmlExplain.html',src:'./images/banner1.webp',alt:'HTML CODE圖片',title:'前往HTML頁面'},
                {href:'./cssExplain.html',src:'./images/banner2.webp',alt:'CSS CODE圖片',title:'前往CSS頁面'},
                {href:'./javaScriptExplain.html',src:'./images/banner3.webp',alt:'JS CODE圖片',title:'前往JS頁面'}
            ],
            mobBanner:[
                {href:'./htmlExplain.html',src:'./images/mobBanner1.webp',alt:'HTML CODE圖片',title:'前往HTML頁面'},
                {href:'./cssExplain.html',src:'./images/mobBanner2.webp',alt:'CSS CODE圖片',title:'前往CSS頁面'},
                {href:'./javaScriptExplain.html',src:'./images/mobBanner3.webp',alt:'JS CODE圖片',title:'前往JS頁面'}
            ]
        },
        methods: {
            imgSwitch(index){
                this.keyN =index
                const width = window.innerWidth
                if(width >= 1024){
                    this.bannerKey = (this.banner.length + this.keyN) % this.banner.length
                }else{
                    this.mobBannerKey = (this.mobBanner.length + this.keyN) % this.mobBanner.length
                }
            },
            // nowWidth(){
            //     this.width = window.innerWidth
            // }
        },
        mounted(){
            window.addEventListener('resize',()=>{
                this.width = window.innerWidth
            }) 
            
            setInterval(()=>{
                const width = window.innerWidth
                if(width >= 1024){
                    if(this.bannerKey < this.banner.length -1){
                        this.bannerKey +=1;
                    }else{
                        this.bannerKey = 0;
                    }
                }else{
                    if(this.mobBannerKey < this.mobBanner.length -1){
                        this.mobBannerKey +=1;
                    }else{
                        this.mobBannerKey = 0;
                    }
                }
            },30000)
        },

    })


    const touchMenu = document.getElementById('touchMenu')
    const svg1 = document.getElementById('svg1')
    const svg2 = document.getElementById('svg2')
    const mobileMenu = document.querySelector('.mob_menu')
    touchMenu.addEventListener('click',function(){
        document.querySelectorAll('.mob_menu>li').forEach(item=>item.style.display = 'flex')
        menu5more.style.left = '-200%'
        const svg1Opacity = window.getComputedStyle(svg1,null).opacity
        if(svg1Opacity === '1'){
            svg1.style.opacity = 0;
            svg2.style.opacity = 1;
            mobileMenu.style.top = '0%';
        }else{
            svg1.style.opacity = 1;
            svg2.style.opacity = 0;
            mobileMenu.style.top = '-200%';
        }
    })



    

})()