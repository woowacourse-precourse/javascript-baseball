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

describe("개인 기능 테스트", () => {
    test("사용자 입력 예외처리 확인1(중복된 수)", () => {
        const randoms = [1, 2, 3];
        const answers = ["112"];

        mockRandoms(randoms);
        mockQuestions(answers);

        expect(() => {
            const app = new App();
            app.play();
        }).toThrow();
    });

    test("사용자 입력 예외처리 확인2(길이가 짧은 수)", () => {
        const randoms = [1, 2, 3];
        const answers = ["12"];

        mockRandoms(randoms);
        mockQuestions(answers);

        expect(() => {
            const app = new App();
            app.play();
        }).toThrow();
    });

    test("사용자 입력 예외처리 확인3(문자)", () => {
        const randoms = [1, 2, 3];
        const answers = ["12a"];

        mockRandoms(randoms);
        mockQuestions(answers);

        expect(() => {
            const app = new App();
            app.play();
        }).toThrow();
    });

    test("일반 상황 확인", () => {
        const randoms = [4, 6, 1];
        const answers = ["123", "156", "235", "164", "416", "461", "2"];
        const logSpy = getLogSpy();
        const messages = [
            "1볼",
            "2볼",
            "낫싱",
            "2볼 1스트라이크",
            "2볼 1스트라이크",
            "3스트라이크",
            "게임 종료"
        ];

        mockRandoms(randoms);
        mockQuestions(answers);

        const app = new App();
        app.play();

        messages.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
        });
    });

    test("연속 재시작 확인", () => {
        const randoms = [4, 6, 1, 2, 3, 5, 4, 6, 1];
        const answers = ["461", "1", "235", "1", "164", "416", "461", "2"];
        const logSpy = getLogSpy();
        const messages = [
            "3스트라이크",
            "3스트라이크",
            "2볼 1스트라이크",
            "2볼 1스트라이크",
            "3스트라이크",
            "게임 종료"
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

