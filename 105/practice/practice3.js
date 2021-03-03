$('main').on({
    click:function(){
        $(this).removeClass('active-test');
        $(this).addClass('red-bg');
    },
    mouseenter:function(){
        $(this).addClass('active-test');
    },
    mouseleave:function(){
        $(this).removeClass('active-test red-bg');
    }
});

var text = $('main h2').text();
console.log(text);
$('main h2').html('<h1> Hello World </h1>');
//challenge: 
//US: A user I want to click on the footer
//and change the h2 text 

$('footer').on({
    click:function(){
        $('this').removeClass('active-test');
        $('this').addClass('red-bg');
    },
    mouseenter:function(){
        $(this).addClass('active-test');
    },
    mouseleave:function(){
        $(this).removeClass('active-test red-bg');
    }
});

$('footer').on('click', function(){
    $(this).text('Footer is this?');
});