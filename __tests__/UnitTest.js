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

describe("Throw Error Test", () => {
  test.each([
    ["세 자리의 숫자를 정확히 입력해주세요 : 입력한 내용"],
    ["정확한 값을 입력해주세요 : 입력한 내용"]
  ])("case 1) Throw Exception Message", (message) => {
    expect(() => {
      const app = new App();
      app.throwExceptionMessage(message)
    }).toThrow();
    
  });
})


describe("Game Methods Test", () => {
  
  test.each([
    [[1,2,3],true],
    [[1,0,3],false],
    [[1,1,3],false],
    [[9,8,3],true],
    [["a",8,"c"],false],
  ])('case 1) Get Random Three Digits Number Valid Test', (randoms,boolean) => {
  
    mockRandoms(randoms);

    const app = new App();
    const number = app.getRandomThreeDigitsNumber()

    expect(app.isValidInputValueInGame(number)).toBe(boolean)
  })
  
  test.each([
    [1,2,false],
    [3,4,false],
    [112,432,false],
    [123,123,true],
    [567,567,true],
  ])('case 2) Same Number Check Test', (randomNum,inputNum,boolean) => {
  
    const app = new App();
    expect(app.isSameTwoNumber(randomNum,inputNum)).toBe(boolean)

  })

  test.each([
    [123,456,0],
    [591,567,1],
    [132,432,2],
    [123,123,3]
  ])('case 3) Get Strike Count Test', (randomNum,inputNum,count) => {
  
    const app = new App();
    expect(app.getStrikeCount(randomNum,inputNum)).toBe(count);

  })


})


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