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

  clearComputerNumbers() {
    this.computerNumbers = [];
  }

  validCheckUserNumbers(userNumbers) {
    if (userNumbers.length != PICK_LENGTH) throw "error";   //숫자를 3개 입력하지 않은 경우

    const filterDuplicateNumberSet = new Set(userNumbers);
    if (userNumbers.length != filterDuplicateNumberSet.size) throw "error";   //중복 숫자 입력이 있는지 검사
  }

  isStrike(userNumbers, i) {
    if (this.computerNumbers[i] == userNumbers[i]) return 1;    //같은 경우 1을 반환
    return 0;
  }

  countStrikeNum(userNumbers) {
    let strikeCount = 0;
    for (let i = 0; i < PICK_LENGTH; i++) 
      strikeCount += this.isStrike(userNumbers, i);

    return strikeCount;
  }

  isBall(userNumbers, i) {
    if (this.computerNumbers.indexOf(userNumbers[i]) != -1 &&
    this.computerNumbers.indexOf(userNumbers[i]) != i) 
      return 1;
    return 0;
  }

  countBallNum(userNumbers) {
    let ballCount = 0;
    for (let i = 0; i < PICK_LENGTH; i++) 
      ballCount += this.isBall(userNumbers, i)

    return ballCount;
  }

  returnGameResult(strikeCount, ballCount) {
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

  checkGameEnd() {
    console.log("3개의 숫자를 모두 맞히셨습니다!");
    MissionUtils.Console.print("게임 종료");
    MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n", (isContinue) => {
      if (isContinue == 1) {
        this.clearComputerNumbers();
        this.setComputerNumbers();
        this.startGame();
      }
      else if (isContinue == 2) return;
    });
  }

  startGame() {
    let strikeCount = 0;
    let ballCount = 0;
    let gameResult; 

    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userNumbers) => { 
      const mapfn = (arg) => Number(arg);
      userNumbers = Array.from(userNumbers, mapfn);

      this.validCheckUserNumbers(userNumbers);

      strikeCount = this.countStrikeNum(userNumbers);
      ballCount = this.countBallNum(userNumbers);

      gameResult = this.returnGameResult(strikeCount, ballCount)
      MissionUtils.Console.print(gameResult);

      if (gameResult == ALL_STRIKE)
        this.checkGameEnd();
      else 
        this.startGame();
    });
  }

  play() {
    console.log("숫자 야구 게임을 시작합니다.");
    this.setComputerNumbers();

    this.startGame();
  }
}

//테스트를 위한 호출
const app = new App();
app.play();

module.exports = App;
