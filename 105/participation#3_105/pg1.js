//page #1
//mark hilton

function checkin(inp){
	if(typeof(inp)=="object"&&inp!=null)
		return true
	else
		return false
}

function arr2str(arr){
	let ret=""
	for(let i=0;i<arr.length;i++)
		ret+=arr[i]
	return ret;
}

function evendash(arr){
	let ret=""
	for(let i=1;i<arr.length;i++){
		ret+=(arr[i-1])
		if(arr[i-1]%2==0&&arr[i]%2==0)
			ret+=("-")
	}
	ret+=arr[arr.length-1]
	return ret
}

function arrsort(arr){
	return arr.sort()
}

function sumsqr(arr){
	let ret=0;
	for(x of arr)
		ret+=Math.pow(x,2);
	return ret;
}

function sumnprod(arr){
	let ret=[0,1]
	for(x of arr)
		ret[0]+=x
	for(x of arr)
		ret[1]*=x
	return ret;
}

console.log(sumnprod([1,2,3,6,2]))