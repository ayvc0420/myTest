

window.addEventListener('scroll',function(){

    const body_height = document.body.scrollHeight;
    mob_menu_div.style.height = `${body_height}px`;
    
    const now_height = document.documentElement.scrollTop;
    const now_width = document.documentElement.scrollWidth;
    const height = document.documentElement.clientHeight;

    
    if(now_width >= 1024){
        mob_top.style.display = 'none';
    }else{
        mob_top.style.display = 'block';
    }

})