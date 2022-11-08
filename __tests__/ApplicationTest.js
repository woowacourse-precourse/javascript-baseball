const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGES } = require('../src/constants');

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
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("숫자 야구 게임", () => {
  test("게임 종료 후 재시작", () => {
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ["246", "135", "1", "597", "589", "2"];
    const logSpy = getLogSpy();
    const messages = [
      "낫싱",
      "3스트라이크",
      "1볼 1스트라이크",
      "3스트라이크",
      "게임 종료",
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("예외 테스트", () => {
    const randoms = [1, 3, 5];
    const answers = ["1234"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });

  //커스텀 에러
  test('게임 종료 후 재시작 여부 확인 시 1,2가 아닌 다른 수를 입력했을 때',  () => {
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ["246", "135", "3", "replay", "597", "589", "2"]; 

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
    
  });

  // test('서로 다른 3자리 수가 아닐 때', () => {
  //   const randoms = [1, 3, 5];
  //   const answers = ['119'];

  //   mockRandoms(randoms);
  //   mockQuestions(answers);

  //   expect(() => {
  //     const app = new App();
  //     app.play();
  //   }).toThrow();
  // });

  // test('1부터 9까지가 아닐 때 예외 테스트', () => {
  //   const randoms = [1, 3, 5];
  //   const answers = ['890'];

  //   mockRandoms(randoms);
  //   mockQuestions(answers);

  //   expect(() => {
  //     const app = new App();
  //     app.play();
  //   }).toThrow();
  // });
  
  // test('숫자가 아닐 때 예외 테스트', () => {
  //   const randoms = [1, 3, 5];
  //   const answers = ['abc'];

  //   mockRandoms(randoms);
  //   mockQuestions(answers);

  //   expect(() => {
  //     const app = new App();
  //     app.play();
  //   }).toThrow();
  // }); 
})
