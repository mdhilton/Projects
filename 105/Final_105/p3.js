const form=document.getElementById("quest");
const labels=document.getElementsByTagName("label");
const rad=document.getElementsByName("answer");

let count=0;
let score=0;
const answers=[
	{
		Q:"what is 2+2",
		V:5,
		I:0,
		A:["4","2","1","6"]
	},
	{
		Q:"what is 4+4",
		V:10,
		I:2,
		A:["0","1","8","11"]
	},
	{
		Q:"what is 8/2",
		V:5,
		I:2,
		A:["0","4.00002",8/2,"12"]
	},
	{
		Q:"what is 2/2",
		V:2,
		I:1,
		A:["15.223",2/2,"blurpal","4"]
	},
	{
		Q:"what is 2.3+.1",
		V:12,
		I:3,
		A:["0","12","11","2.4"]
	},
	"END"
];


function draw(){
	if(answers[count]=="END"){
		end();
		return;
	}
	document.getElementById("q").innerHTML=answers[count].Q;
	for(let i=0; i<labels.length;i++){
		labels[i].innerHTML=answers[count].A[i];
		rad[i].disabled=false;
	}

}

function sub(){

	if(rad[answers[count].I].checked){
	score+=answers[count].V;
	}else{
		answers[count+1]="END"
	}

	count++;
	form.reset();	
	draw();
}

function end(){
	for(x of form.children){
		x.style.display="none";
	}
	for(x of labels){
		x.style.display="block";
		x.innerHTML=""
	}
	document.getElementById("q").innerHTML="Game Over";
	labels[0].innerHTML="Prize";
	labels[1].innerHTML="$"+score;
	let but=document.createElement("button");
	but.innerText="restart";
	but.setAttribute("onclick", "location.reload();");
	form.appendChild(but)
}

function pers(butt,num){
	if(0==Math.floor(Math.random()*num)){
		butt.innerHTML=answers[count].A[answers[count].I]
	}else{
		butt.innerHTML=answers[count].A[Math.floor(Math.random()*3)]
	}
	butt.disabled=true;
}

function fifty(butt){
	butt.disabled=true;
	let i=0;
	while(i<2){
		let ran=Math.floor(Math.random()*4)
		if(ran!==answers[count].I && !rad[ran].disabled){
			rad[ran].disabled=true;
			i++
		}
	}
}

form.submit(function(){return false;})

draw();
