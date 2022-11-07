const App = require("../src/App");

describe('기능 테스트', () => {
    test('컴퓨터 숫자가 1~9사이인지 확인', () => {
        const app = new App();
        const computer = app.pickComputerNumber;
        for(let i = 0; i < 3; i++){
            expect(() => Number(computer[i]) >= 1 && Number(computer[i]) <= 9).toBeTruthy();
        }
    })

    test('컴퓨터 숫자가 중복되지 않았는지 확인', () => {
        const app = new App();
        const computer = app.pickComputerNumber;
        const computerSet = new Set(computer);
        expect(() => computer.length == computerSet.size).toBeTruthy();
    })

    test('사용자 입력값이 숫자인지 확인', () => {
        const app = new App();
        expect(() => app.checkIfNumber(['i', 'l', 'e'])).toThrow(
            '숫자가 아님'
        );
    });

    test('사용자 입력값이 3자리인지 확인', () => {
        const app = new App();
        expect(() => app.checkIfThreeDigit(['1', '2', '3', '4'])).toThrow(
            '3자리가 아님'
        );
    });

    test('사용자 입력값이 서로 다른 숫자인지 확인', () => {
        const app = new App();
        expect(() => app.checkIfDiff(['1', '2', '2'])).toThrow(
            '서로 다른 숫자가 아님'
        );
    });

    test('사용자 입력값이 1~9 사이인지 확인', () => {
        const app = new App();
        expect(() => app.checkIfnotZero(['1', '2', '0'])).toThrow(
            '1 ~ 9 사이의 숫자가 아님'
        );
    });

    test('3스트라이크', () => {
        const app = new App();
        expect(app.scoreCounter([1, 2, 3], [1, 2, 3])).toEqual([3, 0]);
    });

    test('낫싱', () => {
        const app = new App();
        expect(app.scoreCounter([1, 2, 3], [4, 5, 6])).toEqual([0, 0]);
    });

    test('3볼', () => {
        const app = new App();
        expect(app.scoreCounter([1, 2, 3], [3, 1, 2])).toEqual([0, 3]);
    });

    test('1스트라이크 1볼', () => {
        const app = new App();
        expect(app.scoreCounter([1, 2, 3], [1, 3, 4])).toEqual([1, 1]);
    });
})