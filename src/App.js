const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play () {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    const computer = this.pickComputerNumber;
    this.gameStart(computer)
  }

  gameStart (computer) {
    MissionUtils.Console.readLine('숫자를 입력해주세요.', (user) => {
      MissionUtils.Console.print(`숫자를 입력해주세요 : ${user}`);
      let userSplited = user.split('');
      this.checkUser(userSplited);
      const result = this.scoreCounter(userSplited, computer);
      const answer = this.printScore(result);
      MissionUtils.Console.print(answer);
      if (answer === '3스트라이크') {
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        this.restartOrQuit();
      }
      else {
        this.gameStart(computer);
      }
    });
  }

  get pickComputerNumber () {
    let computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  get pickUserNumber () {
    let user = '';
    MissionUtils.Console.readLine('숫자를 입력해주세요.', (answer) => {
      user = answer;
    });
    return user
  }

  checkUser (user) {
    this.checkIfNumber(user);
    this.checkIfThreeDigit(user);
    this.checkIfDiff(user);
    this.checkIfnotZero(user);
  }

  checkIfNumber (user) {
    for (let i = 0; i < 3; i++) {
      if (isNaN(user[i])) { 
        throw new Error ('숫자가 아님');
      }
    }
  }
  
  checkIfThreeDigit (user) {
    if (user.length != 3) {
      
      throw new Error ('3자리가 아님');
    }
  }
  
  checkIfDiff (user) {
    let numberCheck = new Set(user);
    if (numberCheck.size != user.length) {
      
      throw new Error ('서로 다른 숫자가 아님');
    }
  }
  
  checkIfnotZero (user) {
    for (let i = 0; i < 3; i++){
      if(1 > Number(user[i]) || Number(user[i])>9){
               
        throw new Error ('1 ~ 9 사이의 숫자가 아님');
      }
    }
  }

  scoreCounter (user, computer) {
    let result = [0, 0]
    for(let i = 0; i < 3; i++){
      if(user[i] == computer[i]){
        result[0] += 1;
      }
      else if(computer.includes(Number(user[i]))){
        result[1] += 1;
      }
    }
    return result;
  }
  
  printScore (result) {
    let answer = '';
    if (result[0] === 0 && result[1] == 0) {
      answer = '낫싱';
    }
    else if (result[0] === 0 && result[1] > 0){
      answer = `${result[1]}볼`;
    }
    else if(result[0] > 0 && result[1] === 0){
      answer = `${result[0]}스트라이크`;
    }
    else{
      answer = `${result[1]}볼 ${result[0]}스트라이크`;
    }
    return answer;
  }

  restartOrQuit () {
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (answer) => {
      MissionUtils.Console.print(`게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n${answer}`);
      if (answer == '1') {
        this.play();
      }
      else {
        MissionUtils.Console.close();
      }
    });
  }
}

const app = new App();
app.play();

module.exports = App;
