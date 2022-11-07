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

describe("숫자 야구 게임", () => {

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
});
