$(document).ready(function(){
	$(".sun").bind("click", function(){
		$(".main").addClass("hide"),
			setTimeout(function(){
			$(".zong").addClass("show");
		}, 500)
	});
});