import * as MissionUtils from "@woowacourse/mission-utils";

class App {
  computerNum() {
    const computerTheeDifferNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    return computerTheeDifferNum;
  }

  userNum() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      answer = Number(answer);
      if (isThreeDifferNum(answer)) {
        console.log('${answer}\n');
        return answer;
      }
      gameEixt();
    })
  }

  isThreeDifferNum(number) {
    const numArr = Array.from(number);
    const set = new Set(numArr);

    return (number != NaN) && (number.length === 3) && (number.lenth === set.size) ? true : false;
  }

  compareNum(userNum, computerNum) {
    let ballCount = {
      strike: 0,
      ball: 0,
      nothing: 0,
    };
    const userNum = userNum.toString();
    const computerNum = computerNum.toString();
    for (let index = 0; index < 3; index++) {
      if (userNum[index] === computerNum[index]) {
        ballCount.strike++;
        continue;
      } else if (computerNum.match(userNum[index]) === userNum[index]) {
        ballCount.ball++;
        continue;
      }
      ballCount.nothing++;
    }

    return ballCount;
  }

  printBallCount(ballCount) {
    if (ballCount.strike > 0) {
      console.print('${ballCount.strike}스트라이크');
    }
    if (ballCount.ball > 0) {
      console.print('${ballCount.ball}볼');
    }
    if (ballCount.nothing === 3){
      console.print('낫싱');
    }
    console.print('\n');
  }

  play() {
    const computerNum = this.computerNum();
    let userNum = this.userNum();
    let ballCount = this.compareNum(userNum, computerNum);

  }
}

const app = new App();
app.play();

export default App;