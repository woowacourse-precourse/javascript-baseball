const MissionUtils = require("@woowacourse/mission-utils");

test("컴퓨터 랜덤값 확인", () => {
    computer = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    // console.log(computer);
});

test("MissionUtils를 통한 출력 확인", () => {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.")
    MissionUtils.Console.readLine('숫자를 입력해주세요.', (answers) => {
      console.log(`숫자: ${answers}`);
    });
});

test("strike 개수 count", () => {
  computerNumbers = [1, 3, 5];
  userNumbers = [1, 2, 5];

  let strikeCount = 0;

  for (let i = 0; i < 3; i++) {
    if (computerNumbers[i] == userNumbers[i]) strikeCount++;
  }

  MissionUtils.Console.print(strikeCount);  //2가 출력되면 성공
});

test("ball 개수 count", () => {
  computerNumbers = [1, 3, 5];
  userNumbers = [5, 1, 3];

  let ballCount = 0;

  for (let i = 0; i < 3; i++) {
    if (computerNumbers.indexOf(userNumbers[i]) != -1 && 
    computerNumbers.indexOf(userNumbers[i]) != i) 
      ballCount++;
  }

  MissionUtils.Console.print(ballCount);  //3이 출력되면 성공
});