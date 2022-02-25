
window.addEventListener('DOMContentLoaded', () => renderPosts());

$(document).ready(function () {
    $('.post').click(function () {
        $('.popup_box').css("display", "none");
        alert("blog created successfully!");
    });
});