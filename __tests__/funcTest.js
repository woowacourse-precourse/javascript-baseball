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

describe("기능테스트", () => {
  test("setBaseLine", () => {
    const app = new App();
    const before = app.getBaseLine();
    let after = null;

    expect(before).toEqual(null);
    app.setBaseLine();

    after = app.getBaseLine();
    expect(after.length).toEqual(3);
  });

  test("inputTestData", () => {
    const app = new App();
    const testData = app.inputToTestData("123");

    expect(testData[0]).toEqual(1);
    expect(testData[1]).toEqual(2);
    expect(testData[2]).toEqual(3);
    expect(() => {
      const app = new App();
      app.inputToTestData("0");
    }).toThrow();
    expect(() => {
      const app = new App();
      app.inputToTestData("12");
    }).toThrow();
    expect(() => {
      const app = new App();
      app.inputToTestData("111");
    }).toThrow();
  });

  test("compare", () => {
    const app = new App();
    app.setBaseLine();
    const answer = app.compare([1, 2, 3]);
    expect(typeof answer).toEqual("boolean");
  });

  test("continueAnswer1", () => {
    const app = new App();
    const spyFn = jest.spyOn(app, "setBaseLine");
    app.continueAnswer("1");
    expect(spyFn).toBeCalledTimes(1);
  });
  
  test("continueAnswer1", () => {
    const app = new App();
    const spySetBaseLine = jest.spyOn(app, "setBaseLine");
    const spyProgressFn = jest.spyOn(app, "progress");
    app.continueAnswer("1");
    expect(spySetBaseLine).toBeCalledTimes(1);
    expect(spyProgressFn).toBeCalledTimes(1);
  });
  
  test("continueAnswer2", () => {
    const app = new App();
    const spySetBaseLine = jest.spyOn(app, "setBaseLine");
    const spyProgressFn = jest.spyOn(app, "progress");
    app.continueAnswer("2");
    expect(spySetBaseLine).not.toBeCalledTimes(1);
    expect(spyProgressFn).not.toBeCalledTimes(1);
  }); 
  
  test("continueAnswerDefault", () => {
    expect(() => {
      const app = new App();
      app.continueAnswer("3")
    }).toThrow();
  }); 
  
});
