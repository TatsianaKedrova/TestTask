//VARIABLES
const button = document.querySelector("#searchButton");
const inputField = document.querySelector("#search");
const deleteBtn = document.querySelector("#clear");

//METHODS

function inputFieldAlert () {
	const inputFieldValue = inputField.value;
	if (inputFieldValue === "") {
		button.disabled = true;
	} else if (inputFieldValue === "google") {
		alert("Yandex круче. Но это не точно");
	} else if (inputFieldValue === "name") {
		alert(citizens[0].name);
	} else {
		alert(inputFieldValue);
	}
	clearInputField();
}


const clearInputField = () => {
	inputField.value = "";
	deleteBtn.style.display = "none";
};

//EVENT LISTENERS
inputField.addEventListener("input", () => {
	if (inputField.value === "") {
		deleteBtn.style.display = "none";
	} else {
		deleteBtn.style.display = "inline-block";
	}
});

deleteBtn.addEventListener("click", clearInputField);

button.addEventListener("click", ()=> {
    setTimeout(inputFieldAlert, 3000);
});

inputField.addEventListener("keypress", (e) => {
	if (e.key === "Enter") {
		event.preventDefault();
		setTimeout(inputFieldAlert, 3000);
	}
});

//TASK 5 - CREATE ARRAY OF OBJECTS
//Свойство name первого обьекта будет выводиться в alert()
//при вводе слова "name" и нажатии на кнопку "Найти"
let citizens = [
	{
		name: "Sherif",
		age: 46,
	},

	{
		name: "Tania",
		age: 32,
	},
	{
		name: "Sveta",
		age: 63,
	},

	{
		name: "Vladimir",
		age: 63,
	},
];

//TASK 6 - superSum() function that shows in alert sum of 2 numbers
function superSum(number1, number2) {
	return alert(number1 + number2);
}

//TASK 7 - FIND MAXIMUM AND MINIMUM NUMBER OF ARRAY WITH FOR LOOP
let num = Array.from({ length: 10 }, () => Math.floor(Math.random() * 25));
console.log(num);
let maxValue = -Infinity;
let minValue = Infinity;
for (let i = 0; i < num.length; i++) {
	if (num[i] > maxValue) {
		maxValue = num[i];
	}
}
for (let i = 0; i < num.length; i++) {
	if (num[i] < minValue) {
		minValue = num[i];
	}
}
console.log(maxValue);
console.log(minValue);

//TASK 8
//We use here DESCTRUCTURING ASSIGNMENT
let a = 123;
let b = 462;
console.log(`${a} ${b}`);

[a, b] = [b, a];
console.log(`${a} ${b}`);

//Task 9
//Create a function that will take any array as a parameter and will return the max value 
const findMax = (arr) => {
    console.log(Math.max(...arr));
};

//Task 10
//implemented setTimeOut function, see above in the code ))
  

