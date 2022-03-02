const difficulty = document.getElementById("difficulty").value;
console.log(difficulty);

let column;

switch (difficulty) {
	case 'easy':
		column = 7;
		break;
	case 'medium':
		column = 9;
		break;
	case 'hard':
		column = 10;
		break;
}

console.log(column);


