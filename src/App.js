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


  async play() {
    let computer = await this.random(); 
    let user = await this.input(); 
    
  }

}


  

const app = new App();
app.play();


module.exports = App;
