const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor(){
    this.computerInputNum = []
  };

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.computerInputRandomNum();
    this.userInputRandomNum();
  };

  computerInputRandomNum(){
    this.computerInputNum = []
    let comNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3)
    if(this.computerInputNum.length = 3){
     this.computerInputNum.push(comNum);
    };
  };

  userInputRandomNum(){
    MissionUtils.console.readLine('숫자를 입력 해주세요 : ', (answer) => {
    this.checkError(answer)
    this.collectAnswer(answer)
   });
  };

  checkError(answer){
    const answerCheck = answer.toString().split('').map(Number)
    if(answerCheck.length !== 3) throw '숫자의 길이는 3자리 이하이여야 합니다.'
    if(answerCheck !== /^[1-9]+$/) throw '1~9 사이의 값 중에서 고르세요.'
    if(isNaN(answerCheck)) throw '숫자가 아닙니다.'
    duplicatedNum = answerCheck.map((el,i) => {
      if(el[i] === el[i+1]) throw '숫자가 중복 됐습니다.'
    });
  };

  collectAnswer(answer){
    userAnswer = answer.toString().split('').map(Number)
    checkStrike = 0;
    checkBall = 0;
    for(let i=0; i < userAnswer.length; i++){
      if(this.computerInputNum[i] === userAnswer[i]) checkStrike++
       else if(this.computerInputNum[i].includes(userAnswer)) checkBall++
    };
    this.getAnswer(checkStrike, checkBall)
  };

  getAnswer(checkStrike, checkBall){
    if(checkStrike !== 0) MissionUtils.Console.print(`${checkStrike} : Strike`);
    if(checkBall !== 0) MissionUtils.Console.print(`${checkBall} : Ball`);
    if(checkStrike === 0 && checkBall === 0) MissionUtils.Console.print('낫싱');

    if(checkStrike === 3) {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.endGame()
    };
  };

  endGame(){
    MissionUtils.console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. : ', (answer) => {
      this.resetGame(answer)
    });
  };

  resetGame(answer){
    if(answer = "1") app.play()
    else if(answer = "2") MissionUtils.Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
