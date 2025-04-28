"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	const d = b ** 2 - 4 * a * c;
	if (d < 0) {
		arr = [];
	} else if (d === 0) {
		const x = -b / (2 * a);
		arr = [x];
	} else {
		const x1 = (-b + Math.sqrt(d)) / (2 * a);
		const x2 = (-b - Math.sqrt(d)) / (2 * a);
		arr = [x1, x2];
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	const p = (percent / 100) / 12;
	const s = amount - contribution;
	const n = countMonths;

	if (contribution >= amount) {
		return 0;
	}

	const monthlyPayment = s * (p + (p / ((1 + p) ** n - 1)));

	const totalAmount = monthlyPayment * n;
	return Number(totalAmount.toFixed(2));
}