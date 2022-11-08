/*
 * Mark Hilton
 * Week 2 Assignment 2
 */
let butts=Array(10);
let startc=Array(10);
let cols=["red","green","blue"];
for(let i=0;i<butts.length;i++){
	butts[i]=document.createElement('button');
	startc[i]=cols[Math.floor(Math.random()*3)];
	document.getElementById("buttcon").appendChild(butts[i]);
	butts[i].style.backgroundColor=startc[i];
}

function Red(){
	for(x of butts)
		x.style.backgroundColor="red";
}

function Green(){
	for(x of butts)
		x.style.backgroundColor="green";
}

function Blue(){
	for(x of butts)
		x.style.backgroundColor="blue";
}

function Random(){
	for(x of butts)
		x.style.backgroundColor=cols[Math.floor(Math.random()*3)];
}

function Reset(){
	for(let i=0;i<butts.length;i++)
		butts[i].style.backgroundColor=startc[i];
}

function sel(){
	eval(document.getElementById("sel").value+"();");
}
