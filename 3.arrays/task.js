function compareArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}

	const result = arr1.every((element, index) => element === arr2[index]);

	return result;
}

function getUsersNamesInAgeRange(users, gender) {
	let result = users.filter(user => user.gender === gender)
		.map(user => user.age)
		.reduce((acc, age, _index, array) => acc + age / array.length, 0);

	return result;
}
