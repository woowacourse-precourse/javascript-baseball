const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");
const setting = require("../src/Setting");


describe("숫자야구 함수 테스트", () => {
    test("숫자문자열을 int배열로 만들어 반환", () => {
      const input = "123";
      const result = setting.getInputIntArray(input);
  
      expect(result).toEqual([1, 2, 3]);
    });

    test("input길이가 3 아니면 false 반환", () => {
        const input = "12345";
        const result = setting.checkInput(input);
        expect(result).toEqual(false);
      });  
      
    test("input이 숫자로 된 문자열이 아니면 false 반환", () => {
        const input = "abc";
        const result = setting.checkInput(input);
        expect(result).toEqual(false);
      });               
});