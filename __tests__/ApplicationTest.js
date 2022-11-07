const App = require('../src/App');
const Exception = require('../src/Exception');
const MissionUtils = require('@woowacourse/mission-utils');

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
    const logSpy = jest.spyOn(MissionUtils.Console, 'print');
    logSpy.mockClear();
    return logSpy;
};

describe('숫자 야구 게임', () => {
    test('게임 종료 후 재시작', () => {
        const randoms = [1, 3, 5, 5, 8, 9];
        const answers = ['246', '135', '1', '597', '589', '2'];
        const logSpy = getLogSpy();
        const messages = [
            '낫싱',
            '3스트라이크',
            '1볼 1스트라이크',
            '3스트라이크',
            '게임 종료',
        ];
        mockRandoms(randoms);
        mockQuestions(answers);
        const app = new App();
        app.play();
        messages.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(
                expect.stringContaining(output)
            );
        });
    });
    test('게임 종료 후 종료', () => {
        const randoms = [1, 3, 5];
        const answers = ['246', '513', '135', '2'];
        const logSpy = getLogSpy();
        const messages = ['낫싱', '3스트라이크', '3볼', '게임 종료'];
        mockRandoms(randoms);
        mockQuestions(answers);
        const app = new App();
        app.play();
        messages.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(
                expect.stringContaining(output)
            );
        });
    });
    test('나올 수 있는 모든 경우 확인', () => {
        const randoms = [1, 3, 5];
        const answers = [
            '246',
            '917',
            '813',
            '351',
            '815',
            '153',
            '189',
            '139',
            '135',
            '2',
        ];
        const logSpy = getLogSpy();
        const messages = [
            '낫싱',
            '1볼',
            '2볼',
            '3볼',
            '1볼 1스트라이크',
            '2볼 1스트라이크',
            '1스트라이크',
            '2스트라이크',
            '3스트라이크',
            '게임 종료',
        ];
        mockRandoms(randoms);
        mockQuestions(answers);
        const app = new App();
        app.play();
        messages.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(
                expect.stringContaining(output)
            );
        });
    });
    test('예외 테스트', () => {
        const randoms = [1, 3, 5];
        const answers = ['1234'];
        mockRandoms(randoms);
        mockQuestions(answers);
        expect(() => {
            const app = new App();
            app.play();
        }).toThrow();
    });
    test('예외 테스트2', () => {
        const randoms = [1, 3, 5];
        const answers = ['1123'];
        mockRandoms(randoms);
        mockQuestions(answers);
        expect(() => {
            const app = new App();
            app.play();
        }).toThrow();
    });
    test('예외 테스트3', () => {
        const randoms = [1, 3, 5];
        const answers = ['240'];
        mockRandoms(randoms);
        mockQuestions(answers);
        expect(() => {
            const app = new App();
            app.play();
        }).toThrow();
    });
    test('예외 테스트4', () => {
        const randoms = [1, 3, 5];
        const answers = ['abc'];
        mockRandoms(randoms);
        mockQuestions(answers);
        expect(() => {
            const app = new App();
            app.play();
        }).toThrow();
    });
});

describe('Test', () => {
    test('입력 받은 수가 세자리 수가 아닌 경우(2자리)', () => {
        expect(() => {
            const exception = new Exception('12', 'process');
            exception.checkInputException();
        }).toThrow();
    });

    test('입력 받은 수가 세자리 수가 아닌 경우(4자리)', () => {
        expect(() => {
            const exception = new Exception('1234', 'process');
            exception.checkInputException();
        }).toThrow();
    });

    test('입력 받은 수가 세자리 수가 아닌 경우(5자리)', () => {
        expect(() => {
            const exception = new Exception('12345', 'process');
            exception.checkInputException();
        }).toThrow();
    });

    test('입력 받은 수가 서로 다른 수가 아닌 경우', () => {
        expect(() => {
            const exception = new Exception('112', 'process');
            exception.checkInputException();
        }).toThrow();
    });

    test('입력 받은 수에 0이 포함된 경우', () => {
        expect(() => {
            const exception = new Exception('120', 'process');
            exception.checkInputException();
        }).toThrow();
    });

    test('재시작 여부 확인 시 1또는 2이외의 값이 입력될 경우', () => {
        expect(() => {
            const exception = new Exception('3', 'replay');
            exception.checkReplayInputException();
        }).toThrow();
    });
});
