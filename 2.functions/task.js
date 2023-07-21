function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}
	}

	let avg = sum / arr.length;
	avg = Number(avg.toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	};

	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	return sum;
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	};

	let min = Infinity;
	let max = -Infinity;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}
	}

	let difference = max - min;

	return difference;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	};

	let sumEven = 0;
	let sumOdd = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 1) {
			sumOdd += arr[i];
		} else {
			sumEven += arr[i];
		}
	}

	let difference = sumEven - sumOdd;
	return difference;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	};

	let sumEven = 0;
	let countEven = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEven += arr[i];
			countEven += 1;
		}
	}

	let avg = sumEven / countEven;
	return avg;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		if (func(...arrOfArr[i]) > maxWorkerResult) {
			maxWorkerResult = func(...arrOfArr[i]);
		}
	}

	return maxWorkerResult;
}
