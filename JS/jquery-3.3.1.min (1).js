$(document).scroll(function () {
    var y = $(document).scrollTop(),
        header = $("#title");

    if (y >= 300) {
        header.addClass('fixed');
    } else {
        header.removeClass('fixed');
    }
});