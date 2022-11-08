//Exercise #3

//note:
let width = parseInt(prompt("width"));
let height = parseInt(prompt("height"));
let out = "";

for (let i=0; i<height; i++){
	for (let j=0; j<width;j++){
		if (i%2==0){
			if (j%2==0){
				out=out+"#"
			}else{
				out=out+" ";
			}
		}else{
			if(j%2==0){
				out=out+" ";
			}else{
				out=out+"#";
			}
		}
	}
	out=out+"\n";
}
console.log(out);