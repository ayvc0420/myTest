$(function(){

    $('.pc_nav_2').hover(function(){
        $('#pc_nav_div').stop().toggle(200)
        $('.pc_nav_2 img').css({'opacity':'1'})
    },function(){
        $('#pc_nav_div').stop().toggle(200)
        $('.pc_nav_2 img').css({'opacity':'0.5'})
    })

    const buy_btn = document.getElementById('buy_btn_id');
    buy_btn.addEventListener('click', function (){
        alert('你不會真的想買吧？參照網站再說明那邊喔~~。')
    })

    $('#mob_menu_btn').click(function(){
        $('.mob_menu').toggle()
        $('.pc_nav , .logo , .wrap_mob , .main , .slider ,.footer_area_bg , footer').toggle()
    })
    $('#mob_close_btn').click(function(){
        $('.mob_menu').toggle()
        $('.pc_nav , .logo , .wrap_mob , .main , .slider ,.footer_area_bg , footer').toggle()
    })

    $('.mob_li_btn').click(function(){
        $('.mob_container ul>li:nth-of-type(2) li').toggle()
        $('.mob_li_btn img:nth-of-type(1)').toggle()
        $('.mob_li_btn img:nth-of-type(2)').toggle()
    })

})