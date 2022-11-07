const { Console } = require("@woowacourse/mission-utils");
const GenerateRandomNumbers = require("./Utils/GenerateRandomNumbers");
const VerificateInput = require("./Utils/VerificateInput");
const Referee = require("./Utils/Referee");

class App {

  play(){
    Console.print('숫자 야구 게임을 시작합니다.')
    const RANDOM = GenerateRandomNumbers();
    console.log(RANDOM)
    this.Guess(RANDOM);
  }
  
  Guess(answer){
    Console.readLine('숫자를 입력해주세요 : ', (input) => {
      console.log(input)
      VerificateInput(input);
      if(Referee(answer,input)) this.Restart()
      else return this.PlayGame(answer)
    });
}

  Restart(){
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료')
    Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2 를 입력하세요 : ', (restart) => {
      if(restart == 1) return this.play();
      else if(restart == 2) return Console.close();
      else throw new Error('잘못된 입력입니다 (새로 시작하려면 1, 종료하려면 2 입력)')
    });
  }
}

const app = new App();
app.play();

module.exports = App;
