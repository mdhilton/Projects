/*
 * Mark Hilton
 * Week 2 Assignment 2
 */

let score=[0,0]
function rpc(call){
	let bot=Math.floor(Math.random() * 3);
	let res=[0,-1,1];
	for(let i=0;i<call;i++){
		res.push(res.shift());
	}

	let name=["rock","Paper","Scissors",]

	var node = document.createElement('li');
	node.appendChild(document.createTextNode("You - "+name[call]+", Computer - "+name[bot]));
	document.querySelector('ol').appendChild(node);


	switch(res[bot]){
		case(1):
			score[0]+=1;
			break;
		case(-1):
			score[1]+=1;
			break;
	}

	document.getElementById("score").innerHTML="Score:You - "+score[0]+", Computer - "+score[1];
}
