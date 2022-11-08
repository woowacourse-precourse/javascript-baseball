const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");


const getInputIntArray = (input) => {
    const userInputArray = [...input];
    const newArray = [];
    for (let i = 0; i < userInputArray.length; i++){
      newArray.push(parseInt(userInputArray[i]));
    }
    return newArray;
};


describe("숫자야구 함수 테스트", () => {
    test("숫자문자열을 int배열로 만들어 반환", () => {
      const input = "123";
      const result = getInputIntArray(input);
  
      expect(result).toEqual([1, 2, 3]);
    });

    
});