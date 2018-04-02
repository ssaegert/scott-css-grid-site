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