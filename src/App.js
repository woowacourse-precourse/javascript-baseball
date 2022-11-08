const MU = require('@woowacourse/mission-utils');
const readLine = require('readline');

const print = MU.Console.print;
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class App {
  constructor(){
    this.myNumber = MU.Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  check(input){
    if(input.length !== 3){
      throw new Error('세자리 숫자를 입력해주세요.');
    }
  }

  compare(input){
    input = input.split('').map((num) => parseInt(num));
    let strike = 0;
    let ball = 0;
    for(let i = 0; i < 3; i++){
      if(input[i] === this.myNumber[i]){
        strike++;
      }else if(this.myNumber.includes(input[i])){
        ball++;
      }
    }
    return [strike, ball];
  }

  play() {
    print("숫자 야구 게임을 시작합니다.");
    rl.setPrompt('숫자를 입력해주세요: ');
    rl.prompt();
    rl.on('line', (input) => {
      try{
        this.check(input);
        const [strike, ball] = this.compare(input);
        let printResult = '';
        if(strike === 0 && ball === 0){
          printResult = '낫싱';
        }else{
          if(ball !== 0){
            printResult += `${ball}볼 `;
          }
          if(strike !== 0){
            printResult += `${strike}스트라이크`;
          }
        }
        print(printResult);
        if(strike === 3){
          print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
          rl.question('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (answer) => {
            if(answer === '1'){
              this.myNumber = MU.Random.pickUniqueNumbersInRange(1, 9, 3);
              this.play();
            }else if(answer === '2'){
              rl.close();
            }else{
              print('잘못 입력하셨습니다.');
              rl.close();
            }
          });
        }else{
          rl.prompt();
        }
      }catch(e){
        throw new Error(e);
      }
    });
    rl.on('close', () => {
      print('게임을 종료합니다.');
    });
  }
}

// const app = new App();
// app.play();

module.exports = App;
