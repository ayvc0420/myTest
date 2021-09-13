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

})