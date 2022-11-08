//Exercise (not required) #2
function countBs(str){
	let ret=0;
	for(i=0;i<str.length;i++){
		if(str[i]=="B"){
			ret=ret+1
		}
	}
		
	return ret;
}

function countChar(str,char){
	let ret=0;
	for(i=0;i<str.length;i++){
		if(str[i]==char){
			ret=ret+1
		}
	}
		
	return ret;
}
console.log(countBs("Boo am Big Bad Goat"))
console.log(countChar("Hi im a frog","i"))