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

});
