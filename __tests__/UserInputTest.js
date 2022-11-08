const RANDOM_NUMBER = '123';

function countBallandStrike(input) {
    let record = { ball: 0, strike: 0 };

    input.split('').forEach((element, i) => {
        if (element === RANDOM_NUMBER[i]) record.strike += 1;
        if (element !== RANDOM_NUMBER[i] && RANDOM_NUMBER.indexOf(element) > -1)
            record.ball += 1;
    });

    return record;
}

describe('유저 인풋에 대한 결과 객체 출력', () => {
    test('124 숫자가 입력되면 ball 0, strike 2의 객체가 출력', () => {
        expect(countBallandStrike('124')).toEqual({ ball: 0, strike: 2 });
    });

    test('456 숫자가 입력되면 ball 0, strike 0의 객체가 출력', () => {
        expect(countBallandStrike('456')).toEqual({ ball: 0, strike: 0 });
    });

    test('712 숫자가 입력되면 ball 2, strike 0의 객체가 출력', () => {
        expect(countBallandStrike('712')).toEqual({ ball: 2, strike: 0 });
    });
});
