const {is3Letters, isOnlyNumber, areEachDifferent, stringToNumberInList} = require('../src/Utils');

describe("is3Letters 함수 테스트", () => {
    test("테스트 1", () => {
        const result = is3Letters('123');

        expect(result).toEqual(true);
    });

    test("테스트 2", () => {
        const result = is3Letters('1234');

        expect(result).toEqual(false);
    });

    test("테스트 3", () => {
        const result = is3Letters('12');

        expect(result).toEqual(false);
    });
});

describe("isOnlyNumber 함수 테스트", () => {
    test("테스트 1", () => {
        const result = isOnlyNumber('123');

        expect(result).toEqual(true);
    });

    test("테스트 2", () => {
        const result = isOnlyNumber('a12');

        expect(result).toEqual(false);
    });
});

describe("areEachDifferent 함수 테스트", () => {
    test("테스트 1", () => {
        const result = areEachDifferent('123');

        expect(result).toEqual(true);
    });

    test("테스트 2", () => {
        const result = areEachDifferent('122');

        expect(result).toEqual(false);
    });


    test("테스트 3", () => {
        const result = areEachDifferent('121');

        expect(result).toEqual(false);
    });
});

describe("stringToNumberInList 함수 테스트", () => {
    test("테스트 1", () => {
        const result = stringToNumberInList('123');

        expect(result).toEqual([1, 2, 3]);
    });
});