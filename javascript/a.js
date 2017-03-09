$(document).ready(function(){
	$(".sun").bind("click", function(){
		$(".main").addClass("hide"),
			setTimeout(function(){
			$(".zong").addClass("show"),
			$(".suntext").addClass("show"),
			$(".sidebar").addClass("show");
		}, 500)
	});
});