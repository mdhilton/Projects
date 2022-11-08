//Exercise #5
let num1=Number(prompt("Enter Minimum Number to be multiplyed"));
let num2=Number(prompt("Enter Maximum Number to be multiplyed"));
let start=Number(prompt("Enter the Minimum multipler"));
let end=Number(prompt("Enter the Maximum multipler"));
console.log("\n");
while(!isNaN(num1)||!isNaN(num2)||!isNaN(start)||!isNaN(end)){
	for(let i=num1;i<=num2;i++){
		for(let j=start;j<=end;j++)
			console.log(i+"*"+j+"="+(i*j));
		console.log("\n");
	}
	num1=Number(prompt("Enter Number to be multiplyed"));
	num2=Number(prompt("Enter Number to be multiplyed"));
	start=Number(prompt("Enter the Minimum multipler"));
	end=Number(prompt("Enter the Maximum multipler"));
}
console.log("Error:bad input");