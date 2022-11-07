const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");
const inputValidation = require("../src/inputValidation");
const ballStrikeCheck = require("../src/ballStrikeCheck");

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
    test("게임 종료 후 재시작될 때 랜덤값 변경되는지 테스트", () => {
        const randoms = [1, 3, 5, 5, 8, 9];
        const answers = ["215", "135", "1", "135", "579", "589", "2"];
        const logSpy = getLogSpy();
        const messages = [
            "1볼 1스트라이크",
            "3스트라이크",
            "1볼",
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

describe("입력값 예외 테스트", () => {
    test("입력값이 3글자가 아닐 경우 예외 처리", () => {
        const testCase = [
            [1, 2, 3, 4],
            [1, 2],
            []
        ];
        testCase.forEach(arr => expect(() => inputValidation(arr)).toThrow());
    });
    test("입력값이 0~9사이의 값이 아닐 경우 예외 처리", () => {
        const testCase = [
            [0, 1, 2],
            ['a', 'b', 3],
            ['']
        ];
        testCase.forEach(arr => expect(() => inputValidation(arr)).toThrow());
    });
    test("입력값이 중복 될 경우 예외 처리", () => {
        const testCase = [
            [1, 1, 2],
            [7, 7, 7],
            [5, 4, 5]
        ];
        testCase.forEach(arr => expect(() => inputValidation(arr)).toThrow());
    });
})

describe("스트라이크 볼 갯수 체크", () => {
    test("3스트라이크", () => {
        const user = [1, 2, 3];
        const computer = [1, 2, 3];
        expect(ballStrikeCheck(user, computer)).toEqual({ "ballNumber": 0, "strikeNumber": 3 });
    });
    test("2스트라이크", () => {
        const user = [7, 3, 4];
        const computer = [7, 2, 4];
        expect(ballStrikeCheck(user, computer)).toEqual({ "ballNumber": 0, "strikeNumber": 2 });
    });
    test("3볼 1스트라이크", () => {
        const user = [1, 2, 3];
        const computer = [1, 3, 2];
        expect(ballStrikeCheck(user, computer)).toEqual({ "ballNumber": 2, "strikeNumber": 1 });
    });
    test("3볼", () => {
        const user = [4, 5, 6];
        const computer = [6, 4, 5];
        expect(ballStrikeCheck(user, computer)).toEqual({ "ballNumber": 3, "strikeNumber": 0 });
    });
    test("2볼", () => {
        const user = [1, 9, 2];
        const computer = [9, 1, 3];
        expect(ballStrikeCheck(user, computer)).toEqual({ "ballNumber": 2, "strikeNumber": 0 });
    });
    test("1볼", () => {
        const user = [7, 3, 4];
        const computer = [1, 2, 3];
        expect(ballStrikeCheck(user, computer)).toEqual({ "ballNumber": 1, "strikeNumber": 0 });
    });
})