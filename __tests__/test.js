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
});
