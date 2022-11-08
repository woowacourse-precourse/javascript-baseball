const MissionUtils = require("@woowacourse/mission-utils");
const User = require("../src/User");

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

describe("예외 테스트", () => {
  test("입력값이 0 포함일 경우 에러 출력 ", () => {
    const randoms = [1,5,9];
    const answers = ["102"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const user = new User();

    expect(() => user.play()).toThrowError('올바르지 않은 입력 값 입니다.');
  });

  test("입력값이 3자리가 아닐 경우 에러 출력 ", () => {
    const randoms = [1,5,9];
    const answers = ["1022"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const user = new User();

    expect(() => user.play()).toThrowError('올바르지 않은 입력 값 입니다.');
  });

  test("입력값이 서로 다른 세자리가 아닐 경우 에러 출력 ", () => {
    const randoms = [1,5,9];
    const answers = ["122"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const user = new User();

    expect(() => user.play()).toThrowError('올바르지 않은 입력 값 입니다.');
  });

  test("입력값이 숫자가 아닐 경우 에러 출력", () => {
    const randoms = [1,5,9];
    const answers = ["hey"];

    mockRandoms(randoms);
    mockQuestions(answers);

    const user = new User();

    expect(() => user.play()).toThrowError('올바르지 않은 입력 값 입니다.');
  });

  test("재시작시 1 또는 2를 입력하지 않았을 경우 에러 출력", () => {
    const answers = ['5'];

    mockQuestions(answers);

    const user = new User();

    expect(() => user.selectRePlay()).toThrowError('올바르지 않은 입력 값 입니다.');
  });
});
