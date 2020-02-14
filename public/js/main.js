//create square, circle, star, and rectangle shape
//create shape when user clicks
//associate shape with keyboard
//change shape when user presses key
//associate color with shapes
//change color when user presses key

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

