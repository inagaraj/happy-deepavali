$(document).ready(function () {
    let searchParams = new URLSearchParams(window.location.search)
    console.log(searchParams.toString());
    var name = searchParams.toString();
    if(name){
        name = name.replace("=", "");
        $('title').append("❤️"+ name);
        $('.wishing-text').append(" ❤️ "+ name);
    }
    
    $(".countdown-holder").hide();
    $("#launch_div").hide();
    setTimeout(function () { $(".countdown-holder").show(); }, 900);
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
            $(".begins").hide();
            $("#launch_div").show();
            $("body").addClass('body-background');
            /*var images = ["happy-diwali.jpg", "diwali.jpg"];
            var bg_color = ["#191e21", "#000000"];
            var bg_size = ["contain", "cover"];
            $(function () {
                var i = 0;
                $("body").css("background-image", "url(" + images[i] + ")");
                $("body").css("background-color", bg_color[i]);
                $("body").css("background-size", bg_size[i]);
                setInterval(function () {
                    i++;
                    if (i == images.length) {
                        i = 0;
                    }
                    $("body").fadeOut("slow", function () {
                        $(this).css("background-image", "url(" + images[i] + ")");
                        $("body").css("background-color", bg_color[i]);
                        $("body").css("background-size", bg_size[i]);
                        $(this).fadeIn();
                    });
                }, 5000);
            });*/
        }
    }, 1000);
});