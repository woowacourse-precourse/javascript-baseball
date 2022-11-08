const App = require("../src/App.js");
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

describe("입력이 올바른지 판단 테스트", () => {
    const APP = new App();
    test("123은 올바른 입력이다", () => {
        const RESULT = APP.isValidInput("123");
        expect(RESULT).toEqual(true);
    });

    test("1234는 올바르지 않은 입력이다", () => {
        const RESULT = APP.isValidInput("1234");
        expect(RESULT).toEqual(false);
    });

    test("120은 올바르지 않은 입력이다", () => {
        const RESULT = APP.isValidInput("120");
        expect(RESULT).toEqual(false);
    });

    test("12a는 올바르지 않은 입력이다", () => {
        const RESULT = APP.isValidInput("12a");
        expect(RESULT).toEqual(false);
    });

    test("133은 올바르지 않은 입력이다", () => {
        const RESULT = APP.isValidInput("133");
        expect(RESULT).toEqual(false);
    })
})

describe("랜덤 정답이 올바르게 잘 만들어지는지 테스트", () => {
    const APP = new App();
    test("200번 만들어도 모두 올바른 난수가 만들어진다", () => {
        let correctFlag = 1;
        for (let i = 0; i < 200; i++) {
            let answer = APP.generateRandomAnswer().join(""); // 배열을 문자열 형태로 변환
            let currentCorrectFlag = APP.isValidInput(answer); // 사용자의 입력처럼 올바른 난수인지 확인
            correctFlag *= (currentCorrectFlag) ? 1 : 0; // 한번이라도 올바르지 않으면 0이 된다
        }

        expect(correctFlag).toEqual(1);
    })
})


describe("스트라이크와 볼 판단 테스트", () => {
    const APP = new App();
    const ANSWER = [3, 4, 5];

    test("123은 1볼이다", () => {
        const RESULT = APP.getResult("123", ANSWER);
        expect(RESULT).toEqual({ strike: 0, ball: 1 });
    })

    test("389는 1스트라이크이다", () => {
        const RESULT = APP.getResult("389", ANSWER);
        expect(RESULT).toEqual({ strike: 1, ball: 0 });
    })

    test("356은 1볼 1스트라이크이다", () => {
        const RESULT = APP.getResult("356", ANSWER);
        expect(RESULT).toEqual({ strike: 1, ball: 1 });
    })

    test("543은 2볼 1스트라이크이다", () => {
        const RESULT = APP.getResult("543", ANSWER);
        expect(RESULT).toEqual({ strike: 1, ball: 2 });
    })

    test("678은 낫띵이다", () => {
        const RESULT = APP.getResult("678", ANSWER);
        expect(RESULT).toEqual({ strike: 0, ball: 0 });
    })
})

describe("비교 결과 출력 테스트", () => {
    const APP = new App();

    test("출력 테스트", () => {
        const RESULTS = [{ ball: 0, strike: 0 }, { ball: 1, strike: 0 }, { ball: 0, strike: 1 }, { ball: 1, strike: 1 }, { ball: 2, strike: 1 }];
        const LOG_SPY = getLogSpy();
        const MESSAGES = [
            "낫싱",
            "1볼",
            "1스트라이크",
            "1볼 1스트라이크",
            "2볼 1스트라이크"
        ];

        RESULTS.forEach((result) => {
            APP.printCompareResult(result);
        })

        MESSAGES.forEach((output) => {
            expect(LOG_SPY).toHaveBeenCalledWith(expect.stringContaining(output));
        });
    })
})

describe("게임 한 턴 진행 테스트", () => {
    test("게임 한 턴 진행", () => {
        const RANDOMS = [1, 2, 3];
        const ANSWERS = ["456", "145", "256", "137", "125", "132"];
        const LOG_SPY = getLogSpy();
        const MESSAGES = [
            "낫싱",
            "1스트라이크",
            "1볼",
            "1볼 1스트라이크",
            "2스트라이크",
            "2볼 1스트라이크"
        ];

        mockRandoms(RANDOMS);
        mockQuestions(ANSWERS);

        const APP = new App();
        APP.play();

        MESSAGES.forEach((output) => {
            expect(LOG_SPY).toHaveBeenCalledWith(expect.stringContaining(output));
        });
    })
})