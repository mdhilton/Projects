//Exercise #5

//call functions
//1-50
PrintArray(Range(1,50));
//<25
PrintArray(Range(0,25));
//odd < 25
PrintArray(EvenFilter(Range(0,25)));
//Divisable by 3
PrintArray(Multiples(3,25));
//multiples of 5
PrintArray(Multiples(5,50));
//Multiples of 2 or 3
PrintArray(DupeFilter(Multiples(2,50),Multiples(3,50)));
//Multiples of 2 and 3 not 12
PrintArray(DupeFilter(Multiples(12,100),NonDupeFilter(Multiples(3,100),(Multiples(2,100)))));

//generate all numbers in a range
function Range(Min,Max){
	let ret=[]
	for(let i=Min;i<=Max;i++)
		ret.push(i);
	return ret;
}

//generate an array of multiples
function Multiples(Num,Max){
	let ret=[]
	for(let i=Num;i<=Max;i+=Num)
		ret.push(i);
	return ret;
	
}

//remove even numbers from an array
function EvenFilter(arr){
	let ret=[]
	for(let i=0;i<arr.length;i++)
		if(arr[i]%2!==0)
			ret.push(arr[i]);
	return ret;
}

//remove repeated numbers from 2 arrays
function DupeFilter(arr1,arr2){
	//build array
	let tmp=arr1
	let ret=[]
	for(let i=0;i<arr2.length;i++)
		tmp.push(arr2[i]);
	//clean array
	tmp.sort((a,b)=> a-b)
	for(let i=0;i<tmp.length-1;i++){
		if(tmp[i+1]===tmp[i]){
			tmp[i]=null;
			tmp[i+1]=null;
		} else if(tmp[i]!==null)
			ret.push(tmp[i]);
	}
	return ret;
}

//remove non duplicated numbers
function NonDupeFilter(arr1,arr2){
	//build array
	let tmp=arr1
	let ret=[]
	for(let i=0;i<arr2.length;i++)
		tmp.push(arr2[i]);
	//clean array
	tmp.sort((a,b)=> a-b)
	for(let i=0;i<tmp.length-1;i++){
		if(tmp[i+1]===tmp[i]){
			ret.push(tmp[i]);
		} 
	}
	return ret;
}

//output a given array
function PrintArray(arr){
	for (let i=arr.length-1; i>=0;i--){
		console.log(arr[i])
	}
}