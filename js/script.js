$(document).ready(function () {
    $(".btnSwitch").click(function () {
        if ($("body").hasClass("night")) {
            $("body").removeClass("night");
        } else {
            $("body").addClass("night");
        }
    });
});