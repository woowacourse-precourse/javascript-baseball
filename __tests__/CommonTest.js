const Common = require("../src/function/Common");

describe("공통 유닛 테스트", () => {
    test("사용자 입력 길이 검증: 3 length", () => {
        let text = '숫자를 입력해주세요 : ';
        let input = '456';
        let result = Common.checklength(text, input);
        expect(result).toEqual(true)
    });

    test("사용자 입력 길이 검증: 1 length", () => {
        let text = '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n';
        let input = '1';
        let result = Common.checklength(text, input);
        expect(result).toEqual(true)
    });

    test("사용자 입력 길이 검증: other length (1)", () => {
        let text = '숫자를 입력해주세요 : ';
        let input = '2';
        let result = Common.checklength(text, input);
        expect(result).toEqual(false)
    });

    test("사용자 입력 길이 검증: other length (2)", () => {
        let text = '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n';
        let input = '456';
        let result = Common.checklength(text, input);
        expect(result).toEqual(false)
    });
});