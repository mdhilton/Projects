const form=document.getElementById("quest");
const labels=document.getElementsByTagName("label");
const rad=document.getElementsByName("answer");

let count=0;
let score=0;
const answers=[
	["what is 2+2",0,"4","2","1","6"],
	["what is 4+4",2,"0","1","8","11"],
	["what is 8/2",2,"0","4.00002",8/2,"12"],
	["what is 2/2",1,"15.223",2/2,"blurpal","4"],
	["what is 2.3+.1",3,"0","12","11","2.4"],
	["END"]
];

function draw(){
	if(answers[count][0]=="END"){
		end();
		return;
	}
	document.getElementById("q").innerHTML=answers[count][0];
	for(let i=0; i<labels.length;i++){
		labels[i].innerHTML=answers[count][i+2];
	}

}

function sub(){

	if(rad[answers[count][1]].checked){
	score+=1;
	}else{
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
	document.getElementById("q").innerHTML="Test Over";
	labels[0].innerHTML="Score";
	labels[1].innerHTML=score+"/"+(answers.length-1);
	let but=document.createElement("button");
	but.innerText="restart";
	but.setAttribute("onclick", "location.reload();");
	form.appendChild(but)
}
form.submit(function(){return false;})

draw();
