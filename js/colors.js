function ColourQuestManager() {
	var elementsList = [];

	const check = (colour, number, shape) => {
		if (colour && number && shape) {
			return true;
		} else {
			return false;
		};
	};

	const add = (colour, number, shape) => {
		var count = elementsList.length;
		if (count > 0) {
			if (!find(colour, number, shape)) {
				elementsList.push({ 'colour': colour, 'number': number, 'shape': shape });
			};
		} else {
			elementsList.push({ 'colour': colour, 'number': number, 'shape': shape });
		};

	};

	const find = (colour, number, shape) => {
		for (var x = 0; x < elementsList.length; x++) {
			if (colour === elementsList[x].colour && number === elementsList[x].number && shape === elementsList[x].shape) {
				return true;
			};
		};
		return false;
	};

	const list = () => {
		return elementsList;
	};

	const filter = (colour, number, shape) => {
		if (!colour  && !number && !shape) {
			return elementsList;
		}
		let filteredList = filterType(colour, number, shape);

		return filteredList;
	};

	const filterType = (colour, number, shape) => {
		let filteredList = [];
		if (colour && number && shape) {
			for (var i = 0; i < elementsList.length; i++) {
				if (colour === elementsList[i].colour && number === elementsList[i].number && shape === elementsList[i].shape) {
					filteredList.push(elementsList[i]);
				};
			};
		} else if (colour && number) {
			for (var i = 0; i < elementsList.length; i++) {
				if (colour === elementsList[i].colour && number === elementsList[i].number) {
					filteredList.push(elementsList[i]);
				};
			};
		} else if (colour && shape) {
			for (var i = 0; i < elementsList.length; i++) {
				if (colour === elementsList[i].colour && shape === elementsList[i].shape) {
					filteredList.push(elementsList[i]);
				};
			};
		} else if (number && shape) {
			for (var i = 0; i < elementsList.length; i++) {
				if (number === elementsList[i].number && shape === elementsList[i].shape) {
					filteredList.push(elementsList[i]);
				};
			};
		} else {
			let test = '';
			let type = '';
			if (colour) {
				test = colour;
				type = 'colour';
			} else if (number) {
				test = number;
				type = 'number';
			} else {
				test = shape;
				type = 'shape';
			};
			for (var i = 0; i < elementsList.length; i++) {
				if (test === elementsList[i][type]) {
					filteredList.push(elementsList[i]);
				};
			};
		};

		return filteredList;
	};

	return {
		check,
		add,
		list,
		filter
	}
}