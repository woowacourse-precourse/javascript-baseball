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




  async play() {
    let computer = await this.random(); 
    let user = await this.input();
    let bNum, sNum;
    [bNum, sNum] = this.compare(user, computer);
    //console.log(bNum, sNum);
    
  }

}


  

const app = new App();
app.play();


module.exports = App;
