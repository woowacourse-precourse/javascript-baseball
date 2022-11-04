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

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("숫자 야구 게임", () => {

  test('게임 시작 인사 출력 확인', () => {
    const logSpy = getLogSpy();
    const app = new App();
    app.printStartNotification();

    expect(logSpy).toHaveBeenCalledWith('숫자 야구 게임을 시작합니다.');
  });

  test('랜덤 숫자 생성 확인', () => {
    const app = new App();
    app.generateRandomNumber();
    const random1 = app.randomNumber;
    app.generateRandomNumber();
    const random2 = app.randomNumber;

    expect(random1 === random2).toBe(false);
  });

  test("게임 종료 후 재시작", () => {
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ["246", "135", "1", "597", "589", "2"];
    const logSpy = getLogSpy();
    const messages = [
      "낫싱",
      "3스트라이크",
      '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
      "1볼 1스트라이크",
      "3스트라이크",
      '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
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
      app.play();
    }).toThrow();
  });
});


// describe('숫자 야구 게임 테스트', () => {
//   test('게임 시작 인사 출력 확인', () => {
//     const app = new App();
//     const logSpy = jest.spyOn(MissionUtils.Console, 'print');
//     app.printStartNotification();

//     expect(logSpy).toHaveBeenCalledWith('숫자 야구 게임을 시작합니다.');
//   });

  
  // test("split 메서드로 주어진 값을 구분", () => {
  //   const input = "1,2";
  //   const result = input.split(",");

  //   expect(result).toContain("2", "1");
  //   expect(result).toContainEqual("1", "2");
  // });

  // test("split 메서드로 구분자가 포함되지 않은 경우 값을 그대로 반환", () => {
  //   const input = "1";
  //   const result = input.split(",");

  //   expect(result).toContain("1");
  // });

  // test("substring 메서드로 특정 구간 값을 반환", () => {
  //   const input = "(1,2)";
  //   const result = input.substring(1, 4);

  //   expect(result).toEqual("1,2");
  // });

  // test("repeat 메서드로 문자열을 여러번 반복", () => {
  //   const input = "abc";
  //   const result = input.repeat(3);

  //   expect(result).toEqual("abcabcabc");
  // });

  // test("repeat 메서드에 음수 값을 넣었을 때 예외 발생", () => {
  //   const input = "abc";
  //   const result = () => input.repeat(-1);

  //   expect(result).toThrow(RangeError);
  // });
// });
