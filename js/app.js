$(document).ready(function(){

    $('.hamburger').click(function(){
        $(this).toggleClass("open");
        $('#hamburger-menu').toggleClass('activex');
    });
});