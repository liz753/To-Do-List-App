var button = document.getElementById("add");
var input = document.getElementById("userinput");
var ul = document.getElementById("taskList");
var tasks = JSON.parse(localStorage.getItem("savedTasks"));
if(tasks == null) {
	tasks = [
		{title: "Answer emails", completed: false},
		{title: "Do yoga for 30 minutes", completed: false},
		{title: "Cook dinner", completed: false},
	];
}

function inputLength() {
	return input.value.length;
}

function createListElement() {

	let inputValue = input.value;

	var li = document.createElement("li");
	var taskText = document.createElement("span");
	taskText.classList.add("task");
	taskText.appendChild(document.createTextNode(input.value));
	li.appendChild(taskText);

	var actions = document.createElement("span");
	actions.classList.add("actions");

	var checkBtn = document.createElement("button");
	checkBtn.innerHTML = "&#x2713;";//checkmark symbol
	checkBtn.addEventListener("click", function() {
		li.classList.toggle("completed");
		let index = tasks.map(function(x) { return x.title }).indexOf(inputValue);
		tasks[index].completed = !tasks[index].completed;
		localStorage.setItem("savedTasks", JSON.stringify(tasks));
	});

	var deleteBtn = document.createElement("button");
	deleteBtn.innerHTML = "&#x2212;";//cross symbol
	deleteBtn.addEventListener("click", function() {
		li.remove();
		let index = tasks.map(function(x) { return x.title }).indexOf(inputValue);
		tasks.splice(index, 1);
		localStorage.setItem("savedTasks", JSON.stringify(tasks));
	});

	actions.appendChild(checkBtn);
	actions.appendChild(deleteBtn);
	li.appendChild(actions);

	ul.appendChild(li);
	
	tasks.push({title: input.value, completed: false});

	localStorage.setItem("savedTasks", JSON.stringify(tasks));

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
	var li = document.createElement("li");
	var taskText = document.createElement("span");
	taskText.classList.add("task");
	taskText.appendChild(document.createTextNode(task.title));
	li.appendChild(taskText);

	if(task.completed)
		li.classList.add("completed");

	var actions = document.createElement("span");
	actions.classList.add("actions");

	var checkBtn = document.createElement("button");
	checkBtn.innerHTML = "&#x2713;";//checkmark symbol
	checkBtn.addEventListener("click", function() {
		li.classList.toggle("completed");
		task.completed = !task.completed;
		localStorage.setItem("savedTasks", JSON.stringify(tasks));
	});

	var deleteBtn = document.createElement("button");
	deleteBtn.innerHTML = "&#x2212;";//cross symbol
	deleteBtn.addEventListener("click", function() {
		li.remove();
		let index = tasks.map(function(x) { return x.title }).indexOf(task.title);
		tasks.splice(index, 1);
		localStorage.setItem("savedTasks", JSON.stringify(tasks));
	});

	actions.appendChild(checkBtn);
	actions.appendChild(deleteBtn);
	li.appendChild(actions);

	ul.appendChild(li);
	input.value = "";
});

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);