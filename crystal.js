$( document ).ready(function(){

	//setting variables
	//target number: random generator	
	var targetnum = Math.floor(Math.random()*101+19);

	// displaying the target number on the DOM
	$('#target').html(targetnum);
		
	//random number generator for additives
	// var one = Math.floor(Math.random()*11+1);
	// var two = Math.floor(Math.random()*11+1);
	// var three = Math.floor(Math.random()*11+1);
	// var four = Math.floor(Math.random()*11+1);

	// this is the start of the 
	var GuessNum= 0;
	var win= 0;
	var loss= 0;
	var randomNumbers= [];


	// this is displaying the starting number on the DOM
	$("#guessnum").html(GuessNum);


	// this is a click function on the 
	$("#first").click(function(){

		//random number generator for additives
		var one = Math.floor(Math.random()*4+4);
		// this is pushing a new value into the array, randomNumbers
		randomNumbers.push(one);

		console.log(randomNumbers);

		var sum = randomNumbers.reduce(add, 0);

		function add(a, b) {
		    return a + b;
		}

		console.log(sum);

		var totaledNumber = sum + parseInt(GuessNum);

		document.getElementById("guessnum").innerHTML =  totaledNumber;

		if (sum == targetnum || sum > targetnum) {
			alert("yay");
			randomNumbers.splice(0,randomNumbers.length);
			console.log(randomNumbers);
			document.getElementById("guessnum").innerHTML =  0;
		};

	});

	// this is a click function on the 
	$("#second").click(function(){

		//random number generator for additives
		var one = Math.floor(Math.random()*4+1);
		// this is pushing a new value into the array, randomNumbers
		randomNumbers.push(one);

		console.log(randomNumbers);

		var sum = randomNumbers.reduce(add, 0);

		function add(a, b) {
		    return a + b;
		}

		console.log(sum);

		var totaledNumber = sum + parseInt(GuessNum);

		document.getElementById("guessnum").innerHTML =  totaledNumber;

		if (sum == targetnum || sum > targetnum) {
			alert("yay");
			randomNumbers.splice(0,randomNumbers.length);
			console.log(randomNumbers);
			document.getElementById("guessnum").innerHTML =  0;
		};

	});


	// var totaledNumber = sum + parseInt(GuessNum);

	// document.getElementById("guessnum").innerHTML =  totaledNumber;


	// a conditional determining whether 
	// if (totaledNumber == targetnum || totaledNumber > targetnum) {
	// 	alert("yay");
	// };

	

});








