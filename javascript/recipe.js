$(".tab").on("click", function(){
	$(this).next().show('slow')
	$(".content").not($(this).next()).hide('slow')
})