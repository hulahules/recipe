$(document).ready(function() {

	console.log("Script included!");
	
	$("li").click(function() {
	  if ($(this).hasClass("strikethrough")) {
	  	$(this).removeClass("strikethrough");
	  } else {
	  	$(this).addClass('strikethrough');
	  }
	});

	$("#show_hide_photos").click(function() {
		if ($("img").hasClass("hide")) {
			$(this).text("Hide Photos");
			$("img").removeClass("hide")
		} else {
			$(this).text("Show Photos");
			$("img").addClass("hide")
		}
	});
});