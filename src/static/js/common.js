$(document).ready(function() {
    $('.burger').click(function(){
        $(this).toggleClass('is-active');
        $('.mobile-menu, .overlay').fadeToggle();
    });
});
