
var pass = document.getElementById("pass"),
	link = document.getElementById("link"), 
	seePass = document.getElementById("seePass"),
	showPass = document.getElementById("showPass");

seePass.addEventListener("click", function(){
	showPass.className = "none";
});

link.addEventListener("click", preventEvent); 

function preventEvent(event){
	event.preventDefault();
};


pass.addEventListener("change", confirmPass);

function confirmPass(){
	if(pass.value == 777890){
		link.innerHTML = "You can follow the link";
		link.removeEventListener("click", preventEvent);
	}else{
		alert("Password incorrect");
	}
};

// -------------------- Task 2 ----------------------

var boxes = document.getElementsByClassName("color");

function changeColor(e){
	e.target.style.backgroundColor = "green";
}

for (var i = 0; i < boxes.length; i++) {
	boxes[i].onclick = changeColor;
}

// ------------------ Task 3 -------------------------

var friendsForm = document.forms[0];
var addressForm = document.forms[1];

friendsForm.elements[0].value = "Kostiantyn";
friendsForm.elements[1].value = "Viktoria";

addressForm.city.value = "Ivano-Frankivsk"; 
addressForm.street.value = "Franka str";

//--------------- Task 4 -----------------------------

var wrapper = document.getElementById("wrapper"),
	box = document.getElementById("box");

wrapper.addEventListener("mouseover", boxRun);

function boxRun (event){ 
	var startX = event.clientX;
	var startY = event.clientY;
	console.log(startX + " " + startY);
	wrapper.style.left = (startX + 10) + "px";
	wrapper.style.top = (startY + 10) + "px";
}


// --------------------Modal window ------------------

var overlay = document.getElementById("overlay"),
	showModalBtn = document.getElementById("show"),
	modal = document.getElementById("modal");


showModalBtn.addEventListener("click", openModal);

function openModal(){
	overlay.className = "cover";
	modal.className = "opened-modal";
}

overlay.addEventListener("click", function(){
	overlay.className = "none";
	modal.className = "hidden-modal";
});
