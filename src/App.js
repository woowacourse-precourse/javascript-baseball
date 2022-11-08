const MissionUtils = require("@woowacourse/mission-utils");
const { Console, Random } = MissionUtils;

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

  reGame() {
    Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (ans) => {
        if (ans === "1") {
          this.randomeNumber();
          this.inputNumber(); 
        }
        if (ans === "2") {
          MissionUtils.Console.print("게임 종료");
        }
        return;
      }
    );
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.randomNumber();
    this.inputNumber();
    MissionUtils.Console.close();
  }
}
const app = new App();
app.play();
module.exports = App;
