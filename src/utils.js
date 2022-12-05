function isNumber(target) {
	return !(/[^0-9]/.test(target));
}

function isInRange(min, max, target) {
	return !(target < min || target > max);
}

function isDuplicate(target) {
	return target.length !== [...new Set(target)].length;
}

module.exports = {isNumber, isInRange, isDuplicate};
