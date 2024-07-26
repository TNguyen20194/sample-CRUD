var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	let span = document.createElement('span');
	span.innerHTML = 'Delete'
	// span.appendChild(document.createTextNode("Delete"));
	li.appendChild(document.createTextNode(input.value));
	span.classList.add('span')
	li.appendChild(span);
	ul.appendChild(li);

	li.addEventListener('click', handleClick)
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function handleClick(e) {
	if(e.target.tagName !== 'SPAN') {
		toggleDone(e.target)
	} else {
		deleteItem(e.target.parentElement)
	}
}

function toggleDone(item) {
	item.classList.toggle('done')
}

function deleteItem(item) {
	item.remove()
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);