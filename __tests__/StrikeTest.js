const App = require('../src/App');
const app = new App();

describe("스트라이크 개수 체크",() => {
    test('컴퓨터가 랜덤하게 뽑은 값은 2 1 3 입니다', () => {
        //조건
        const computer = [2, 1, 3];
        const player = [1, 2, 3];
        const strikeCount = 1;
        const ballCount = 2;
    
        //실행
        const [checkStrike, checkBall] = app.checkBallCounts(computer, player);
    
        //평가
        expect(checkStrike).toBe(strikeCount);
        expect(checkBall).toBe(ballCount);
    });

    test('컴퓨터가 랜덤하게 뽑은 값은 4 3 2 입니다', () => {
        //조건
        const computer = [4, 3, 2];
        const player = [5, 2, 3];
        const strikeCount = 0;
        const ballCount = 2;
    
        //실행
        const [checkStrike, checkBall] = app.checkBallCounts(computer, player);
    
        //평가
        expect(checkStrike).toBe(strikeCount);
        expect(checkBall).toBe(ballCount);
    });

    test('컴퓨터가 랜덤하게 뽑은 값은 6 1 5 입니다', () => {
        //조건
        const computer = [6, 1, 5];
        const player = [4, 2, 3];
        const strikeCount = 0;
        const ballCount = 0;
    
        //실행
        const [checkStrike, checkBall] = app.checkBallCounts(computer, player);
    
        //평가
        expect(checkStrike).toBe(strikeCount);
        expect(checkBall).toBe(ballCount);
    });
});
