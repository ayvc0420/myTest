(function(){

    const menuTarget = document.getElementById('menuTarget')
    const navMenu = document.querySelector('.nav_menu')
    const menuLis = document.querySelectorAll('.nav_menu>li>a')
    menuLis.forEach(item=>{
        item.addEventListener('mouseenter',function(){
            const position = item.getBoundingClientRect()
            const {width , height , top , left} = position
            menuTarget.style.width = `${width}px`
            menuTarget.style.height = `${height}px`
            menuTarget.style.top = `${top}px`
            menuTarget.style.left = `${left}px`
            menuTarget.style.transform = 'scale(100%)'
        })
    })
    navMenu.addEventListener('mouseleave',function(){
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

    

})()