const MissionUtils = require("@woowacourse/mission-utils");

const MIN_RANGE = 1
const MAX_RANGE = 9
const PICK_LENGTH = 3

const ALL_STRIKE = "3스트라이크"

class App {
  constructor() {
    this.computerNumbers = [];
  }

  setComputerNumbers() {
    for (let i = 0; i < PICK_LENGTH; i++) 
      this.computerNumbers.push(MissionUtils.Random.pickNumberInRange(MIN_RANGE, MAX_RANGE));
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
    if (strikeCount == PICK_LENGTH)
      return ALL_STRIKE;

    else if (ballCount != 0 && strikeCount != 0) 
      return ballCount + "볼 " + strikeCount + "스트라이크 ";
    
    else if (ballCount != 0) 
      return ballCount + "볼";
    
    else if (strikeCount != 0) 
      return strikeCount + "스트라이크";
    
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

      resultComment = this.printResult(strikeCount, ballCount)
      MissionUtils.Console.print(resultComment);
      if (resultComment == ALL_STRIKE)
        this.checkGameEnd();
      else
        this.startGame();
    });
  }

  checkGameEnd() {
    console.log("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n", (isContinue) => {
      if (isContinue == 1) {
        this.setComputerNumbers();
        this.startGame();
      }
      else if (isContinue == 2) return;
    });
  }

  play() {
    console.log("숫자 야구 게임을 시작합니다.");
    this.setComputerNumbers();

    this.startGame();

    MissionUtils.Console.close();
  }
}

//테스트를 위한 호출
const app = new App();
app.play();

module.exports = App;
