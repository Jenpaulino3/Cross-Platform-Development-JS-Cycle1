// Class Method

/*var num1;
var num2;
var res;
var results;

document.addEventListener("DOMContentLoaded", function(){
	num1 = document.getElementById("num1");
	num2 = document.getElementById("num2");
	res = document.getElementById("results");
});

function add(){
	// console.log("Let's add");
	// var math = 7 + 7;
	// console.log(math);
	results = +num1.value + +num2.value;
	res.value = results;
}

function subtract(){
	// console.log("Let's subtract");
	// var math = 7 - 7;
	// console.log(math);
	results = +num1.value - +num2.value;
	res.value = results;
}

function multiply(){
	// console.log("Let's multiply");
	// var math = 7 * 7;
	// console.log(math);
	results = +num1.value * +num2.value;
	res.value = results;
}

function divide(){
	// console.log("Let's divide");
	// var math = 7 / 7;
	// console.log(math);
	results = +num1.value / +num2.value;
	res.value = results;
}*/

// End Class Method

var box = document.getElementById("display");// Stores the numbers


function addtoscreen(x){ // To display clicked #
	box.value += x;

	if(x=='C'){
		box.value = '';
	}
}

function answer(){
	x = box.value;
	x = eval(x);
	box.value = x;

}

function backspace(){
	var number = box.value;
	var len = number.length-1;
	var newnumber = number.substring(0,len);
	// Substring extracts the characters and returns new string. Requires start and end
	box.value=newnumber;
}