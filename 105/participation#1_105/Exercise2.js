//Exercise #2

//note:
let FizzBuzz=false;

for (let i=1; i<=100; i++){
	let out=""
	FizzBuzz=false;
	if (i%3==0){
		out=out+"Fizz";
		FizzBuzz=true;
	}
	if (i%5==0){
		out=out+"Buzz";
		FizzBuzz=true;
	}
	 if (!FizzBuzz){
		 out=i.toString();
	 }
	console.log(out);
}