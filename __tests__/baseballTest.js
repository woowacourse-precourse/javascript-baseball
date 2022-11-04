const MissionUtils = require("@woowacourse/mission-utils");

test("컴퓨터 랜덤값 확인", () => {
    computer = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    console.log(computer);
});

test("MissionUtils를 통한 출력 확인", () => {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.")
    MissionUtils.Console.readLine('숫자를 입력해주세요.', (answers) => {
      console.log(`숫자: ${answers}`);
    });
});