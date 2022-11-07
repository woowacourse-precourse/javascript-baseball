const App = require("../src/App")
const MissionUtils = require("@woowacourse/mission-utils")

describe("Print Message Test", () => {

  test("case 1) Game Start Message Test", () => {
    const logSpy = getLogSpy();

    const app = new App();
    app.printGameStartMessgae();
      
    expect(logSpy).toHaveBeenCalled();
    
  });

  test.each([
    [1,2,"1볼 2스트라이크"],
    [1,0,"1볼"],
    [0,3,"3스트라이크"],
    [0,0,"낫싱"]
  ])("case 2) Ball And Strike Count Test", (strike,ball,expected) => {
    
    const logSpy = getLogSpy();
    const app = new App();
    
    app.printBallAndStrikeCount(strike,ball);
      
    expect(logSpy).toHaveBeenCalledWith(expected);
  });

  test("case 3) All Match Message Test", () => {
    const logSpy = getLogSpy();

    const app = new App();
    app.printAllMatchMessage();
      
    expect(logSpy).toHaveBeenCalled();
    
  });

});

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