$(function(){

    $('#nva_menu_2').hover(function(){
        $('#nav_show').stop().toggle(500)
    },function(){
        $('#nav_show').stop().toggle(500);
    })

    $('#about_menu_show , #about_menu').hover(function(){
        $('#about_menu').stop().toggle()
    },function(){
        $('#about_menu').stop().toggle()
    })

    $('.item1').hover(function(){
        $('.item1 div img').stop().addClass("rotate_animation");
    },(function(){
        $('.item1 div img').stop().removeClass("rotate_animation");
    }))
    $('.item2').hover(function(){
        $('.item2 div img').stop().addClass("rotate_animation");
    },(function(){
        $('.item2 div img').stop().removeClass("rotate_animation");
    }))
    $('.item3').hover(function(){
        $('.item3 div img').stop().addClass("rotate_animation");
    },(function(){
        $('.item3 div img').stop().removeClass("rotate_animation");
    }))
    $('.item4').hover(function(){
        $('.item4 div img').stop().addClass("rotate_animation");
    },(function(){
        $('.item4 div img').stop().removeClass("rotate_animation");
    }))
    $('.item5').hover(function(){
        $('.item5 div img').stop().addClass("rotate_animation");
    },(function(){
        $('.item5 div img').stop().removeClass("rotate_animation");
    }))
    $('.item6').hover(function(){
        $('.item6 div img').stop().addClass("rotate_animation");
    },(function(){
        $('.item6 div img').stop().removeClass("rotate_animation");
    }))

    $('#mob_click').click(function(){
        $('.mob_nav').toggle()
    })

})