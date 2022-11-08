const MissionUtils = require("@woowacourse/mission-utils");

function randomComputerNum(){
  const number = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  return number;
}

class App {

  play() {
    MissionUtils.Console.readLine('숫자 야구 게임을 시작합니다.\n숫자를 입력해주세요 : ', (answer) => {
      console.log(answer);
      Console.close();
    });

    let strike;
    let ball;
    var inputArray = answer.split('');

    while(number[i] !== answer) {
      strike = 0;
      ball = 0;
      for( var j = 0; j <number.length; j++) {
        for(var k = 0; k < number.length; k++) {
          if(number[j] == inputArray[k]){
            if(j === k) {
              strike++;
            }else {
              ball++;
            }
            break;
          }
        }
      }
    }
    // 게임 결과 출력 message
    if(strike == 3) {
      MissionUtils.Console.print("3개의 스트라이크\n 3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      MissionUtils.Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요");
    } else if (ball > 0 && strike > 0) {
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    } else if (ball > 0 && strike == 0) {
      MissionUtils.Console.print(`${ball}볼`);
    } else if (ball == 0 && strike >0 && strike <3) {
      MissionUtils.Console.print(`${strike}스트라이크`);
    } else if ( ball == 0 && strike == 0) {
      MissionUtils.Console.print("낫싱");
    }
  }
}

module.exports = App;
