//Exercise #4
let num=Number(prompt("Enter Number to be multiplyed"));
let start=Number(prompt("Enter the Minimum multipler"));
let end=Number(prompt("Enter the Maximum multipler"));
while(!isNaN(num)||!isNaN(start)||!isNaN(end)){
	for(let i=start;i<=end;i++)
		console.log(num+"*"+i+"="+(num*i));
	num=Number(prompt("Enter Number to be multiplyed"));
	start=Number(prompt("Enter the Minimum multipler"));
	end=Number(prompt("Enter the Maximum multipler"));
}
console.log("Error:bad input");