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
  computerNumbers = [5, 8, 9];
  userNumbers = "597";

  let strikeCount = 0;

  for (let i = 0; i < 3; i++) 
    if (computerNumbers[i] == userNumbers[i]) strikeCount++;

  MissionUtils.Console.print(strikeCount);  //1이 출력되면 성공
});

test("ball 개수 count", () => {
  computerNumbers = [6, 5, 1];
  userNumbers = "251";

  let ballCount = 0;

  for (let i = 0; i < 3; i++) 
    if (computerNumbers.indexOf(parseInt(userNumbers[i])) != -1 &&
    computerNumbers.indexOf(parseInt(userNumbers[i])) != i) 
      ballCount++;

  MissionUtils.Console.print(ballCount);  //1이 출력되면 성공
});

test("결과출력 테스트", () => {
  ballCount = 2
  strikeCount = 1

  if (ballCount != 0 && strikeCount != 0)
    MissionUtils.Console.print(ballCount + "볼" + strikeCount + "스트라이크 ");
  else if (ballCount != 0)
    MissionUtils.Console.print(ballCount + "볼");
  else if (strikeCount != 0)
    MissionUtils.Console.print(strikeCount + "스트라이크");
  else if (strikeCount == 0 && ballCount == 0)
    MissionUtils.Console.print("낫싱");
})

test("ApplicationTest의 test case 출력테스트", () => {
  //589, 597(1볼 1스트라이크 출력)
  const PICK_LENGTH = 3
  const ALL_STRIKE = "3스트라이크"

  ballCount = 1;
  strikeCount = 1;

  if (strikeCount == PICK_LENGTH)
      console.log(ALL_STRIKE);

    else if (ballCount != 0 && strikeCount != 0) 
      console.log(ballCount + "볼 " + strikeCount + "스트라이크 ");
    
    else if (ballCount != 0) 
      console.log(ballCount + "볼");
    
    else if (strikeCount != 0) 
      console.log(strikeCount + "스트라이크");
    
    else if (strikeCount == 0 && ballCount == 0) 
      console.log("낫싱");
})