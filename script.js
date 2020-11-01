$(function () { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
	$("#message").fadeOut();
	// Called function to update the name, happiness, and weight of our pet in our HTML
	checkAndUpdatePetInfoInHtml();

	// When each button is clicked, it will "call" function for that button (functions are below)
	$('.treat-button').click(clickedTreatButton);
	$('.play-button').click(clickedPlayButton);
	$('.exercise-button').click(clickedExerciseButton);
	$('.train-button').click(clickedTrainButton);
	$('.volume').click(clickedAudioButton);


})

// Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
var pet_info = {
	name: "Pikachu",
	weight: "5",
	happiness: "10",
	skill: "10"
};
var lower_limit=0;
var upper_limit=100;

var mute=0;
var sound = document.getElementById("cry"); 
//audio play technique found here: https://www.w3schools.com/jsref/met_audio_play.asp

function clickedAudioButton() {
	if(mute==0){
		mute=1;
		//alert("Now muted");

		document.getElementById("mute").classList.add('invisible');
		document.getElementById("unmute").classList.remove('invisible');
	}
	else{
		mute=0;
		//alert("Now unmuted");
		
		document.getElementById("unmute").classList.add('invisible');
		document.getElementById("mute").classList.remove('invisible');

	}
}
function clickedTreatButton() {
	playAudio();
	$("#message").fadeOut(1);
	document.getElementById("message").classList.add('message');
	
	//jquery fade effect found at https://www.w3schools.com/jquery/jquery_fade.asp
	
	if (pet_info.weight >= upper_limit){
		document.getElementById("message").innerHTML = "Not Hungry right now";
		document.getElementById("pet_image").src = "assets/fat.gif";
	} 
	else{
		if(pet_info.happiness >= upper_limit){
			document.getElementById("message").innerHTML = "I couldn't be any happier if I tried!";
			document.getElementById("pet_image").src = "assets/treat.gif";
		}
		else{
			document.getElementById("message").innerHTML = "Yay treat!";
			document.getElementById("pet_image").src = "assets/treat.gif";
			
		}
		
	}
	
	$("#message").fadeIn();
	//jquery fade effect found at https://www.w3schools.com/jquery/jquery_fade.asp
	
	pet_info.weight++;
	pet_info.happiness++;
	// Increase pet happiness
	// Increase pet weight
	checkAndUpdatePetInfoInHtml();
	

	
}

function clickedPlayButton() {
	playAudio();
	$("#message").fadeOut(1);
	document.getElementById("message").classList.add('message');

	//jquery fade effect found at https://www.w3schools.com/jquery/jquery_fade.asp
	
	if (pet_info.weight <= lower_limit){
		document.getElementById("message").innerHTML = "Playing is tough on an empty stomache...";
		document.getElementById("pet_image").src = "assets/hungry.gif";
	} 
	else{
		if(pet_info.happiness >= upper_limit){
			document.getElementById("message").innerHTML = "I couldn't be any happier if I tried!";
			document.getElementById("pet_image").src = "assets/play.gif";
		}
		else{
			document.getElementById("message").innerHTML = "Yeah playing is so much fun!";
			document.getElementById("pet_image").src = "assets/play.gif";
			
		}
		
	}
	
	$("#message").fadeIn();
	//jquery fade effect found at https://www.w3schools.com/jquery/jquery_fade.asp
	pet_info.weight = pet_info.weight - 2;
	pet_info.happiness++;
	// Increase pet happiness
	// Decrease pet weight
	checkAndUpdatePetInfoInHtml();
	

	
}

function clickedExerciseButton() {
	playAudio();
	$("#message").fadeOut(1);
	document.getElementById("message").classList.add('message');

	//jquery fade effect found at https://www.w3schools.com/jquery/jquery_fade.asp
	
	if(pet_info.happiness <= lower_limit){
		document.getElementById("message").innerHTML = "So sad, Why are you making me do this?";
		document.getElementById("pet_image").src = "assets/sad.gif";
	} 
	else if (pet_info.weight <= lower_limit){
		document.getElementById("message").innerHTML = "Exercise is tough on an empty stomache";
		document.getElementById("pet_image").src = "assets/hungry.gif";
	}
	else{
		document.getElementById("message").innerHTML = "Exercise sure is tough!";
		document.getElementById("pet_image").src = "assets/exercise.gif";
	}
	$("#message").fadeIn();
	//jquery fade effect found at https://www.w3schools.com/jquery/jquery_fade.asp
	
	pet_info.weight = pet_info.weight - 5;
	pet_info.happiness = pet_info.happiness-10;
	// Decrease pet happiness
	// Decrease pet weight
	checkAndUpdatePetInfoInHtml();
	


}

function clickedTrainButton() {
	playAudio();
	$("#message").fadeOut(1);
	document.getElementById("message").classList.add('message');

	//jquery fade effect found at https://www.w3schools.com/jquery/jquery_fade.asp
	
	if(pet_info.happiness <= lower_limit){
		document.getElementById("message").innerHTML = "So sad, Why are you making me do this?";
		document.getElementById("pet_image").src = "assets/sad.gif";
	} 
	else if (pet_info.weight <= lower_limit){
		document.getElementById("message").innerHTML = "Training is tough on an empty stomache";
		document.getElementById("pet_image").src = "assets/hungry.gif";
	}
	else{
		document.getElementById("message").innerHTML = "I'm stronger already!";
		document.getElementById("pet_image").src = "assets/train.webp";
	}
	$("#message").fadeIn();
	//jquery fade effect found at https://www.w3schools.com/jquery/jquery_fade.asp
	pet_info.weight = pet_info.weight - 5;
	pet_info.happiness = pet_info.happiness-10;
	pet_info.skill++;
	// Decrease pet happiness
	// Decrease pet weight
	// Increase pet skill
	checkAndUpdatePetInfoInHtml();
	

	
}

function playAudio() {
	if(mute==0){
		sound.play();
		//audio play technique found here: https://www.w3schools.com/jsref/met_audio_play.asp
	}
}

function checkAndUpdatePetInfoInHtml() {
	checkWeightAndHappinessBeforeUpdating();
	updatePetInfoInHtml();
}

function checkWeightAndHappinessBeforeUpdating() {
	// Add conditional so if weight is lower than zero, set it back to zero
	if (pet_info.weight >= upper_limit){
		pet_info.weight = upper_limit;
	}
	if (pet_info.weight <= lower_limit){
		pet_info.weight = lower_limit;
	}
	
	if (pet_info.happiness >= upper_limit){
		pet_info.happiness = upper_limit;
	}
	if (pet_info.happiness <= lower_limit){
		pet_info.happiness = lower_limit;
	}
	
	if (pet_info.skill >= upper_limit){
		pet_info.skill = upper_limit;
	}
	if (pet_info.skill <= lower_limit){
		pet_info.skill = lower_limit;
	}
}

// Updates your HTML with the current values in your pet_info dictionary
function updatePetInfoInHtml() {
	$('.name').text(pet_info['name']);
	$('.weight').text(pet_info['weight']);
	$('.happiness').text(pet_info['happiness']);
	$('.skill').text(pet_info['skill']);

	document.getElementById("weight_meter").min =lower_limit;
	document.getElementById("happiness_meter").min =lower_limit;
	document.getElementById("skill_meter").min =lower_limit;
	
	document.getElementById("weight_meter").max =upper_limit;
	document.getElementById("happiness_meter").max =upper_limit;
	document.getElementById("skill_meter").max =upper_limit;
	
	document.getElementById("weight_meter").value=pet_info.weight;
	document.getElementById("happiness_meter").value=pet_info.happiness;
	document.getElementById("skill_meter").value=pet_info.skill;
}