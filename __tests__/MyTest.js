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
    test("숫자 야구 게임 출력 확인", () => {
        const randoms = [1, 2, 3, 4, 5, 6];
        const answers = ["312", "132", "123", "1", "789", "452", "456", "2"];
        const logSpy = getLogSpy();
        const messages = [
            "3볼",
            "2볼 1스트라이크",
            "3스트라이크",
            "낫싱",
            "2스트라이크",
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
    
});
