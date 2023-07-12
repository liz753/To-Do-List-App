var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.getElementById("taskList");
var tasks = document.querySelectorAll("#taskList li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var taskText = document.createElement("span");
	taskText.classList.add("task");
	taskText.appendChild(document.createTextNode(input.value));
	li.appendChild(taskText);

	var actions = document.createElement("span");
	actions.classList.add("actions");

	var checkBtn = document.createElement("button");
	checkBtn.innerHTML = "Check";
	checkBtn.innerHTML = "&#x2713;";
	checkBtn.addEventListener("click", function() {
		li.classList.toggle("completed");
	});

	var deleteBtn = document.createElement("button");
	deleteBtn.innerHTML = "Delete";
	deleteBtn.innerHTML = "&#x2212;";
	deleteBtn.addEventListener("click", function() {
		li.remove();
	});

	actions.appendChild(checkBtn);
	actions.appendChild(deleteBtn);
	li.appendChild(actions);

	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

// Add buttons to existing tasks
tasks.forEach(function(task) {
	var actions = document.createElement("span");
	actions.classList.add("actions");

	var checkBtn = document.createElement("button");
	checkBtn.classList.add("check");
	checkBtn.innerHTML = "&#x2713;";
	checkBtn.addEventListener("click", function() {
		task.classList.toggle("completed");
	});

	var deleteBtn = document.createElement("button");
	deleteBtn.classList.add("delete");
	deleteBtn.innerHTML = "&#x2212;";
	deleteBtn.addEventListener("click", function() {
		task.remove();
	});

	actions.appendChild(checkBtn);
	actions.appendChild(deleteBtn);
	task.appendChild(actions);
});

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);