// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/

window.localStorage.clear();

let namesArray = [];
let plansArray = [];
let list = [];

function addItem(name, plan){
	let li = document.createElement("li");
	let h1 = document.createElement("h1");
	let p = document.createElement("p");
	let h1Content = document.createTextNode(name);
	let pContent = document.createTextNode(plan);
	h1.appendChild(h1Content);
	p.appendChild(pContent);
	li.appendChild(h1);
	li.appendChild(p);
	list.push(li);
	document.querySelector(".list").appendChild(li);
	for (let i = 0; i < list.length; i++){
	    (function(index){
	        list[i].onclick = function(){
	            document.querySelector(".modal-content").innerText = "";
	            let div = document.createElement("div");
	            let text = document.createTextNode(list[i].innerHTML);
	            div.appendChild(text);
				document.querySelector(".modal-content").innerHTML = div.innerText;
	  			document.querySelector(".modal").style.display = "block";
	  			console.log(list);
    		}
		})(i);
	}
}

document.querySelector(".add").addEventListener("click", () => {
	document.querySelector(".modal-content").innerText = "";
	document.querySelector(".modal-content").innerHTML = '<h2>Creation of a new plan</h2><p>Your idea:</p><input type="text" name="test" class="name" placeholder="Enter idea"></input><p>Description of your plan to take over the world:</p><textarea type="text" name="plan" class="plan" placeholder="Enter Plan"></textarea><button class="submit">Submit</button>';
	document.querySelector(".modal").style.display = "block";

	document.querySelector(".submit").addEventListener("click", () => {
		plansArray.push(document.querySelector(".plan").value);
		window.localStorage.setItem('plans', JSON.stringify(plansArray));
		namesArray.push(document.querySelector(".name").value);
		window.localStorage.setItem('names', JSON.stringify(namesArray))
		addItem(document.querySelector(".name").value, document.querySelector(".plan").value);
		document.querySelector(".modal").style.display = "none";
	});
});

window.onclick = function(event){
 		if (event.target == document.querySelector(".modal")){
   			document.querySelector(".modal").style.display = "none";
  		}
	}
/*
for (let i = 0; i < list.length; i++){
    (function(index){
        list[i].onclick = function(){
            document.querySelector(".modal-content").innerText = "";
			document.querySelector(".modal-content").innerHTML = list[i];
  			document.querySelector(".modal").style.display = "block";
  			console.log(list);
    	}
	})(i);
}
*/
