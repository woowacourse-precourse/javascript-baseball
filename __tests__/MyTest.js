const App = require("../src/App");
const Computer = require('../src/Computer');
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

describe("게임 시작", () => {
    test("게임 시작 멘트 출력 확인", () => {
        const logSpy = getLogSpy();

        const app = new App();
        app.play();

        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("숫자 야구 게임을 시작합니다."));
    });
    test("컴퓨터 숫자 1~9 인지 확인", () => {
        const computer = new Computer();
        computer.setComputerNumbers();
        [...computer.getComputerNumbers()].forEach((number) => {
            expect(number).toBeGreaterThanOrEqual(1);
            expect(number).toBeLessThanOrEqual(9);
        })
    });
    test("컴퓨터 숫자 중복 존재 및 길이 3 인지 확인", () => {
        const computer = new Computer();
        computer.setComputerNumbers();
        expect([...new Set(computer.getComputerNumbers())]).toHaveLength(3);
    });
    test("유저 입력 오류 확인", () => {
        const userInput = ['abc','12345','12','111','012'];
        mockQuestions(userInput);

        userInput.forEach(()=>{
            expect(() => {
                const app = new App();
                app.play();
            }).toThrow();
        })
    });

});
