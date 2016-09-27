//create function
  //control and return statements

//Prompt user for input and store variable
var userInput = prompt("Say \"Hello\"");

//Call function
function helloWorld(userInput) {
	if(userInput === "Hello") {
		document.write("<p>" + userInput + "World!</p>");
	} else {
		document.write("<p>I said say \"Hello\"!</p>");
	}
}

//Alert user results
helloWorld(userInput);