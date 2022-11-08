const MissionUtils = require("@woowacourse/mission-utils");
const { RANDOM_NUMBER } = require("../src/constants");
const Game = require("../src/game");

const mockQuestions = (input) => {
  MissionUtils.Console.readLine = jest.fn();
  input.reduce((acc, input) => {
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

describe("기능 목록 테스트", () => {
  test("시작 후 메세지 출력", () => {
    const log = jest.spyOn(MissionUtils.Console, "print");
    log.mockClear();
    const game = new Game();
    game.go();
    expect(log).toHaveBeenCalledWith("숫자 야구 게임을 시작합니다.");
  });
  test("서로 다른 세자리 수 생성 및 1 ~ 9 숫자 확인", () => {
    const game = new Game();
    const randomNumber = game.createRandomNumber();
    expect(randomNumber.length).toEqual(3);
    randomNumber.forEach((number) => {
      expect(RANDOM_NUMBER.RANGE.test(number)).toBe(true);
    });
  });
  test("점수 출력 확인", () => {
    const game = new Game();
    const log = jest.spyOn(MissionUtils.Console, "print");
    log.mockClear();

    game.printScore(0, 0);
    expect(log).toHaveBeenCalledWith("낫싱");
    game.printScore(0, 2);
    expect(log).toHaveBeenCalledWith("2스트라이크");
    game.printScore(1, 0);
    expect(log).toHaveBeenCalledWith("1볼");
    game.printScore(2, 1);
    expect(log).toHaveBeenCalledWith("2볼 1스트라이크");
  });
  test("입력값과 정답 비교", () => {
    const game = new Game();

    const answer = [1, 2, 3];
    const input = [1, 5, 2];
    const { ball, strike } = game.countPitch(input, answer);
    expect(ball).toEqual(1);
    expect(strike).toEqual(1);
  });
  test("input 유효성 검사", () => {
    const game = new Game();

    const string = "bbq";
    const dupNumber = "999";
    const overRange = "099";
    const lengthCheck = "4444";

    expect(() => {
      game.isValidInput(string, RANDOM_NUMBER.RANGE);
    }).toThrow("1부터 9까지 서로 다른 숫자 3개를 입력해주세요");
    expect(() => {
      game.isValidInput(dupNumber, RANDOM_NUMBER.RANGE);
    }).toThrow("1부터 9까지 서로 다른 숫자 3개를 입력해주세요");
    expect(() => {
      game.isValidInput(overRange, RANDOM_NUMBER.RANGE);
    }).toThrow("1부터 9까지 서로 다른 숫자 3개를 입력해주세요");
    expect(() => {
      game.isValidInput(lengthCheck, RANDOM_NUMBER.RANGE);
    }).toThrow("1부터 9까지 서로 다른 숫자 3개를 입력해주세요");
  });

  test("종료 후 메세지 출력 확인", () => {
    const log = jest.spyOn(MissionUtils.Console, "print");
    log.mockClear();
    const game = new Game();
    const answer = [6, 7, 8];
    const input = ["678"];

    mockRandoms(answer);
    mockQuestions(input);

    game.play();

    expect(log).toHaveBeenCalledWith(
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
    );
  });
  test("재시작 입력 시 1, 2가 아닌 숫자 입력 확인", () => {
    const game = new Game();

    const answer = [7, 1, 2, 3, 6, 4];
    const input = ["621", "427", "5"];

    mockRandoms(answer);
    mockQuestions(input);

    expect(() => {
      game.play();
    }).toThrow();
  });

  /*
  종료 후 메세지 출력 확인
  게임 종료 후 숫자 입력 => 게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. 출력 확인
    -1, 2가 아닌 숫자 입력시 예외처리
        -1인 경우 재시작 확인
        -2인 경우 종료 확인 
        -1, 2가 아닌 경우 확인
  */
});
