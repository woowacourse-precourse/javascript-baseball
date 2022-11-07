const App = require("../src/App")
const MissionUtils = require("@woowacourse/mission-utils");

describe('내가 구현한 기능 테스트',()=>{
  test("사용자 입력받기 예외 테스트 5가지", () => {
    const app = new App();
    const testResult1 = app.isValidInput('');
    expect(testResult1).toEqual(false);
    const testResult2 = app.isValidInput('1234');
    expect(testResult2).toEqual(false);
    const testResult3 = app.isValidInput('1d2');
    expect(testResult3).toEqual(false);
    const testResult4 = app.isValidInput('203');
    expect(testResult4).toEqual(false);
    const testResult5 = app.isValidInput('242');
    expect(testResult5).toEqual(false);
    const testResult6 = app.isValidInput('258');
    expect(testResult6).toEqual(true);

  });

  test("컴퓨터가 만든 임의의 수 테스트",()=>{
    const app = new App();
    const testResult = app.generateComputerAnswer();
    expect(testResult).toHaveLength(3);
  });

  test('getHint 내부 함수 호출 테스트 코드',()=>{
    const app = new App();
    const spyJudge = jest.spyOn(app, 'judgeStrikeOrBall');
    const spyMakeHint = jest.spyOn(app,'makeHintString');
    app.getHint([4,5,6],'345');
    expect(spyJudge).toBeCalledTimes(3);
    expect(spyMakeHint).toBeCalledTimes(1);
  });

  test("getHint 함수 return값 테스트 코드(볼)",()=>{
    const app = new App();
    const testResult1 = app.getHint([1,2,3],'451');
    expect(testResult1).toEqual('1볼');
    const testResult2 = app.getHint([1, 2, 3], '431');
    expect(testResult2).toEqual('2볼');
    const testResult3 = app.getHint([1, 2, 3], '312');
    expect(testResult3).toEqual('3볼');
  });
  test('getHint 함수 return값 테스트 코드(스트라이크)', () => {
    const app = new App();
    const testResult1 = app.getHint([1, 2, 3], '145');
    expect(testResult1).toEqual('1스트라이크');
    const testResult2 = app.getHint([1, 2, 3], '127');
    expect(testResult2).toEqual('2스트라이크');
    const testResult3 = app.getHint([1, 2, 3], '123');
    expect(testResult3).toEqual('3스트라이크');
  });
  test('getHint 함수 return값 테스트 코드(N스트라이크 M볼)', () => {
    const app = new App();
    const testResult1 = app.getHint([1, 2, 3], '134');
    expect(testResult1).toEqual('1볼 1스트라이크');
    const testResult2 = app.getHint([1, 2, 3], '321');
    expect(testResult2).toEqual('2볼 1스트라이크');
  });
  test('사용자 입력시, isValidInput, getHint 실행 여부 확인', () => {
    const app = new App();
    const spyValidInput = jest.spyOn(app, "isValidInput");
    const spyGetHint = jest.spyOn(app,"getHint");
    app.answer = [1,2,3]
    app.getHintOrThrowError('123');
    expect(spyValidInput).toBeCalledTimes(1);
    expect(spyGetHint).toBeCalledTimes(1);
  });
  test('judgeStrikeOrBall 테스트 코드',()=>{
    const app = new App();
    const testResult = app.judgeStrikeOrBall([1,2,3],"142",0);
    expect(testResult).toEqual('strike');
    const testResult2 = app.judgeStrikeOrBall([1, 2, 3], '142', 1);
    expect(testResult2).toEqual('');
    const testResult3 = app.judgeStrikeOrBall([1, 2, 3], '142', 2);
    expect(testResult3).toEqual('ball');
  });

  test('makeHintString 테스트 코드', () => {
    const app = new App();
    const testResult = app.makeHintString(0,0);
    expect(testResult).toEqual('낫싱');
    const testResult2 = app.makeHintString(0, 1);
    expect(testResult2).toEqual('1볼');
    const testResult3 = app.makeHintString(2, 0);
    expect(testResult3).toEqual('2스트라이크');
    const testResult4 = app.makeHintString(1, 1);
    expect(testResult4).toEqual('1볼 1스트라이크');
  });

  test('restartOrExit 테스트 코드',()=>{
    const app = new App();
    const spyPlay = jest.spyOn(app, 'play');
    const spyEnd = jest.spyOn(app, 'exitFunction');
    app.restartOrExit(1);
    expect(spyPlay).toBeCalledTimes(1);
    MissionUtils.Console.close();

    app.restartOrExit(2);
    expect(spyEnd).toBeCalledTimes(1);

    expect(() => {
      const app = new App();
      app.restartOrExit('aba');
    }).toThrow();

  });

  test('checkCorrectAnswer 테스트 코드',()=>{
    const app = new App();
    const spyCheck = jest.spyOn(app, 'checkRestart');
    const spyPlay = jest.spyOn(app, 'playTheGame');
    
    app.hintString = '3스트라이크';
    app.checkCorrectAnswer();
    expect(spyCheck).toBeCalledTimes(1);
    expect(spyPlay).toBeCalledTimes(0);

    spyCheck.mockClear();
    spyPlay.mockClear();

    app.hintString = '1볼 1스트라이크';
    app.checkCorrectAnswer();
    expect(spyCheck).toBeCalledTimes(0);
    expect(spyPlay).toBeCalledTimes(1);
    
    MissionUtils.Console.close();
  });

})


