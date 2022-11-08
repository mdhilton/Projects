//page #2
//mark hilton
function NumMax(...arr){
	let ret=arr.sort(function(a,b){return b-a;})
	return ret[0]
}

function Reverce(){
	let num=Number(prompt("Input num"));
	let addneg=false;
	let ret="";
	if(num<0){
		num=num*-1;
		addneg=true;
		num=num.toString();
		num=num.slice(0);
	}else{
		num=num.toString();
	}
	if(addneg){
		num+="-";
	}

	for(let i=num.length-1;i>=0;i--){
		ret+=num[i];
	}
	console.log(ret.toString());
	
}

function Upcase(str){
	let ret=""
	for(let i=0;i<str.length;i++){
		if(str[i]>="a"&&str[i]<="z"){
			ret+= String.fromCharCode(str.charCodeAt(i) - 32);
		}else{
			ret+=str[i];
		}
	}
	return ret;
}

function CaseInvert(str){
	let ret=""
	for(let i=0;i<str.length;i++){
		if(str[i]<"a"){
			ret+=str[i].toLowerCase();
		}else{
			ret+=str[i].toUpperCase();
		}
	}
	return ret;
}
 