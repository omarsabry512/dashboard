$(document).ready(function() {
    $('.table-head').css('width',`${$('.table-parent').width()}px`);

    $('.menu-btn').click(function() {
        $('.Dashboard .side-menu').toggleClass('show')
        $('.menu-close').toggleClass('show')
    })

    $('.menu-close').click(function() {
        $('.Dashboard .side-menu').removeClass('show')
        $(this).removeClass('show')
    })
});

$(window).resize(function(){
    $('.table-head').css('width',`${$('.table-parent').width()}px`);
})