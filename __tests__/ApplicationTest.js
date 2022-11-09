const App = require('../src/App');
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
    describe.skip('컴퓨터가 선택할 숫자 3개 정하기', () => {
        /*
            테스트 케이스의 목적(Proposal)
            : 컴퓨터가 선택할 숫자 3개 정할 때, 랜덤 숫자가 중복으로 나왔을 때 제외를 하는지 확인한다.

            최종 확인해야 하는 예상 결과 값(Expected result)
            : [1, 3, 5]

            어떠한 flow를 검증할 것인지(Flow)
            : 1이 중복이 됐을 때, 중복된 1은 넣지 않는다.

            이 flow를 검증하기 위해 어떤 가정이 필요한지(Assumption about flow)
            : pickNumberInRange에서 중복 1이 나와야 한다.
        */
        test('랜덤 숫자가 중복이 있게 나왔을 때', () => {
            /*
                step 1: given
                    - 테스트를 위해 준비하는 과정
                    - 테스트에 사용하는 변수, 입력 값 정의
                    - 필요시 mock 객체 정의
            */
            const randoms = [1, 3, 1, 5];
            mockRandoms(randoms);

            /*
                step 2: when
                    - 실제로 액션을 테스트하는 과정
                    - 한 번에 하나의 메서드만 수행하는 것이 바람직
            */
            const myApp = new App();
            myApp.pickComputerNumber();

            /* 
                step 3: then
                    - 테스트를 검증하는 과정
                    - 예상한 값, 실제 실행을 통해 나온 값을 검증
            */
            const computerNumbers = myApp.getComputerNumbers();
            expect(computerNumbers).toEqual([1, 3, 5]);
        });
    });

    describe.skip('게임을 시작했을 때', () => {
        /*
            Proposal
            : 게임을 시작했을 때, 정해진 문구가 나오는지 확인한다.

            Expected result
            : "숫자 야구 게임을 시작합니다."

            Flow
            : -

            Assumption about flow
            : -
        */
        test('시작 문구 출력', async () => {
            // 1. given
            const logSpy = getLogSpy();
            const myApp = new App();
            myApp.getGameState = jest.fn();
            myApp.getGameState.mockReturnValue(false);

            // 2. when
            await myApp.play();

            // 3. then
            expect(logSpy).toHaveBeenCalledWith('숫자 야구 게임을 시작합니다.');
        });
    });

    describe.skip('사용자 입력 검사', () => {
        /*
            Proposal
            : 사용자가 입력한 숫자가 숫자가 아닐 때, 예외를 일으키는지 확인한다.

            Expected result
            : throw new Error("inputNumber, 잘못된 값을 입력하였습니다.")

            Flow
            : 숫자가 아닌 값을 넣었을 때, 예외를 일으킨다.

            Assumption about flow
            : 입력 값으로 ['a11', '1a1', '11a', '1aa', 'a1a', 'aa1', 'aaa']를 넣는다.
        */
        test('숫자가 아닐 때', () => {
            // 1. given
            expect.assertions(7);

            const myApp = new App();
            myApp.inputNumber = jest.fn();

            const answers = ['a12', '1a2', '12a', '1ab', 'a1b', 'ab1', 'abc'];
            answers.reduce((acc, value) => {
                return acc.mockResolvedValueOnce(value);
            }, myApp.inputNumber);

            // 2. when & 3. then
            for (let i = 0; i < answers.length; i++) {
                expect(() => myApp.play()).rejects.toEqual(
                    new Error('inputNumber, 잘못된 값을 입력하였습니다.')
                );
            }
        });

        /*
            Proposal
            : 사용자가 입력한 숫자가 서로 다른 숫자가 아닐 때, 예외를 일으키는지 확인한다.

            Expected result
            : throw new Error("inputNumber, 잘못된 값을 입력하였습니다.")

            Flow
            : 서로 다른 숫자가 아닌 것을 넣었을 때, 예외를 일으킨다.

            Assumption about flow
            : 입력 값으로 ['121', '464', '444', '955']를 넣는다.
        */
        test('서로 다른 숫자가 아닐 때', async () => {
            // 1. given
            expect.assertions(4);

            const myApp = new App();
            myApp.inputNumber = jest.fn();

            const answers = ['121', '464', '444', '955'];
            answers.reduce((acc, value) => {
                return acc.mockResolvedValueOnce(value);
            }, myApp.inputNumber);

            // 2. when & 3. then
            for (let i = 0; i < answers.length; i++) {
                expect(() => myApp.play()).rejects.toEqual(
                    new Error('inputNumber, 잘못된 값을 입력하였습니다.')
                );
            }
        });

        test('세 글자가 아닐 때', () => {
            // 1. given
            expect.assertions(5);

            const myApp = new App();
            myApp.inputNumber = jest.fn();

            const answers = ['', '1', '12', '1234', '\n'];
            answers.reduce((acc, value) => {
                return acc.mockResolvedValueOnce(value);
            }, myApp.inputNumber);

            // 2. when & 3. then
            for (let i = 0; i < answers.length; i++) {
                expect(() => myApp.play()).rejects.toEqual(
                    new Error('inputNumber, 잘못된 값을 입력하였습니다.')
                );
            }
        });

        test('각 자리수가 1부터 9의 범위가 아닐 때', () => {
            // 1. given
            expect.assertions(5);

            const myApp = new App();
            myApp.inputNumber = jest.fn();

            const answers = ['012', '102', '1-12', '102', '120'];
            answers.reduce((acc, value) => {
                return acc.mockResolvedValueOnce(value);
            }, myApp.inputNumber);

            // 2. when & 3. then
            for (let i = 0; i < answers.length; i++) {
                expect(() => myApp.play()).rejects.toEqual(
                    new Error('inputNumber, 잘못된 값을 입력하였습니다.')
                );
            }
        });
    });

    describe('게임 결과', () => {
        /*
            Proposal
            : 컴퓨터 숫자와 사용자 숫자를 비교하여 낫싱인지 확인한다.

            Expected result
            : "낫싱"

            Flow
            : 컴퓨터 숫자와 사용자 숫자가 겹치는 게 없다면 낫싱

            Assumption about flow
            : 컴퓨터 숫자는 [1, 2, 3]으로 mock한다.
            : 입력 값으로 ['456', '789', '978']를 넣는다.
        */

        beforeAll(() => {
            const randoms = [1, 2, 3];
            mockRandoms(randoms);
        });

        test.only('낫싱일 때', async () => {
            expect.assertions(3);

            // 1. given
            const logSpy = getLogSpy();

            const answers = ['456', '789', '978'];
            MissionUtils.Console.readLine = jest.fn();
            answers.reduce((acc, input) => {
                return acc.mockImplementationOnce((question, callback) => {
                    callback(input);
                });
            }, MissionUtils.Console.readLine);

            const myApp = new App();
            myApp.getGameState = jest.fn().mockReturnOnce(true).mockReturnValueOnce(false);

            // const answers = ['456', '789', '978'];
            // answers.reduce((acc, value) => {
            //     return acc.mockResolvedValueOnce(value);
            // }, myApp.inputNumber);

            // 2. when
            await myApp.play();

            // 3. then
            expect(logSpy).toHaveBeenCalledWith('낫싱');
        });

        test('볼만 있을 때', () => {
            // 1. given
            // 2. when
            // 3. then
        });

        test('스크라이크만 있을 때', () => {
            // 1. given
            // 2. when
            // 3. then
        });

        test('볼과 스트라이크둘 다 있을 때', () => {
            // 1. given
            // 2. when
            // 3. then
        });

        describe('3스크라이크일 때', () => {
            test('문구 및 질문 출력', () => {
                // 1. given
                // 2. when
                // 3. then
            });

            test(' 질문에 1 또는 2의 대답이 아닐 때', () => {
                // 1. given
                // 2. when
                // 3. then
            });

            test('새로 시작', () => {
                // 1. given
                // 2. when
                // 3. then
            });

            test('게임 종료', () => {
                // 1. given
                // 2. when
                // 3. then
            });

            test('게임 종료', () => {
                // 1. given
                // 2. when
                // 3. then
            });
        });
    });
});

//https://mulder21c.github.io/jest/docs/en/next/using-matchers
