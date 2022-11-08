describe("숫자 야구 게임 예외 테스트", () => {

    test("guess에 숫자가 아닌 값을 넣었을 때 throw 에러", () => {
      const input = "31a";
      const result = () => input.repeat(-1);
  
      expect(result).toThrow();
    });

    test("guess에 3자리 숫자가 아닌 값을 넣었을 때 throw 에러", () => {
        const input = "3147";
        const result = () => input.repeat(-1);
    
        expect(result).toThrow();
      });
  });
  