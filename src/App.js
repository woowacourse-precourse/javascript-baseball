const MissionUtils = require("@woowacourse/mission-utils");


class App {
  play() {
    console.log('숫자 야구 게임을 시작합니다.')
    // 1.컴퓨터 리스트 생성
    const computerLs = new Computer();
    const computer = computerLs.makeComNumLs();
    // 2.유저 리스트 입력
    const userLs = new User();
    const user = userLs.getUserLs();

    checkGameResult(computer, user)
  }
}

class Computer extends App {
  makeComNumLs() {
    return String(MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3));
  }

  checkGameResult(computerNum, userNum) {
    let strike = this.countStrike(computerNum, userNum);
    let ball = this.countBall(computerNum, userNum, strike[1]);

    
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


// console.log(computerLs.makeComNumLs());