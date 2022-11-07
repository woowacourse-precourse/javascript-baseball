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

const getLogSpyPrint = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
};

const getLogSpyFunc = ( methodName ) => {
    const logSpy = jest.spyOn(App.prototype, methodName);
    logSpy.mockClear();
    return logSpy;
};

describe("흐름 구현 함수 테스트" , () => {
    test("predict test", () => {
        const answers = ['124'];
        const computer = [1,2,3];
        const result = {strike:2, ball:0};
        const logSpy = getLogSpyFunc("terminate");
        mockQuestions(answers);
        
        const app = new App();
        app.predict(computer);
        expect(logSpy).toHaveBeenCalledWith(computer, result);
    });

    test("terminate test", () => {
        const logSpyPrint = getLogSpyPrint();
        const logSpyPredict = getLogSpyFunc("predict");
        const logSpyCheckContinue = getLogSpyFunc("checkContinue");
        const computer = [1,2,3];
        const results = [
            {strike:2, ball:0},
            {strike:3, ball:0}
        ];

        const app = new App();
        results.forEach((result,idx) => {
            app.terminate(computer, result);
            if (idx === 0){
                expect(logSpyPredict).toHaveBeenCalledWith(computer);
            } else {
                expect(logSpyPrint).toHaveBeenCalledWith('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
                expect(logSpyCheckContinue).toHaveBeenCalled();
            }
        })
    });

    test("checkContinue test", () => {
        const inputs = ['2'];
        const inputError = ['문자열'];
        const logSpyGame = getLogSpyFunc("game");
        
        const app = new App();
        inputs.forEach(input => {
            mockQuestions([input]);
            app.checkContinue();
            if(input==='1'){
                expect(logSpyGame).toHaveBeenCalled();
            } else {
                expect(logSpyGame).not.toHaveBeenCalled();
            }
            jest.clearAllMocks();
        });
    });
});