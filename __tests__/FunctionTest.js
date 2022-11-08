const App = require("../src/App");
const { Console, Random } = require("@woowacourse/mission-utils");

const mockQuestions = (answers) => {
    Console.readLine = jest.fn();
    answers.reduce((acc, input) => {
        return acc.mockImplementationOnce((question, callback) => {
            callback(input);
        });
    }, Console.readLine);
};

const mockRandoms = (numbers) => {
    Random.pickNumberInRange = jest.fn();
    numbers.reduce((acc, number) => {
        return acc.mockReturnValueOnce(number);
    }, Random.pickNumberInRange);
};

const getLogSpy = () => {
    const logSpy = jest.spyOn(Console, "print");
    logSpy.mockClear();
    return logSpy;
};

describe("점수 판별 테스트", () => {
    test("스트라이크 개수 판별", () => {
        const quizNumberExample = "123";
        const inputExamples = ["123", "124", "156", "987"];
        const resultExamples = [3, 2, 1, 0];

        const app = new App();
        app.play();

        inputExamples.map((example, index) => {
            expect(app.checkStrike(quizNumberExample, example)).toEqual(
                resultExamples[index]
            );
        });
    });

    test("볼 개수 판별", () => {
        const quizNumberExample = "123";
        const inputExamples = ["321", "423", "312", "918"];
        const resultExamples = [2, 0, 3, 1];

        const app = new App();
        app.play();

        inputExamples.map((example, index) => {
            expect(app.checkBall(quizNumberExample, example)).toEqual(
                resultExamples[index]
            );
        });
    });

    test("예외 테스트", () => {
        const randoms = [1, 2, 3];
        const answers = ["12", "144", "012"];

        mockRandoms(randoms);
        mockQuestions(answers);

        expect(() => {
            const app = new App();
            app.play();
        }).toThrow();
    });
});
