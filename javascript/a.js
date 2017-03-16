$(document).ready(function(){
	$(".sun").bind("click", function(){
		$(".main").addClass("hide"),
			setTimeout(function(){
			$(".zong").addClass("show"),
			$(".suntext").addClass("show"),
			$(".sidebar").addClass("show");
		}, 500)
	});
	$('.aabb').mouseover(function(){
		var that=$(this).next();
		that.css('opacity','1');
	});
	$('.aabb').mouseout(function(){
		var that=$(this).next();
		that.css('opacity','0');
	});
	$('#shuMing-3').mouseover(function(){
		$('.shuoMing-c').css({'opacity':'1','top':'60%'});
	});
	$('#shuMing-3').mouseout(function(){
		$('.shuoMing-c').css('opacity','0');
	});
	$('#shuMing-4').mouseover(function(){
		$('.shuoMing-d').css({'opacity':'1','top':'70%'});
	});
	$('#shuMing-4').mouseout(function(){
		$('.shuoMing-d').css('opacity','0');
	});
	$('#shuMing-5').mouseover(function(){
		$('.shuoMing-e').css({'opacity':'1','top':'35%'});
	});
	$('#shuMing-5').mouseout(function(){
		$('.shuoMing-e').css('opacity','0');
	});
});