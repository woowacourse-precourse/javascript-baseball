const MissionUtils = require("@woowacourse/mission-utils");

const MIN_RANGE = 1
const MAX_RANGE = 9
const PICK_LENGTH = 3

const ALL_STRIKE = "3스트라이크"

class App {
  constructor() {
    this.computerNumbers = null;
  }

  setComputerNumbers() {
    this.computerNumbers = MissionUtils.Random.pickUniqueNumbersInRange(MIN_RANGE, MAX_RANGE, PICK_LENGTH);
  }

  checkStrike(userNumbers) {
    let strikeCount = 0;

    for (let i = 0; i < PICK_LENGTH; i++) 
      if (this.computerNumbers[i] == userNumbers[i]) strikeCount++;

    return strikeCount;
  }

  checkBall(userNumbers) {
    let ballCount = 0;

    for (let i = 0; i < PICK_LENGTH; i++) 
      if (this.computerNumbers.indexOf(parseInt(userNumbers[i])) != -1 &&
      this.computerNumbers.indexOf(parseInt(userNumbers[i])) != i) 
        ballCount++;

    return ballCount;
  }

  printResult(strikeCount, ballCount) {
    if (ballCount != 0 && strikeCount != 0) 
      return ballCount + "볼 " + strikeCount + "스트라이크 ";
    
    else if (ballCount != 0) 
      return ballCount + "볼";
    
    else if (strikeCount != 0) 
      return ALL_STRIKE;
    
    else if (strikeCount == 0 && ballCount == 0) 
      return "낫싱";
  }

  startGame() {
    let strikeCount;
    let ballCount;
    let resultComment; 

    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userNumbers) => { 
      strikeCount = this.checkStrike(userNumbers);
      ballCount = this.checkBall(userNumbers);

      MissionUtils.Console.print(resultComment = this.printResult(strikeCount, ballCount));
      if (resultComment == ALL_STRIKE)
        this.checkGameEnd();
      else
        this.startGame();
      // return resultComment;
    });
  }

  checkGameEnd() {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.", (isContinue) => {
      if (isContinue == 1) this.startGame();
      else if (isContinue == 2) return;
    });
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.setComputerNumbers();

    this.startGame();

    // if (gameResult == "3스트라이크")
    //   this.checkGameEnd();
    // else {
    //   this.startGame();
    // }
  }
}

//테스트를 위한 호출
const app = new App();
app.play();

module.exports = App;
