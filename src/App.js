const MissionUtils = require("@woowacourse/mission-utils");


class App {

  random(){
    return new Promise(function(resolve, reject) {
      let computer = [];
      while (computer.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
          computer.push(number);
        }
      }
      console.log("computer: " + computer); 
      resolve(computer);
    });
  }


  input() {
    return new Promise(function(resolve, reject) {
      var items = [];
      MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
            items = answer.split('').map((el) => parseInt(el));
            //console.log(user);
            resolve(items);  
            MissionUtils.Console.close();
          });
    });
    

  }

  compare(user, computer){
    let ball = user.filter(item => computer.includes(item));
    let strike = user.filter(item => item === computer[user.indexOf(item)]);

    let ballNum = ball.length - strike.length;
    let strikeNum = strike.length;
    return [ballNum, strikeNum];
  }

  print(ball, strike){
    if (ball + strike === 0){
      console.log("낫싱");
    }
    else if (strike === 3){
      let string = "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
      console.log(strike + "스트라이크");
      console.log(string);
    }
    else if (ball !== 0 && strike !== 0){
      console.log(ball + "볼 " + strike + "스트라이크");
    }
    else if(ball !== 0 && strike === 0){
      console.log(ball + "볼");
    }
    else{
      console.log(strike + "스트라이크");
    }

  }





  async play() {
    let computer = await this.random(); 
    let user = await this.input();
    let bNum, sNum;
    [bNum, sNum] = this.compare(user, computer);
    //console.log(bNum, sNum);

    this.print(bNum, sNum);

    
  }

}


  

const app = new App();
app.play();


module.exports = App;
