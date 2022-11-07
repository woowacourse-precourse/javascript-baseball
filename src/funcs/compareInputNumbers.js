function countStrike(answer, input) {
	let count = 0;

	for (let i = 0; i < 3; i++) {
		if (answer[i] === input[i]) count++;
	}
	return count;
}

function countBall(answer, input) {
	let count = 0;
	const arr = [];

	for (let i = 0; i < 11; i++) {
		arr.push(0);
	}

	for (let i = 0; i < 3; i++) {
		arr[answer[i]] = i + 1;
	}

	for (let i = 0; i < 3; i++) {
		if (arr[input[i]] && arr[input[i]] !== i + 1) count++;
	}
	return count;
}

function compareInputNumbers(answer, input) {
	let strike = countStrike(answer, input);
	let ball = countBall(answer, input);

	return { strike, ball };
}

module.exports = compareInputNumbers;
