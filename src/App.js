const MissionUtils = require("@woowacourse/mission-utils");
const { Console, Random } = MissionUtils;

class App {
  computer;
  playerNumber;

 
  check(answer) {
    if (answer.length === 3 && !isNaN(Number(answer))) {
      return false;
    }
  
    return true;
  }

  isdupli(answer) {//중복숫자확인
    let cnt=0;
    for(let i=1;i<3;i++){
      if(answer[i]===answer[i-1]){
        cnt++;
      }
   }
   if(cnt>0) return true;
    return false;
  }


  strike(num, i) {
    return this.computer[i] === num;
  }

  ball(num, i) {
    return this.computer[i] !== num && this.computer.includes(num);
  }

  randomNumber(){
    this.computer = [];
    while (this.computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
    if (!this.computer.includes(number)) {
      this.computer.push(number+"");
       }
     }    
 
  }
  inputNumber() {
    Console.readLine("숫자를 입력해주세요 : ", (ans) => {
      if(this.check(ans)) {
        throw new Error("숫자만 3개를 입력해주세요.");
      }
       if(this.isdupli(ans)){
         throw new Error("중복되지 않은 숫자 3개를 입력해주세요.");
       }
      this.playerNumber = [...ans];
       this.res = {};

       this.playerNumber.forEach((num, i) => {
        if (this.strike(num, i)) {
          this.res.strike = this.res.strike + 1 || 1;
        }
        if (this.ball(num,i)) {
          this.res.ball = this.res.ball + 1 || 1;
        }
      });

      this.resultGame();
      this.reGame();
    });
  }

  resultGame() {
    let resultValue = "";
    if (this.res.ball > 0) {
      resultValue += `${this.res.ball}볼 `;
    }
    if(this.res.strike > 0) {
      resultValue += `${this.res.strike}스트라이크 `;
    }
    if(!this.res.ball && !this.res.strike) {
      resultValue = "낫싱";
    }

    Console.print(resultValue);
    if (this.res.strike === 3) {
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    }else {
      this.inputNumber();
    } 
  }

  reGame() {
    Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (ans) => {
        if (ans === "1") {
          this.randomNumber();
          this.inputNumber(); 
        }
        if (ans === "2") {
          Console.print("숫자 야구 게임을 종료합니다.");
        }
        if(ans !=="1"||ans !=="2"){
           Console.print("1과 2 문자만 입력 가능합니다.");
        }
        return;
      }
    );
  }

  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.randomNumber();
    this.inputNumber();
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
