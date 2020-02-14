
window.globals = { 
    shape: 'square', 
    color: 'red' 
};

$(document).ready(function () {
    window.onload = function() {
        globals.makeShape();
        $('.shapes a').click(function (e) {
            e.preventDefault();
            window.globals.shape = $(this).attr('id');
            window.globals.makeShape();
            $('.shapes a').removeClass('active');
            $(this).addClass('active');
        });

        $('.colors a').click(function (e) { 
            e.preventDefault();
            window.globals.color = $(this).attr('id');
            window.globals.changeColor();
            $('.colors a').removeClass('active');
            $(this).addClass('active');
        });
    };
});

