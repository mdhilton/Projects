const out=document.getElementById("Out")
const Len=document.getElementById("Len");
const Up= document.getElementById("Up");
const Low=document.getElementById("Low");
const Num=document.getElementById("Num");
const Sym=document.getElementById("Sym");


function gen(){
	let str="";
	if(Up.checked){
		str+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	}
	if(Low.checked){
		str+="abcdefghijklmnopqrstuvwxyz"
	}
	if(Num.checked){
		str+="1234567890"
	}
	if(Sym.checked){
		str+="!@#$%^&*()"
	}
	if(Len.value<1 || str==""){
	out.innerHTML="Input Wrong"
	}else{
		out.innerHTML="";
		for(let i=1; i<=Len.value;i++)
			out.innerHTML+=str[Math.floor(Math.random() *str.length+1)]
	}
}

Low.checked=true;
gen()
