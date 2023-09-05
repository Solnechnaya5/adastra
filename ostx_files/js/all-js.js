$(".orderType").on("click", ".orderTypeButton", function () {
    $(this)
        .addClass("orderTypeButtonActive")
        .siblings()
        .removeClass("orderTypeButtonActive");
});

function foo() {
    document.getElementById("send_order_button").innerHTML = "Lorem Ipsum";
}

function foo1() {
    document.getElementById("send_order_button").innerHTML = "Lorem Ipsum";
}

function GetCount() {
    var dateToday = new Date();
    var timeZone = dateToday.getTimezoneOffset();
    var timerSec =
        Math.ceil((dateToday / 1000 / 60 - timeZone) / 60 / 24) *
        60 *
        60 *
        24 -
        Math.floor(dateToday / 1000 - timeZone * 60);
    var amount = timerSec;
    let hours = Math.floor(amount / 60 / 60);
    let mins = Math.floor((amount / 60) % 60);
    let secs = Math.floor(amount % 60);
    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    $(".hours").html(hours);
    $(".mins").html(mins);
    $(".secs").html(secs);
}
GetCount();
setInterval(GetCount, 1000);

jQuery(document).ready(function () {
    $("a:not(.noactive), .to_form").on("touch, click", function (e) {
        e.preventDefault();
        $("body,html").animate(
            {
                scrollTop: $("#order_form").offset().top - 50,
            },
            200
        );
    });

    $("a.noactive").on("click", function (e) {
        e.preventDefault();
    });
});
