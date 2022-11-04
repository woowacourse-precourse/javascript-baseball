const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe("야구 게임 테스트", () => {
  test("시작 메세지 출력", () => {
    const logSpy = jest.spyOn(console, 'log');
    logSpy.mockClear();

    const app = new App();
    app.startGame();

    expect(logSpy).toHaveBeenCalledWith('숫자 야구 게임을 시작합니다.');
  });

  test("컴퓨터 숫자 랜덤", () => {
    const number = [1, 2, 3];
    
    mockRandoms(number);

    const app = new App();
    const result = app.selectComputer(); 

    expect(result).toEqual("123");
  });
});

