$(document).ready(function() {
	$(".menu-toggle").on("click", function() {
		$("nav ul").toggleClass("showing");
		$(this).toggleClass("open");
	});
});

$(window).on("scroll", function() {
	if($(window).scrollTop()) {
		$("nav").addClass("white");
		// $("nav ul li a").css("color", "#000");
	}
	else {
		$("nav").removeClass("white");
		// $("nav ul li a").css("color", "#fff");
	}
})


$(document).ready(function() {
	$(".toggler").on("click", function() {
    $(this).next(".wrapper").toggleClass("active");
	});
});

$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop':  $target.offset().top 
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});