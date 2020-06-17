var container = document.getElementById("container");

var firstName : string = "Beniamin"
var lastName : string = "Hutyra";

container.innerHTML = `<h1>${firstName} ${lastName}</h1>`;

var nameArray : Array<string> = [];

for(let i=0; i< 10; i++){
	nameArray.push(firstName);
}

console.log(nameArray);

nameArray.forEach(function(name){
	container.innerHTML += `<h2>${name}<br></h2>`;
})

setTimeout(function(){
	for(let i=0; i< 10; i++){
		container.innerHTML += `<h3>${lastName}<br></h3>`;
	}
},5000);