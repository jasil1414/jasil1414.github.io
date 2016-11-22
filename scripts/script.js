var controller = new ScrollMagic.Controller;
$(".fade-in").each(function() {
    {
        var t = TweenMax.from($(this), .9, {
            opacity: .1,
            y: "+=50",
            boxShadow: "0 0 0 0 grey",
            ease: Linear.easeIn
        });
        new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 1
        }).setTween(t).addTo(controller)
    }
}), $(function() {
    $(window).scroll(function() {
        $(this).scrollTop() > 20 ? $(".down_button").fadeOut(400) : $(".down_button").fadeIn(400)
    }), $(window).scroll(function() {
        $(this).scrollTop() > $("#home_page").height() ? $(".custom_container").css({
            background: "#4f819b",
            opacity: "0.9"
        }) : $(".custom_container").css("background", "none")
    }), $(".mail_to").hover(function() {
        $(".mail_to img").attr("src", "images/mail_to_white.png")
    }, function() {
        $(".mail_to img").attr("src", "images/mail_to_black.png")
    }), $(".github").hover(function() {
        $(".github img").attr("src", "images/github_white.png")
    }, function() {
        $(".github img").attr("src", "images/github_black.png")
    }), $(".linkedin").hover(function() {
        $(".linkedin img").attr("src", "images/linked_white.png")
    }, function() {
        $(".linkedin img").attr("src", "images/linked_black.png")
    }), $(".twitter").hover(function() {
        $(".twitter img").attr("src", "images/twitter_white.png")
    }, function() {
        $(".twitter img").attr("src", "images/twitter_black.png")
    })
});
