const {ComputerRandomNumber, BaseballPlayTool} = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

const computer = new ComputerRandomNumber();
const number = computer.randomNumber();

const playTool = new BaseballPlayTool();

describe("기능별 테스트", () => {
  test('컴퓨터 랜덤번호가 숫자로 들어오고 중복없이 들어오는지', () => {
    expect(Number.isNaN(Number(number)) && new Set(number).size).toEqual(3);
  });
  
  test('볼카운터와 스트라이크카운터가 잘 동작되는지', () => {
    const numberArr = [[1,2,3],[2,1,3]];
    const ballScore = playTool.ballCount(numberArr[0], numberArr[1]);
    const strikeScore = playTool.strikeCount(numberArr[0], numberArr[1]);

    expect(ballScore).toEqual(2);
    expect(strikeScore).toEqual(1);
  });
});

MissionUtils.Console.close();