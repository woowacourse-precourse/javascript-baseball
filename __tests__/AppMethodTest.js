const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

describe('App 클래스 메소드 테스트', () => {
    test("createComputerNumber 컴퓨터 3개 숫자 생성 테스트", () => {
        const app = new App();
        expect(app.createComputerNumber()).toHaveLength(3);
    })
})