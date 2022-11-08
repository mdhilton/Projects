//Exercise #7
var run=true;
while(run){
	console.log("Please select an option -");
	console.log("Press 1 to add");
	console.log("Press 2 to subtract");
	console.log("Press 3 to multiply");
	console.log("Press 4 to devide");
	console.log("Press 5 to quit");

	let sel=Number(prompt(""));
	let num1=0;
	let num2=0;
	
	switch(sel){
		case 1:
			num1=Number(prompt("first number"));
			num2=Number(prompt("second number"));
			if(isNaN(num1)||isNaN(num2))
				console.log("bad input");
			else
				console.log(num1+num2);
			run=false;
			break;
		case 2:
			num1=Number(prompt("first number"));
			num2=Number(prompt("second number"));
			if(isNaN(num1)||isNaN(num2))
				console.log("bad input");
			else
				console.log(num1-num2);
			run=false;
			break;
		case 3:
			num1=Number(prompt("first number"));
			num2=Number(prompt("second number"));
			if(isNaN(num1)||isNaN(num2))
				console.log("bad input");
			else
				console.log(num1*num2);
			run=false;
			break;
		case 4:
			num1=Number(prompt("first number"));
			num2=Number(prompt("second number"));
			if(isNaN(num1)||isNaN(num2))
				console.log("bad input");
			else
				console.log(num1/num2);
			run=false;
			break;
		case 5:
			num1=Number(prompt("first number"));
			num2=Number(prompt("second number"));
			if(isNaN(num1)||isNaN(num2))
				console.log("bad input");
			else
				console.log(num1+num2);
			run=false;
			break;
		default:
			console.log("\nPlease select a valid option\n")
	}
}