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

describe('App 클래스 메소드 테스트', () => {
    test("createComputerNumber 컴퓨터 3개 숫자 생성 테스트", () => {
        const app = new App();
        expect(app.createComputerNumber()).toHaveLength(3);
    });

    test("createComputerNumber 컴퓨터 3개 숫자 생성 테스트", () => {
        const app = new App();
        expect(app.createComputerNumber()).toHaveLength(3);
    });

    test("calcBallAndStrike 테스트", () => {
        const randoms = [1, 2, 3];
        const answers = [["4", "5", "6"], ["2", "3", "1"], ["1", "9", "2"], ["1", "2", "3"]];
        const result = [
            [0, 0],
            [3, 0],
            [1, 1],
            [0, 3]
        ];

        const app = new App();

        result.forEach((output, index) => {
            expect(app.calcBallAndStrike(answers[index], randoms)).toEqual(output);
        });
    });

    test("decideReplay 테스트", () => {
        const randoms = [1, 2, 3];
        const answers = ["123", "2"];
        const logSpy = getLogSpy();
        const messages = [
            "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
        ];

        mockRandoms(randoms);
        mockQuestions(answers);

        const app = new App();
        app.play();

        messages.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
        });
    });
})