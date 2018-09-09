// Check off specific todos by clicking
// Adding event listeners to the elements that exist when page loads so that we can account for elements that aren't there yet
$("ul").on("click", "li", function(){
	//if li is gray, turn it black else turn it gray
	//rgb code gor gray color
	if($(this).css("color") == "rgb(128, 128, 128)"){
		$(this).css("color", "black");
		$(this).css("text-decoration", "none");
	}
	else{
		$(this).css("color", "gray");
		$(this).css("text-decoration", "line-through");
	}
});

//Click on X to delete ToDo
// Adding event listeners to the elements that exist when page loads so that we can account for elements that aren't there yet
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(650, function(){
		$(this).remove();
	});	
	event.stopPropagation(); //Stops event bubling
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>")
	}
});

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});