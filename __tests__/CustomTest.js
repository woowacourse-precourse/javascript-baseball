const { findStrikeBall, makePhrase } = require('../src/gameUtils');
const { validateGameInput } = require('../src/validate');

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

describe('볼 / 스트라이크로 힌트 문구 도출 테스트', () => {
    test('낫싱 테스트', () => {
        const phrase = makePhrase(0, 0);
        expect(phrase).toBe('낫싱');
    });
    test('1볼 테스트', () => {
        const phrase = makePhrase(0, 1);
        expect(phrase).toBe('1볼');
    });
    test('1스트라이크 테스트', () => {
        const phrase = makePhrase(1, 0);
        expect(phrase).toBe('1스트라이크');
    });
    test('2볼 1스트라이크 테스트', () => {
        const phrase = makePhrase(1, 2);
        expect(phrase).toBe('1스트라이크 2볼');
    });
    test('3스트라이크 테스트', () => {
        const phrase = makePhrase(3, 0);
        expect(phrase).toBe('3스트라이크');
    });
});

describe('사용자 추측 검증 테스트', () => {
    test('숫자가 아닌 입력 테스트', () => {
        expect(() => {
            validateGameInput('abc');
        }).toThrow();
    });
    test('3자리가 아닌 입력 테스트', () => {
        expect(() => {
            validateGameInput('1234');
        }).toThrow();
    });
    test('범위 밖 숫자 입력 테스트', () => {
        expect(() => {
            validateGameInput('101');
        }).toThrow();
    });
    test('중복된 숫자 입력 테스트', () => {
        expect(() => {
            validateGameInput('111');
        }).toThrow();
    });
});