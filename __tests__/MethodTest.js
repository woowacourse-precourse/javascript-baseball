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

  test('게임룰에 따른 올바른 점수값이 나오는지', () => {
    const computer = [1,4,5];
    const user = ['236', '167', '157', '451', '145'];
    const messages = [
      '낫싱',
      '1스트라이크',
      '1볼 1스트라이크',
      '3볼',
      '3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료',
    ];

    messages.forEach((output, index) => {
      expect(playTool.gameRule(computer, user[index])).toEqual(output);
    });
  });

  test('유저번호 3자리가 안들어갈 경우 올바른 에러를 나타내주는지' , () => {
    expect(() => {
      playTool.userInputError('12');
    }).toThrow('3자리의 수를 입력해야합니다.');
  });

  test('유저번호 중복일경우 올바른 에러를 나타내주는지' , () => {
    expect(() => {
      playTool.userInputError('122');
    }).toThrow('중복된 수가 없는지 확인해야합니다.');
  });

  test('유저번호 0이 들어갈 경우 올바른 에러를 나타내주는지' , () => {
    expect(() => {
      playTool.userInputError('012');
    }).toThrow('1~9까지의 숫자만 입력해야합니다');
  });

  test('유저번호 숫자가 아닌값이 들어갈 경우 올바른 에러를 나타내주는지' , () => {
    expect(() => {
      playTool.userInputError(' 12');
    }).toThrow('숫자만 입력해야합니다.');
  });
});

MissionUtils.Console.close();