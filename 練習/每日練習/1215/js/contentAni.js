;(function(){

    const content = document.querySelectorAll('.content>article>div')

    window.addEventListener('scroll',function(){
        const nowHeight = document.documentElement.scrollTop;
        const height = document.documentElement.clientHeight;
        content.forEach(item =>{
            const itemTop = item.offsetTop
            const control = itemTop - height <= nowHeight -100;
            control ? item.classList.add('ani') : ''
        })
    })
    window.addEventListener('load',function(){
        const nowHeight = document.documentElement.scrollTop;
        const height = document.documentElement.clientHeight;
        content.forEach(item =>{
            const itemTop = item.offsetTop
            const control = itemTop - height <= nowHeight -100;
            control ? item.classList.add('ani') : ''
        })
    })


})()