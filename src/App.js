const MissionUtils = require("@woowacourse/mission-utils");
class App {
  randomNumber(){
    const computer = [];
    while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
     computer.push(number);
       }
     }    
  }
  isdupli(answer) {
    let cnt=0;
    for(let i=1;i<3;i++){
      if(answer[i]===answer[i-1]){
        cnt++;
      }
    }
    if(cnt>0) return true;
    return false;
  }
  inputNumber() {
    Console.readLine("숫자를 입력해주세요 : ", (ans) => {
      if (ans.length === 3 && !isNaN(Number(ans))) {
        MissionUtils.Console.print("숫자만 3개를 입력해주세요.");
      }else if(ans.length>3){
        MissionUtils.Console.print("숫자를 3개만 입력해주세요.");
      }else if(isdupli(ans)){
        MissionUtils.Console.print("중복되지 않은 숫자 3개를 입력해주세요.");
      }
      const playerNumber = [];
      let res = {};

        playerNumber.forEach((num, i) => {
        if (computer[i] === num) {
          res.strike = res.strike + 1 || 1;
        }
        if (computer[i] !== num && computer.includes(num)) {
          res.ball = res.ball + 1 || 1;
        }
      });
      resultGame();
    });
  }

  resultGame() {
    let resultValue = "";
    if (res.ball > 0) {
      resultValue += `${res.ball}볼 `;
    }else if(res.strike > 0) {
      resultValue += `${res.strike}스트라이크 `;
    }else if(!res.ball && !res.strike) {
      resultValue = "낫싱";
    }

    MissionUtils.Console.print(resultValue);
    if (res.strike === 3) {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    }else {
      inputNumber();
    } 
  }
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.randomNumber();
  }
}
const app = new App();
app.play();
module.exports = App;
