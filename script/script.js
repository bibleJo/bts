$(document).ready(function(){
    $('#main_slide_bt>li').click(function(){
        $(this).css({'opacity':'1'}).siblings().css({'opacity':'0.5'})
        $('#main_slide').animate({'left':$(this).index()*-100+'%'})
    })
    $('#menu_icon1').click(function(){
        $(this).hide();
        $('#menu_popup').show()
        $('body').css({'overflow':'hidden'})
    })
    $('#menu_icon2').click(function(){
        $('#menu_popup').hide();
        $('#menu_icon1').show()
        $('body').css({'overflow':'auto'})

    })
})