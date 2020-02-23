var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");
var checkbox = document.getElementsByClassName("checkbox");


//Date setup on each page load
let n = new Date();
let y = n.getFullYear();
let m = n.getMonth()+1;
let d = n.getDate();
document.querySelector("h1").innerHTML = "Check-list for " + d + "." + m + "." + y; 



function inputLength() {
	return input.value.length;
}

// Create list element, with P tag, checkbox and delete button; initialise event listeners on each
function createListElement() {
	var li = document.createElement("li");

	let div = document.createElement("div");
	div.setAttribute("role", "checkbox");
	div.setAttribute("aria-checked", "false");
	div.setAttribute("tabindex", "0");
	div.setAttribute("class", "checkbox");
	li.appendChild(div);
	div.onclick = toggleCheckBox;
	
	let p = document.createElement("p");
	p.setAttribute("contenteditable", "true");
	p.appendChild(document.createTextNode(input.value));
	li.appendChild(p);

	input.value = "";

	ul.appendChild(li);
	
	let close = document.createElement("span");
	close.classList.add("close");
	close.setAttribute("contenteditable", "false");
	close.appendChild(document.createTextNode("X"));
	li.appendChild(close);
	close.onclick = removeParent;
}

// Add li after click
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

// Add li after keypress
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// Remove parent function
function removeParent (evt) {
	evt.target.parentNode.remove();
}

//Toggle checkbox and strikethrough for text
function toggleCheckBox (evt){
	let target = evt.target;
	let targetSet = (value) => target.setAttribute("aria-checked", value);
	toggled = (target.getAttribute("aria-checked") === "true") ? targetSet(false) : targetSet(true);
	target.parentNode.querySelector("p").classList.toggle("done");
}

// Event listener for entering text
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

// Event listener to call strikethrough function.
checkbox.onclick = toggleCheckBox;

