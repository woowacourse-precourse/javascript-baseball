import * as MissionUtils from "@woowacourse/mission-utils";

class App {
  computerNum() {
    const computerTheeDifferNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    console.log(computerTheeDifferNum);
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
    for(let index=0; index<3; index++){
      if(userNum[index] === computerNum[index]){
        ballCount.strike++;
        continue;
      }else if(computerNum.match(userNum[index]) === userNum[index]){
        ballCount.ball++;
        continue;
      }
      ballCount.nothing++;
    }

    return ballCount;
  }
  
  play() {
    this.computerNum();
  }
}

const app = new App();
app.play();

export default App;