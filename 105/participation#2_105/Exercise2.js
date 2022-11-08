//Exercise #2
function fib(end){
	let n1=0
	let n2=1
	for(let i=0;i<end;i++){
		let n3=n2
		n2+=n1
		n1=n3
	}
	return(n1)
}

function Nums1(n){
	return (Nums2(n)*(n+2)/2);
}

function Nums2(end){
	let n=1;
	for(let i=1;i<=end;i++){
		n=n*i
	}
	return n;
}

function HCF(a,b){
	let ret=0;
	for(let i=1;i<=a||i<=b;i++)
		if(a%i == 0 && b%i == 0)
			ret=i;
	return ret
}

function LCM(a,b){
	let big=Math.max(a,b)
	let small=Math.min(a,b)
	let lcm=big
	while(lcm%small!=0)
		lcm += big;
	return lcm
}