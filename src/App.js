const MissionUtils = require("@woowacourse/mission-utils");


class App {
  constructor(){
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  play() {
    return this.startGame();
  }

  startGame() {
    this.computerNumber = [];
    this.makeComputerNumber ()
    return this.getUserNumber()
  }

  makeComputerNumber () {
    let makedComputerNum = this.makeRandomNum();
    return this.computerNumber.push(makedComputerNum.join(''))
  }

  makeRandomNum() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  getUserNumber () {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userNumber) => {
      return this.inputChecker(userNumber)
    });
  }

  inputChecker (userNumber) {
    if (userNumber.length !== 3){
      throw new Error ('3자리 수를 입력하세요.')
    }
    
    if ([...userNumber].includes('0')) {
      throw new Error ('1~9의 숫자만 입력하세요')
    }
    if (this.duplicationCheck(userNumber) == false){
      throw new Error ('서로 중복되지 않는 수를 입력하세요')
    }


    return this.readyResultCheck(userNumber)
  }

  readyResultCheck (userNumber) {
    const computerNumber = this.computerNumber[0]
    return this.checkStrikeResult(computerNumber, userNumber)
  }

  checkStrikeResult(computerNum, userNum) {
    let strikeResultAndIndex = this.countStrike(computerNum, userNum);
    return this.checkBallResult(computerNum, userNum, strikeResultAndIndex)
  }

  countStrike(computerNum, userNum) {
    let strike = 0;
    let strikeIndex = [];
    for (let i = 0; i < 3; i++) {
      if (computerNum[i] == userNum[i]) {
        strike += 1;
        strikeIndex.push(i);
      }
    }
    return [strike, strikeIndex]
  }

  checkBallResult(computerNum, userNum, strikeResultAndIndex) {
    const strikeResult = strikeResultAndIndex[0];
    const strikeIndex = strikeResultAndIndex[1];

    const ballResult = this.countBall(computerNum, userNum, strikeIndex);

    return this.scoreChecker([strikeResult, ballResult], computerNum)
  }

  countBall(computerNum, userNum, strikeIndex) {
    const listOfComAndUser = this.exceptStrikedNumbers(computerNum, userNum, strikeIndex);
    const comLs = listOfComAndUser[0];
    const userLs = listOfComAndUser[1];

    return comLs.filter(item => userLs.includes(item)).length
  }

  exceptStrikedNumbers(computerNum, userNum, strikeIndex) {
    let comLs = [...computerNum];
    let userLs = [...userNum];

    for (let i of strikeIndex) {
      delete comLs[i];
      delete userLs[i] ;
    }
    comLs = comLs.filter(comLsItem => comLsItem !== undefined );
    userLs = userLs.filter(userLsItem => userLsItem !== undefined );

    return [comLs, userLs]
  }

  scoreChecker(results, computerNum) {
    const strikeResult = results[0];
    const ballResult = results[1];

    if (strikeResult == 3) {
      MissionUtils.Console.print('3스트라이크')
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임종료');
      return this.chooseReStart();
    }
    if (strikeResult == 0 && ballResult == 0){
      MissionUtils.Console.print('낫싱');
      return this.getUserNumber(computerNum)
    }
    else {
      return this.scoreSpeaker(ballResult, strikeResult, computerNum)
      }
  }

  scoreSpeaker(ballResult, strike, computerNum) {
    const announcement = []
    if (ballResult > 0) announcement.push(ballResult + '볼');
    if (strike > 0) announcement.push(strike + '스트라이크');
    MissionUtils.Console.print(announcement.join(' '));
    return this.getUserNumber(computerNum)
  }

  chooseReStart() {
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (answer) => {
      if (answer == 1) return this.startGame()
      if (answer == 2) return 
      throw new Error('1이나 2를 입력하세요.')
    })
  }

  duplicationCheck (numForCheck){
    if (numForCheck[0] == numForCheck [1]) return false
    else if (numForCheck[1] == numForCheck[2]) return false
    else if (numForCheck[0] == numForCheck[2]) return false
  }
}

module.exports = App;

