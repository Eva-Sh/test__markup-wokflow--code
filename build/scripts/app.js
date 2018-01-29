"use strict";

var Test = {};

Test.sortableOptions = function () {
    $(".sortable").sortable({
        revert: true
    });
    $("#draggable").draggable({
        connectToSortable: "#sortable",
        helper: "clone",
        revert: "invalid"
    });
    $(".sortable, .ui-state-default").disableSelection();
};

Test.openOption = function () {

    $('.main__options-item').click(function () {
        if (!$(this).hasClass('active')) {
            $('.main__options-item').removeClass('active').children('.main__options-container--down').slideUp();
            $(this).addClass('active');
            $(this).children('.main__options-container--down').slideDown(200);
        } else {
            $(this).removeClass('active').children('.main__options-container--down').slideUp();
        }
    });
};

Test.toggleMenu = function () {

    $('.main__item--link').click(function (e) {
        e.preventDefault();
        $('.main__menu-list .active').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.main__content').not(tab).css({ 'display': 'none' });
        $(tab).fadeIn(400);
    });
};

$(document).ready(function () {
    Test.sortableOptions();
    Test.openOption();
    Test.toggleMenu();
});
//# sourceMappingURL=app.js.map
