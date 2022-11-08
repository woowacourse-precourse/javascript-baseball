const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

// input value = ["246", "135", "1", "597", "589", "2"]
const mockQuestions = (answers) => {
  // MissionUtils.Console.readLine에 mock 함수 할당
  // -> 작동 테스트 아닌 호출 여부만 파악, 리턴 값 설정 X = undefined
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce(
    // input 1. reducer callback
    // acc : 누산기, input : 현재 값
    // acc의 값이 맨 처음 callback(input) 값이 되도록 설정. 그 후는 acc를 반환
    (acc, input) => {
      return acc.mockImplementationOnce((question, callback) => {
        callback(input);
      });
    },
    // input 2. init value
    // reduce에 초기값 undefined 할당
    MissionUtils.Console.readLine
  );
};

// input value = [1, 3, 5, 5, 8, 9] -> 첫 게임의 값은 135, 두 번째 게임의 값은 589
const mockRandoms = (numbers) => {
  // MissionUtils.Random.pickNumberInRange에 mock 함수 할당
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    // 초기값에서 undefined 연산이 되지 않게 acc 값으로 number를 리턴해준다.
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

// Mission.Console 객체의 print 메소드 호출 시 해당 내용을 살펴봄
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

    // toHaveBeenCalledWith 함수는 함수에 특정 인자가 전달되었으면 성공
    // 즉, 각 message 값이 Console.print(=logspy)에 인자로 전달되었으면 성공
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
});
