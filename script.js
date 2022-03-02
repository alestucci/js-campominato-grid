const difficulty = document.getElementById("difficulty").value;
console.log(difficulty);

const field = document.querySelector(".field");
console.log(field);
let squares;

switch (difficulty) {
	case "easy":
		squares = 49;
		field.classList.add("field-49");
		break;
	case "medium":
		squares = 81;
		field.classList.add("field-81");
		break;
	case "hard":
		squares = 100;
		field.classList.add("field-100");
		break;
}

console.log(squares);

for (let index = 1; index <= squares; index++) {
	let box = document.createElement("div");
	box.classList.add("square");
	box.innerHTML = index;
	field.append(box);
}