$(function(){

    $('.pc_nav_2').hover(function(){
        $('#pc_nav_div').stop().toggle(200)
        $('.pc_nav_2 img').css({'opacity':'1'})
    },function(){
        $('#pc_nav_div').stop().toggle(200)
        $('.pc_nav_2 img').css({'opacity':'0.5'})
    })

    


})