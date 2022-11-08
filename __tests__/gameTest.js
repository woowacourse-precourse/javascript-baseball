const { RANDOM_NUMBER } = require("../src/constants");
const Game = require("../src/game");

describe("기능 목록 테스트", () => {
  test("시작 후 메세지 출력", () => {
    const log = jest.spyOn(console, "log");
    const game = new Game();
    game.init();
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
    const log = getLogSpy();

    game.printScore(0, 0);
    expect(log).toHaveBeenCalledWith("낫싱");
    game.printScore(0, 2);
    expect(log).toHaveBeenCalledWith("2볼");
    game.printScore(1, 0);
    expect(log).toHaveBeenCalledWith("1스트라이크");
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
});
