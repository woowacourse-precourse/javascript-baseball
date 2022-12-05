const Judgement = require('../Judgement');

describe('(model) Judgement.js모듈 테스트', () => {
	test('isAllStrike-1 (3B)', () => {
		const judgement = new Judgement(3, 0);
    expect(judgement.isAllStrike()).toEqual(false);
  });
	test('isAllStrike-2 (2B1S)', () => {
    const judgement = new Judgement(2, 1);
    expect(judgement.isAllStrike()).toEqual(false);
  });
	test('isAllStrike-3 (0B0S)', () => {
    const judgement = new Judgement(0, 0);
    expect(judgement.isAllStrike()).toEqual(false);
  });
	test('isAllStrike-4 (0B3S)', () => {
    const judgement = new Judgement(0, 3);
    expect(judgement.isAllStrike()).toEqual(true);
  });
	test('toString-1 (3B0S)', () => {
    const judgement = new Judgement(3, 0);
    expect(judgement.toString()).toEqual("3볼");
  });
	test('toString-2 (2B1S)', () => {
    const judgement = new Judgement(2, 1);
    expect(judgement.toString()).toEqual("2볼 1스트라이크");
  });
	test('toString-3 (0B3S)', () => {
    const judgement = new Judgement(0, 3);
    expect(judgement.toString()).toEqual("3스트라이크");
  });
	test('toString-4 (0B0S)', () => {
    const judgement = new Judgement(0, 0);
    expect(judgement.toString()).toEqual("낫싱");
  });
});

