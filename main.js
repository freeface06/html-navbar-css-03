$(document).ready(function () {
    $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll > 0) {
            // 스크롤 위치가 최상단이 아닐 때
            $('nav').css('background-color', 'rgba(0, 0, 0, 1)');
        } else {
            // 스크롤이 최상단일 때
            $('nav').css('background-color', 'rgba(0, 0, 0, 0)');
        }
    });
});