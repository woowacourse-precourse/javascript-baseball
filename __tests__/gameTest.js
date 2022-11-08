const MissionUtils = require("@woowacourse/mission-utils");
const app = require("../src/App");

const func = new app();

describe("테스트", () => {
  test("컴퓨터에 저장된 숫자 확인", () => {
    const result = func.computerExtrackNumber().length;

    expect(result).toEqual(3);
  });
});
