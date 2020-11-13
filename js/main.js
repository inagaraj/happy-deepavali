$(document).ready(function () {
    let searchParams = new URLSearchParams(window.location.search);
    var name = searchParams.toString();
    if(name){
        name = name.replace("=", "");
        $('title').append("❤️"+ name);
        $('.wishing-text').append(" ❤️ "+ name);
    }
    var launchDate = new Date();
    launchDate.setSeconds( launchDate.getSeconds() + 7 );
    launchDate = launchDate.getTime();
    var distance = setInterval(function () {
        var now = new Date().getTime();
        var difference = launchDate - now;
        var days = Math.floor(difference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((difference % (1000 * 60)) / 1000);
        $("#days").html(("0" + days).slice(-2));
        $("#hours").html(("0" + hours).slice(-2));
        $("#minutes").html(("0" + minutes).slice(-2));
        $("#seconds").html(("0" + seconds).slice(-2));
        if (difference < 0) {
            clearInterval(distance);
            $(".countdown-holder").hide();
            $("body").addClass("loaded");
        }
    }, 1000);
});