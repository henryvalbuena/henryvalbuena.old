(function(){
    $('#one').on('click', () => {
        updateLinks(1); 
    });
    $('#two').on('click', () => {
        updateLinks(2);
    });
    $('#three').on('click', () => {
        updateLinks(3);
    });
    $(window).scroll(() => {
        if ($(window).scrollTop() < $('#projects').offset().top)
            updateLinks(1);
        if ($(window).scrollTop() > $('#intro').offset().top && $(window).scrollTop() < $('#contact').offset().top)
            updateLinks(2);
        if ($(window).scrollTop() <= $('#contact').offset().top && $(window).scrollTop() > $('#projects').offset().top)
            updateLinks(3);
    });

    function updateLinks(pos) {
        switch (pos) {
            case 1:
                $('#one').addClass('active');
                $('#two').removeClass('active');
                $('#three').removeClass('active');
            break;
            case 2:
                $('#one').removeClass('active');
                $('#two').addClass('active');
                $('#three').removeClass('active');
            break;
            default:
                $('#one').removeClass('active');
                $('#two').removeClass('active');
                $('#three').addClass('active');
            break;
        }; 
    }
})();