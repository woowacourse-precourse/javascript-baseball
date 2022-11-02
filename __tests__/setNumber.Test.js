const setNumber = require("../src/setNumber")
const MissionUtils = require("@woowacourse/mission-utils");

describe("초기 3자리 숫자 세팅", () => {
    test("중복 체크", () => {
        expect(setNumber).toNotEqual([3,3,3])
    })}
)