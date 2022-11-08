//Exercise #3
function Get_Options(){
	let sel;
	do{
	console.log("Please select an option -");
	console.log("Press 1 to add");
	console.log("Press 2 to subtract");
	console.log("Press 3 to multiply");
	console.log("Press 4 to devide");
	console.log("Press 5 to quit");
	sel=Number(prompt(""));
	if(sel>5||sel<1||isNaN(sel))
		console.log("Warn:bad Input")
	}while(sel>5||sel<1||isNaN(sel))
	return sel;
}

function Get_Nums(){
	let num1,num2;
	do {
		console.log("Input Number1");
		num1=Number(prompt(""));
		console.log("Input Number2");
		num2=Number(prompt(""));
		if(isNaN(num1)||isNaN(num2))
			console.log("Warn:Bad Input");
	}while(isNaN(num1)||isNaN(num2))
	return [num1,num2];
}

let sel;
let nums;

while(sel!=5){
	sel=Get_Options();
	if(sel!=5)
	nums=Get_Nums();
	switch(sel){
		case 1:
			console.log(nums[0]+nums[1]);
			break;
		case 2:
			console.log(nums[0]-nums[1]);
			break;
		case 3:
			console.log(nums[0]*nums[1]);
		break;
		case 4:
			console.log(nums[0]/nums[1]);
			break;
		default:
			break;
	}
}