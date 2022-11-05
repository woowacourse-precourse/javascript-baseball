const { Console } = require('@woowacourse/mission-utils');

function isBall(computerNumbers, userNumber, index) {
	return computerNumbers[index] !== userNumber && computerNumbers.includes(userNumber);
}

function countBall(userNumbers, computerNumbers) {
	let ball = 0;
	userNumbers.forEach((number, index) => {
		ball += isBall(computerNumbers, number, index) ? 1 : 0;
	});
	return ball;
}

function isStrike(computerNumbers, userNumber, index) {
	return computerNumbers[index] === userNumber;
}

function countStrike(userNumbers, computerNumbers) {
	let strike = 0;
	userNumbers.forEach((number, index) => {
		strike += isStrike(computerNumbers, number, index) ? 1 : 0;
	});
	return strike;
}

function printBallCount(ball, strike) {
	if (ball !== 0 && strike !== 0) {
		Console.print(`${ball}볼 ${strike}스트라이크`);
		return;
	}
	if (ball !== 0) {
		Console.print(`${ball}볼`);
		return;
	}
	if (strike !== 0) {
		Console.print(`${strike}스트라이크`);
		return;
	}
	if (ball === 0 && strike === 0) {
		Console.print('낫싱');
	}
}

module.exports = { countBall, countStrike, printBallCount };
