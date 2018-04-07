// JavaScript Document
(function() {
		$('.letter-animate .letters').each(function(){
	  $(this).html($(this).text().replace(/([^a-zA-Z0-9 ]|\w)/g, "<span class='letter'>$&</span>"));
	});
	ml.timelines["letter-animate"] = anime.timeline({loop: false})
	  .add({
		targets: '.letter-animate .letter',
		translateY: ["1.2em", 0],
		translateZ: 0,
		duration: 700,
		delay: function(el, i) {
		  return 50 * i;
		}
	  });
})();
$(window).scroll(function () {
    $('.web-left-wrap').each(function () {
        var imagePos = $(this).offset().top;
        var imageHeight = $(this).height();
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
            $(this).removeClass("element-to-hide");
            $(this).addClass("web-left-animate");
        }
    });
});
$(window).scroll(function () {
    $('.web-right-wrap').each(function () {
        var imagePos = $(this).offset().top;
        var imageHeight = $(this).height();
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
            $(this).removeClass("element-to-hide");
            $(this).addClass("web-right-animate");
        }
    });
});