var images = $(".image-loading");

images.each(function(){
	var url = $(this).attr("data-original-src");
	$(this).attr("src",url);
	$(this).removeClass("image-loading");
})

// $(".image-package .image-container .image-view-maintain:after").css("color", "transparent");