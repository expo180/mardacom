$(document).ready(function () {
    $(".hamburger").click(function(){
    	$(".bi-search").show().css("font-size", "1.5rem").css("color", "#0e1826").css("cursor", "pointer");
    	$(".mobile-gift").show();
    	$(".bi-gift").show().css("font-size", "1.5rem").css("color", "#0e1826").css("cursor", "pointer");
    	$(".bi-translate").show().css("font-size", "1.5rem").css("color", "#0e1826").css("cursor", "pointer");
    	$(".dropdown-toggle").css("color", "#0e1826");
    	$(".mobile-menu .dropdown").show().css("color", "#0e1826").css("cursor", "pointer");
    	$(".features").show();
    	$(".mobile-menu").addClass("mobile-menu-active").show();
    	$("#back").click(function(){$(".mobile-menu").removeClass("mobile-menu-active");})
    })
});
