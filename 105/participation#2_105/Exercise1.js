//Exercise #1
function Min2(a,b){
	if(a>b)
		return a;
	else
		return b;
}

function Min3(a,b,c){
	return(Min2(a,Min2(b,c)));
}

function Min2or3(a=Infinity,b=Infinity,c=Infinity){
	return(Min2(a,Min2(b,c)));
}