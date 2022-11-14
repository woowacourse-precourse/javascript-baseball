// 기능 테스트 파일

const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

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

const getPrintSpy = () => {
  const printSpy = jest.spyOn(MissionUtils.Console, "print");
  printSpy.mockClear();
  return printSpy;
};

describe("기능 단위 목록별 테스트", () => {
  test("기능1 게임 시작 문구 테스트 (showStartText 메소드)", () => {
    const printSpy = getPrintSpy();
    const app = new App();

    app.showStartText();
    expect(printSpy).toHaveBeenCalledWith("숫자 야구 게임을 시작합니다.");
  });

  test("기능2 random 숫자 생성 테스트 (setRandomDigit 메소드)", () => {
    const randoms = [1, 5, 5, 5, 8, 9];
    mockRandoms(randoms);
    const app = new App();

    expect(app.setRandomDigit()).toEqual([1, 5, 8]);
  });

  test("기능3 user 숫자 input 테스트 (setUserInput 메소드)", () => {
    const printSpy = getPrintSpy();
    const answers = ["246", "513", "152", "125", "135"];
    const messages = [
      [2, 4, 6],
      [5, 1, 3],
      [1, 5, 2],
      [1, 2, 5],
      [1, 3, 5],
    ];
    mockQuestions(answers);
    const app = new App();

    messages.forEach((output) => {
      app.setUserInput();

      expect(printSpy).toHaveBeenCalledWith(expect.arrayContaining(output));
    });
  });
});
