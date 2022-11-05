const App = require('../src/App');
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

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
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

    game.init();

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

  test('유효하지 않은 값이 들어 왔을 때 에러처리', () => {
    const numbers = '1230';

    expect(() => {
      game.isValidInputNumber(numbers, RANDOM_NUMBER.RANGE);
    }).toThrow('1부터 9까지 서로 다른 숫자 3개를 입력해주세요');
  });

  test('랜덤 값과 사용자 입력한 값 비교', () => {
    const random = [2, 4, 6];
    const answers = [2, 6, 4];

    const { ball, strike } = game.countScore(answers, random);

    expect(ball).toEqual(2);
    expect(strike).toEqual(1);
  });

  test('볼, 스트라이크 점수 결과 출력', () => {
    const logSpy = getLogSpy();

    game.printScore(1, 2);
    expect(logSpy).toHaveBeenCalledWith('1볼 2스트라이크');

    game.printScore(3, 0);
    expect(logSpy).toHaveBeenCalledWith('3볼');

    game.printScore(0, 0);
    expect(logSpy).toHaveBeenCalledWith('낫싱');

    game.printScore(0, 2);
    expect(logSpy).toHaveBeenCalledWith('2스트라이크');
  });

  test('3스트라이크가 아닐 때 playRound 함수 반복', () => {
    const randoms = [1, 3, 5];
    const answers = ['246', '153', '351', '135'];
    const logSpy = getLogSpy();
    const messages = ['낫싱', '2볼 1스트라이크', '3볼', '3스트라이크'];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
