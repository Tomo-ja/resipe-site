
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
