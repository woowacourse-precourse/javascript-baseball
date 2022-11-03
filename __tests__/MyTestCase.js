describe("build_answer 테스트", () => {
    test("3자리 배열 인지 확인", () => {
        const result = build_answer();
        expect(result).toHaveLength(3);
    });
    test("배열 객체의 타입이 숫자인지 확인", () => {
        const result = build_answer();
        expect(result[0]).any(Number);
        expect(result[1]).any(Number);
        expect(result[2]).any(Number);
    });
    test("중복없는 세자리 인지 확인", () => {
        const result = build_answer();
        const set_result = [...new Set(result)]
        expect(set_result).toHaveLength(3);
    });

})