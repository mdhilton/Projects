function add(){
	but=document.createElement("button")
	but.innerHTML=document.getElementById("input").value
	but.setAttribute("onclick", "check(this)");
	document.getElementById("listhold").appendChild(but)
}

function check(but){
	but.classList.toggle("cros");
}


function hidechecked(){
	if(document.getElementById("onlyUnchecked").checked){
		hideunchecked()
		for(x of document.getElementById("listhold").children){
			if(x.classList=="cros"){
				x.style.display = "none";
			}
		}
	}else{
		for(x of document.getElementById("listhold").children){
			if(x.classList=="cros"){
				x.style.display = "block";
			}

		}
	}
}

function hideunchecked(){
	if(document.getElementById("onlyChecked").checked){
		hidechecked()
		for(x of document.getElementById("listhold").children){
			if(!x.classList.contains("cros")){
				x.style.display = "none";
			}
		}
	}else{
		for(x of document.getElementById("listhold").children){
			if(!x.classList.contains("cros")){
				x.style.display = "block";
			}

		}
	}
}

function showall(){
	for(x of document.getElementById("listhold").children)
		x.style.display="block";
}
