const findStrikeBall = require('../src/gameUtils');

describe('사용자 추측으로 볼 / 스트라이크 / 낫싱 판단 테스트', () => {
    test('123과 456 테스트', () => {
        const { strike, ball } = findStrikeBall('123', '456');
        expect(strike === 0 && ball === 0).toBeTruthy();
    });
    test('123과 123 테스트', () => {
        const { strike, ball } = findStrikeBall('123', '123');
        expect(strike === 3 && ball === 0).toBeTruthy();
    });
    test('123과 312 테스트', () => {
        const { strike, ball } = findStrikeBall('123', '312');
        expect(strike === 0 && ball === 3).toBeTruthy();
    });
    test('583과 532 테스트', () => {
        const { strike, ball } = findStrikeBall('583', '532');
        expect(strike === 1 && ball === 1).toBeTruthy();
    });
});
