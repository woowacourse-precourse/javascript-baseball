const MissionUtils = require("@woowacourse/mission-utils");

class App {
  // 프로그램 시작
  play() {
    console.log(`숫자 야구 게임을 시작합니다.`);
    this.gameStart()
  }

  gameStart() {
    const computer = this.pickComputerNumber;
    const user = this.pickUserNumber;
    this.checkUser(user);
    const result = this.scoreCounter(user, computer);
    const answer = this.printScore(result);
    MissionUtils.Console.print(answer);
    if(answer === '3스트라이크'){
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      this.restartOrQuit();
    }
    else{
      this.gameStart();
    }
  }

  // 정답 숫자 선정
  get pickComputerNumber() {
    let computer = '';
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer += String(number);
      }
    }
    return computer;
  }

  // 사용자로부터 입력값 얻기
  get pickUserNumber() {
    let user = ''
    MissionUtils.Console.readLine('숫자를 입력해주세요.', (answer) => {
      console.log(`숫자를 입력해주세요 : ${answer}`);
      user = answer
    });
    return user;
  }

  // 입력값 예외 처리
  checkUser(user) {
    this.checkIfNumber(user);
    this.checkIfThreeDigit(user);
    this.checkIfDiff(user);
    this.checkIfnotZero(user);
    return true;
  }

  // 숫자인지 체크
  checkIfNumber(user) {
    if(isNaN(user)){ 
      MissionUtils.Console.close()
      throw new Error ('숫자가 아님');
      
    }
  }
  
  // 3자리인지 체크
  checkIfThreeDigit(user) {
    if(user.length != 3){
      MissionUtils.Console.close()
      throw new Error ('3자리가 아님');
      
    }
  }
  
  // 서로 다른 숫자인지 체크
  checkIfDiff(user) {
    let numberCheck = new Set(user);
    if(numberCheck.size != user.length){
      MissionUtils.Console.close()
      throw new Error ('서로 다른 숫자가 아님');
      
    }
  }
  
  // 1 ~ 9사이의 숫자인지 체크
  checkIfnotZero(user) {
    for (let i = 0; i < 3; i++){
      if(1 > Number(input[i]) || Number(input[i])>9){
        MissionUtils.Console.close()       
        throw new Error ('1 ~ 9 사이의 숫자가 아님');
      }
    }
  }

  // 정답 숫자와 사용자의 입력값 체크
  scoreCounter(user, computer) {
    let result = [0, 0]
    for(let i = 0; i < 3; i++){
      if(user[i] === computer[i]){
        result[0] += 1;
      }
      else if(computer.includes(user[i])){
        result[1] += 1;
      }
    }
    return result;
  }
  
  // 결과 출력
  printScore(result) {
    let answer = '';
    if(result[0] === 0 && result[1] == 0){
      answer = "낫싱";
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

  // 프로그램 종료 및 재시작
  restartOrQuit() {
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (answer) => {
      if(answer == '1'){
        this.play();
      }
      else{
        MissionUtils.Console.close();
      }
    });
  }
}

const app = new App();
app.play();

module.exports = App;
