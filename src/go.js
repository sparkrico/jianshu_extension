var images = $(".image-view");

images.each(function(){
	$(this).removeClass("image-view-maintain");
	$(this).removeClass("image-view")
	$(this).css({"position":"absolute","overflow":"hidden","top":"0","left":"0","width":"100%","height":"100%"});

	var img = $(this).children('.image-loading');
	var url = img.attr("data-original-src");
	img.attr("src",url);
	img.removeClass("image-loading");
})