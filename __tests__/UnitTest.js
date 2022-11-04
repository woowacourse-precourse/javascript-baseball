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
  test("1-9까지 서로 다른 임의의 수 3개 생성", () => {
    const app = new App();
    const randoms = app.generateRandomNums(1, 9, 3);
    const set = new Set(randoms);

    expect(randoms.length).toEqual(3);
    expect(set.size).toEqual(3);
    expect(randoms.includes(0)).toEqual(false);
  });

  test("야구결과-낫싱", () => {
    const randoms = [1, 2, 3];
    const answers =  ["897", "123", "2"];
    const logSpy = getLogSpy();
    
    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('낫싱'));
  });
  test("야구결과-1볼", () => {
    const randoms = [1, 2, 3];
    const answers =  ["246", "123", "2"];
    const logSpy = getLogSpy();
    
    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('1볼'));
  });
  test("야구결과-1스트라이크", () => {
    const randoms = [1, 2, 3];
    const answers =  ["149", "123", "2"];
    const logSpy = getLogSpy();

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('1스트라이크'));
    
  });
  test("야구결과-1볼 1스트라이크", () => {
    const randoms = [1, 2, 3];
    const answers =  ["139", "123", "2"];
    const logSpy = getLogSpy();

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('1볼 1스트라이크'));
  });
});