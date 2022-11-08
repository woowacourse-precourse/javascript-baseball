function checkDuplicates(num) {
	let isDuplicate = false;

	[...String(num)].map((char, idx) => {
		if (
			String(num)
				.slice(idx + 1)
				.includes(char)
		) {
			isDuplicate = true;
		}
	});

	return isDuplicate;
}

function checkValidity(num) {
	if (isNaN(Number(num))) {
		throw new Error(TYPE_CHECK);
	}
	if (num.length !== 3) {
		throw new Error(LENGTH_CHECK);
	}
	if (checkDuplicates(num)) {
		throw new Error(DUPLICATE_CHECK);
	}
}

module.exports = { checkValidity };
