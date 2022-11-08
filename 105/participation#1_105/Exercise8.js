//Exercise #8

let input=prompt("Enter a number");
let number=Number(input);
switch(0>=number||0<=number){
	case false:
		console.log("This is not a number");
		break;
	default:
		console.log("This is a number");
}