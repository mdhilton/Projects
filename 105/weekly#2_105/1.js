/*
 * Mark Hilton
 * Week 2 Assignment 1
 */

function maketable(){
	let num=document.getElementById("inp").value;
	document.getElementById("output").innerHTML="";
	for(let i=1;i<=10;i++){
		document.getElementById("output").innerHTML+=i+"*"+num+"="+i*num+" ";
	}
}
