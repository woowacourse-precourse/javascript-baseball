function isLengthValid(input) {
	return input.length === 3 ? true : false;
}

function hasOnlyNumbers(input) {
	return input.split('').reduce((acc, cur) => (acc &= !isNaN(cur)), true);
}

function hasDuplicatedNumber(input) {
	let set = new Set();
	input.split('').forEach(num => set.add(num));
	return set.size === 3 ? true : false;
}

function isNumberValid(numString) {
	let num = Number(numString);
	return num >= 1 && num <= 9 ? true : false;
}

function areNumbersValid(input) {
	return input.split('').reduce((acc, cur) => (acc &= isNumberValid(cur)), true);
}
function isInputValid(input) {
	return isLengthValid(input) && hasOnlyNumbers(input) && hasDuplicatedNumber(input) && areNumbersValid(input);
}

module.exports = isInputValid;
