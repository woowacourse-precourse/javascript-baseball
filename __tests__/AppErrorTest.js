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

describe("Throw 테스트", () => {

    test("예외 테스트: 1-9 사이의 수가 아닌 수", () => {
        const randoms = [1, 3, 5];
        const answers = ["023"];

        mockRandoms(randoms);
        mockQuestions(answers);

        expect(() => {
            const app = new App();
            app.play();
        }).toThrow();
    });

    test("예외 테스트: 문자가 포함된 인풋", () => {
        const randoms = [1, 3, 5];
        const answers = ["a12"];

        mockRandoms(randoms);
        mockQuestions(answers);

        expect(() => {
            const app = new App();
            app.play();
        }).toThrow();
    });

    test("예외 테스트: 중복 숫자 인풋", () => {
        const randoms = [1, 3, 5];
        const answers = ["113"];

        mockRandoms(randoms);
        mockQuestions(answers);

        expect(() => {
            const app = new App();
            app.play();
        }).toThrow();
    });

    test("예외 테스트: 길이가 3이 아닌 숫자 인풋(4)", () => {
        const randoms = [1, 3, 5];
        const answers = ["1234"];

        mockRandoms(randoms);
        mockQuestions(answers);

        expect(() => {
            const app = new App();
            app.play();
        }).toThrow();
    });

    test("예외 테스트: 길이가 3이 아닌 숫자 인풋(1)", () => {
        const randoms = [1, 3, 5];
        const answers = ["1"];

        mockRandoms(randoms);
        mockQuestions(answers);

        expect(() => {
            const app = new App();
            app.play();
        }).toThrow();
    });

    test("예외 테스트: 1 or 2 외의 숫자 입력", () => {
        const randoms = [1, 3, 5];
        const answers = ["135", '3'];

        mockRandoms(randoms);
        mockQuestions(answers);

        expect(() => {
            const app = new App();
            app.play();
        }).toThrow('1 또는 2만 입력해주세요.');
    });

    test("예외 테스트: 1 or 2 외의 문자 입력", () => {
        const randoms = [1, 3, 5];
        const answers = ["135", 'a'];

        mockRandoms(randoms);
        mockQuestions(answers);

        expect(() => {
            const app = new App();
            app.play();
        }).toThrow('숫자만 입력해주세요.');
    });
});
