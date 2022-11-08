const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe("숫자 야구 게임 테스트", () => {
  test("컴퓨터 랜덤 숫자 테스트 ", () => {
    const app = new App();
    const randoms = [1, 2, 3];

    mockRandoms(randoms);

    const answer = app.generateRandomNumber();
    expect(answer).toEqual("123");
  });
});
