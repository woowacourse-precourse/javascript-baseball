const MissionUtils = require("@woowacourse/mission-utils");


class App {
  play() {
    console.log('숫자 야구 게임을 시작합니다.')
  }

  startGame() {
    // 1.컴퓨터 리스트 생성
    const computerLs = new Computer();
    const computer = computerLs.makeComNumLs();
    // 2.유저 리스트 입력
    const userLs = new User();
    const user = userLs.getUserLs();

    this.checkGameResult(computer, user);
  }

  checkGameResult(computerNum, userNum) {
    let strike = this.countStrike(computerNum, userNum);
    let ball = this.countBall(computerNum, userNum, strike[1]);

    if (strike == 3) {
      console.log('3개의 숫자를 모두 맞히셨습니다! 게임종료');
      return this.chooseReStart();
    }
    
    if (strike == 0 && ball == 0){
      console.log('낫싱');
      return this.startGame()
    }

    else {
      console.log(scoreSpeaker(ball, strike))
      return this.startGame()
    }

  }

  scoreSpeaker(ball, strike) {
    const announcement = []
    if (ball > 0) announcement.push(ball + ' 볼');
    if (strike > 0) announcement.push(strike + ' 스트라이크');
    return announcement.join(' ')
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

  countBall(computerNum, userNum, strikeIndex) {
    const listOfComAndUser = this.exceptStrikedNumbers(computerNum, userNum, strikeIndex);
    const comLs = listOfComAndUser[0];
    const userLs = listOfComAndUser[1];

    return comLs.filter(item => userLs.includes(item)).length
  }

  chooseReStart() {
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (answer) => {
      MissionUtils.Console.close();
      if (answer == 1) return this.startGame()
      else if (answer == 2) return 
      else if (answer !== 1 || answer !== 2) throw '1이나 2를 입력하세요.'
      else '1이나 2를 입력하세요.'
    })
  }
}

class Computer extends App {
  makeComNumLs() {
    return String(MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3));
  }
}

class User extends App {
  getUserLs () {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      if (answer.length !== 3){
        throw '3자리 수를 입력하세요.'
      }
      else if (this.duplicationCheck(answer) == false){
        throw '서로 중복되지 않는 수를 입력하세요'
      }
      MissionUtils.Console.close();
      return answer
    });
  }

  duplicationCheck (numForCheck){
    if (numForCheck[0] == numForCheck [1]) return false
    else if (numForCheck[1] == numForCheck[2]) return false
    else if (numForCheck[0] == numForCheck[2]) return false
  }
}

module.exports = App;
module.exports = Computer;
module.exports = User;