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
    })

    test("printResult 테스트", () => {
        const randoms = [1, 2, 3];
        const answers = ["456", "231", "192", "123", "2"];
        const logSpy = getLogSpy();
        const messages = [
            "낫싱",
            "3볼",
            "1볼 1스트라이크",
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
})