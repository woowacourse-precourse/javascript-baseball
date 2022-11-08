const fn = require("../src/gameFunctions");

describe("100번 반복 테스트", () => {
  test("서로다른 랜덤한 결괏값이 나오는지 테스트", () => {
    let count = 0;
    let testList = [];
    for (let i = 0; i < 100; i++) {
      //100 번 테스트트
      let tempString = fn.makeRandomNumbers();
      let set = new Set(tempString);
      testList.push(tempString);
      if (tempString.length === set.size) {
        count++;
      }
    }
    console.log(testList);
    expect(count).toBe(100);
  });
});
