function initService(){
    $('#nails').show();
    $('#shower').show();
    $('#fullService').show();

    $('#btn-nails').on('click',function(){
        $('#nails').show();
        $('#shower').hide();
        $('#fullService').hide();
    });

    $('#btn-shower').on('click',function(){
        $('#nails').hide();
        $('#shower').show();
        $('#fullService').hide();
    });

    $('#btn-service').on('click',function(){
        $('#nails').hide();
        $('#shower').hide();
        $('#fullService').show();
    });
}
window.onload = initService;