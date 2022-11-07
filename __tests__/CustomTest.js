const { findStrikeBall, makePhrase } = require('../src/gameUtils');
const { validateGameInput, validateRestartInput } = require('../src/validate');
const {
    INVALID_INPUT_LENGTH, INVALID_INPUT_RANGE, INVALID_INPUT_TYPE, DUPLICATE_INPUT
} = require('../src/config').GAME_INPUT_ERRORS;
const { INVALID_RESTART_INPUT } = require('../src/config').RESTART_INPUT_ERRORS;

describe('사용자 추측으로 볼 / 스트라이크 / 낫싱 판단 테스트', () => {
    test('123과 456 테스트', () => {
        const { strike, ball } = findStrikeBall('123', '456');
        expect(strike === 0 && ball === 0).toBe(true);
    });
    test('123과 123 테스트', () => {
        const { strike, ball } = findStrikeBall('123', '123');
        expect(strike === 3 && ball === 0).toBe(true);
    });
    test('123과 312 테스트', () => {
        const { strike, ball } = findStrikeBall('123', '312');
        expect(strike === 0 && ball === 3).toBe(true);
    });
    test('583과 532 테스트', () => {
        const { strike, ball } = findStrikeBall('583', '532');
        expect(strike === 1 && ball === 1).toBe(true);
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
        expect(phrase).toBe('2볼 1스트라이크');
    });
    test('3스트라이크 테스트', () => {
        const phrase = makePhrase(3, 0);
        expect(phrase).toBe('3스트라이크');
    });
});

describe('사용자 추측 검증 테스트', () => {
    test('숫자가 아닌 입력 테스트', () => {
        expect(() => validateGameInput('abc')).toThrow(INVALID_INPUT_TYPE);
    });
    test('3자리가 아닌 입력 테스트', () => {
        expect(() => validateGameInput('1234')).toThrow(INVALID_INPUT_LENGTH);
    });
    test('범위 밖 숫자 입력 테스트', () => {
        expect(() => validateGameInput('101')).toThrow(INVALID_INPUT_RANGE);
    });
    test('중복된 숫자 입력 테스트', () => {
        expect(() => validateGameInput('111')).toThrow(DUPLICATE_INPUT);
    });
});

describe('재시작 입력 검증 테스트', () => {
    test('숫자가 아닌 입력 테스트', () => {
        expect(() => validateRestartInput('yes')).toThrow(INVALID_RESTART_INPUT);
    });
    test('범위 밖 입력 테스트', () => {
        expect(() => validateRestartInput('3')).toThrow(INVALID_RESTART_INPUT);
    });
    test('정상 케이스, 재시작', () => {
        expect(validateRestartInput('1')).toBe(undefined);
    });
    test('정상 케이스, 끝', () => {
        expect(validateRestartInput('2')).toBe(undefined);
    });
});