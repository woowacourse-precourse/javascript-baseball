const App = require("../src/App");
describe("기능 구현 함수 테스트", () => {
    test("checkInputError 테스트", () => {
        const inputs = [
            [1,1,2],
            [1,2],
            [1,2,3,4],
            [1,0,2],
            ['입','력','값']
        ];
        const messages = [
            'input overlap error',
            'input length error',
            'input length error',
            'input 1~9 range error',
            'input isDigit error'
        ];

        inputs.forEach((input, idx) => {
            expect(() => {
                const app = new App();
                app.checkInputError(input);
            }).toThrow(messages[idx]);
        })
        
    });

    test("setComputerNum 테스트", () => {
        const app = new App();
        const computer = app.setComputerNum();
        expect(() => {
            app.checkInputError(computer);
        }).not.toThrow()
    });

    test("countStrikeAndBall 테스트", () => {
        const computer = [1,2,3]
        const inputs = [
            [1,2,3],
            [1,2,4],
            [1,4,5],
            [3,1,2],
            [3,4,2],
            [3,4,5],
            [1,3,2],
        ];
        const results = [
            {strike: 3, ball:0},
            {strike: 2, ball:0},
            {strike: 1, ball:0},
            {strike: 0, ball:3},
            {strike: 0, ball:2},
            {strike: 0, ball:1},
            {strike: 1, ball:2}
        ];

        const app = new App();
        inputs.forEach((input, idx) => {
            expect(app.countStrikeAndBall(input, computer)).toEqual(results[idx]);
        })
    });

    test("resultString 테스트", () => {
        const results = [
            {strike: 3, ball:0},
            {strike: 2, ball:0},
            {strike: 1, ball:0},
            {strike: 0, ball:3},
            {strike: 0, ball:2},
            {strike: 0, ball:1},
            {strike: 1, ball:2}
        ];
        const messages = [
            '3스트라이크',
            '2스트라이크',
            '1스트라이크',
            '3볼',
            '2볼',
            '1볼',
            '2볼 1스트라이크'
        ];

        const app = new App();
        messages.forEach((message, idx) => {
            expect(app.resultString(results[idx])).toEqual(message);
        })
    });
}) 