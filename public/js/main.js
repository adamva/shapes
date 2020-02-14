window.globals = { 
    shape: 'square', 
    color: '#42445a' 
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
    };
});

