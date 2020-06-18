$(document).ready(function() {
	$(".f2 form").on('submit', function() {
	alert('Сообщение отправлено');
});
	 $(".owl-carousel").owlCarousel({items:1, loop: true});
     $("#phone").mask("+7(999) 999-99-99");
     $("#tel1").mask("+7(999) 999-99-99");
     $(".window-choice").on("change", function() {
     	var src1 = $(".window-choice:checked").next().find("img").attr("src");
     	var src2 = $(".window-choice:checked").next().find("p").text();
     	$(".calculate-block-src").attr("src", src1);
     	$(".good").text(src2);
     });
});
