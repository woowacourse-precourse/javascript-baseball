const MissionUtils = require('@woowacourse/mission-utils');
const Game = require('../Game');
const Referee = require('../Referee');
const Judgement = require('../Judgement');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('(model) Referee.js모듈 테스트', () => {
	mockRandoms([1, 3, 3, 1, 5]); //135
	const referee = new Referee();
	referee.chargeGame(new Game());
	test('judge(1) 1B1S', () => {
		const input = [1, 2, 3];
		const compare = "1볼 1스트라이크";
		expect(referee.judge(input) instanceof Judgement).toBeTruthy();
    expect(referee.judge(input).toString()).toEqual(compare);
  });
	test('judge(2) 3S', () => {
		const input = [1, 3, 5];
		const compare = "3스트라이크";
		expect(referee.judge(input) instanceof Judgement).toBeTruthy();
    expect(referee.judge(input).toString()).toEqual(compare);
  });
	test('judge(3) 1B0S', () => {
		const input = [7, 1, 9];
		const compare = "1볼";
		expect(referee.judge(input) instanceof Judgement).toBeTruthy();
    expect(referee.judge(input).toString()).toEqual(compare);
  });
	test('judge(4) 0B0S', () => {
		const input = [6, 7, 8];
		const compare = "낫싱";
		expect(referee.judge(input) instanceof Judgement).toBeTruthy();
    expect(referee.judge(input).toString()).toEqual(compare);
  });
	MissionUtils.Console.close();
});

