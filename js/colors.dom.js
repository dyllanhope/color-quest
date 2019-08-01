const addBtn = document.querySelector(".addBtn");
const filterBtn = document.querySelector(".filterBtn");
const errorMessage = document.querySelector(".error");
const shapes = document.querySelector('.shapes');
const selectColour = document.querySelector('.selectColor');
const selectNumber = document.querySelector('.selectNumber');
const selectShape = document.querySelector('.selectShape');


const colourInstance = ColourQuestManager();

function clearError() {
	// setTimeout(function () {
	// 	errorMessage.innerHTML = "";
	// }, 2000);
}


addBtn.addEventListener("click", function () {
	// shapes.innerHTML = 'Add a shape here!';
	const colour = selectColour.value;
	const number = selectNumber.value;
	const shape = selectShape.value;

	if (colourInstance.check(colour, number, shape)) {
		colourInstance.add(colour, number, shape);
		buildShape(colourInstance.list());
	};

	errorMessage.innerHTML = "Add!"
	clearError();


	// alert("add!")
});

filterBtn.addEventListener("click", function () {

	buildShape(colourInstance.filter(selectColour.value, selectNumber.value, selectShape.value));
	errorMessage.innerHTML = "Filter!"
	clearError();
});

function buildShape(list) {
	shapes.innerHTML = '';

	for (var x = 0; x < list.length; x++) {
		const newShape = document.createElement('div');
		newShape.classList.add('shape');
		if (list[x].shape === 'triangle') {
			newShape.classList.add('triangle');
			newShape.classList.add(list[x].colour + '-triangle');
		} else {
			newShape.classList.add(list[x].shape);
		}
		newShape.classList.add(list[x].colour);
		const shapeNum = document.createElement('div');
		shapeNum.classList.add('number');
		shapeNum.innerHTML = list[x].number;
		newShape.appendChild(shapeNum);


		shapes.appendChild(newShape);
	}
};


