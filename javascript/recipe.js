
$(".tab").hover(function()
	{
	$(this).addClass("hover")}
	,function(){
		$(this).removeClass("hover")
	}
)
$(".tab").on("click", function(){
	$(this).next().show('slow')
	$(".content").not($(this).next()).hide('slow')
	$(".tab").not(($(this))).removeClass("open")
	$(this).addClass("open")
})
$(".bg-img").hover(function(){
	$(this).children().animate({"width": "100px", "height": "100px"}).css("background", "rgba(255,255,255,0.5)")
	$(this).children().last().text("Explore")
}, function(){
	$(this).children().animate({"width": "0px", "height": "0px"})
	$(this).children().last().text("")
})
