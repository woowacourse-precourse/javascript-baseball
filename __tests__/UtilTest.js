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
