$('main').on({
    click:function(){
        $(this).addClass('red-bg');
        $(this).addClass('red-bg');
    },
    mouseenter:function(){
        $(this).addClass('active-test');
    },
    mouseleave:function(){
        $(this).removeClass('active-test red-bg');
    }
});
