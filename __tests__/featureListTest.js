const Game = require('../src/game');
const { RANDOM_NUMBER, MESSAGE } = require('../src/constants');
const MissionUtils = require('@woowacourse/mission-utils');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(console, 'log');
  logSpy.mockClear();
  return logSpy;
};

describe('기능 구현 목록 테스트', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  test('시작 문구 출력', () => {
    const logSpy = getLogSpy();

    game.start(MESSAGE.START);

    expect(logSpy).toHaveBeenCalledWith('숫자 야구 게임을 시작합니다.');
  });

  test('1에서 9까지 서로 다른 세자리 수 생성', () => {
    const random = game.generateRandomNumber(1, 9, 3);

    random.forEach((num) => {
      expect(RANDOM_NUMBER.RANGE.test(num)).toBe(true);
    });

    expect(random.length).toEqual(3);
    expect([...new Set(random)].length).toEqual(3);
  });

  test('사용자가 입력한 값이 유효하지 않을 때 에러처리', () => {
    const answers = ['012'];
    // 사용자 입력값 계속 받게 함수 수정 후 answers에 '2346', 'ab3', '123' 추가해서 테스트

    mockQuestions(answers);

    expect(() => game.play()).toThrow(
      '1부터 9까지 서로 다른 숫자 3개를 입력해주세요'
    );
  });

  test('랜덤 값과 사용자 입력한 값 비교', () => {
    const random = [2, 4, 6];
    const answers = [2, 6, 4];

    const { ball, strike } = game.countScore(answers, random);

    expect(ball).toEqual(2);
    expect(strike).toEqual(1);
  });
});
