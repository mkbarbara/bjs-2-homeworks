"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - 4 * a * c;
	if (d === 0) {
		arr.push(-b / (2 * a));
	} else if (d > 0) {
		arr.push((-b + Math.sqrt(d)) / (2 * a));
		arr.push((-b - Math.sqrt(d)) / (2 * a));
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	if (typeof percent === 'string') {
		percent = Number(percent);
		if (isNaN(percent)) return false;
	}

	if (typeof contribution === 'string') {
		contribution = Number(contribution);
		if (isNaN(contribution)) return false;
	}

	if (typeof amount === 'string') {
		amount = Number(amount);
		if (isNaN(amount)) return false;
	}

	if (typeof countMonths === 'string') {
		countMonths = Number(countMonths);
		if (isNaN(countMonths)) return false;
	}

	let newPercent = percent / 100 / 12;
	let body = amount - contribution;
	let pay = body * (newPercent + (newPercent / (((1 + newPercent) ** countMonths) - 1)));
	return Number((pay * countMonths).toFixed(2));
}
