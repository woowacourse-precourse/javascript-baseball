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
    test("예외처리 1 길이", () => {
        const randoms = [1, 3, 5];
        const answers = ["1"];

        mockRandoms(randoms);
        mockQuestions(answers);

        expect(() => {
            const app = new App();
            app.play();
        }).toThrow();
    });
    test("예외처리 2 중복", () => {
        const randoms = [1, 3, 5];
        const answers = ["112"];

        mockRandoms(randoms);
        mockQuestions(answers);

        expect(() => {
            const app = new App();
            app.play();
        }).toThrow();
    });
    test("예외처리 3 문자", () => {
        const randoms = [1, 3, 5];
        const answers = ["abc"];

        mockRandoms(randoms);
        mockQuestions(answers);

        expect(() => {
            const app = new App();
            app.play();
        }).toThrow();
    });
    test("예외처리 4 공백 및 기호", () => {
        const randoms = [1, 3, 5];
        const answers = ["^ ★"];

        mockRandoms(randoms);
        mockQuestions(answers);

        expect(() => {
            const app = new App();
            app.play();
        }).toThrow();
    });

    test("3스트라이크", () => {
        const randoms = [1, 3, 6];
        const answers = ["136"];
        const logSpy = getLogSpy();
        const messages = ["3스트라이크"];

        mockRandoms(randoms);
        mockQuestions(answers);

        const app = new App();
        app.play();

        messages.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
        });
    });
    test("2스트라이크", () => {
        const randoms = [1, 3, 6];
        const answers = ["135"];
        const logSpy = getLogSpy();
        const messages = ["2스트라이크"];

        mockRandoms(randoms);
        mockQuestions(answers);

        const app = new App();
        app.play();

        messages.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
        });
    });
    test("2볼 1스트라이크", () => {
        const randoms = [1, 3, 6];
        const answers = ["163"];
        const logSpy = getLogSpy();
        const messages = ["2볼 1스트라이크"];

        mockRandoms(randoms);
        mockQuestions(answers);

        const app = new App();
        app.play();

        messages.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
        });
    });
    test("게임 종료", () => {
        const randoms = [5, 8, 9];
        const answers = ["589", "2"];
        const logSpy = getLogSpy();
        const messages = ["3스트라이크", "게임 종료",];

        mockRandoms(randoms);
        mockQuestions(answers);

        const app = new App();
        app.play();

        messages.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
        });
    });
    test("게임 종료 후 재시작", () => {
        const randoms = [1, 3, 5, 5, 8, 9];
        const answers = ["135", "1", "597"];
        const logSpy = getLogSpy();
        const messages = [
            "3스트라이크",
            "1볼 1스트라이크",
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
