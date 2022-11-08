const { Random, Console } = require("@woowacourse/mission-utils");

const KEY = {
  NUM_SIZE: 3,
  RESTART: '1',
  QUIT: '2',
};


class App {

  constructor() {
    this.computerInputNums = '';
    this.userInputNums = '';
  }

  play(){
    Console.print("숫자 야구 게임을 시작합니다.");
    this.startGame();
  }

  startGame(){
    this.computerInput();
    this.userInput();
  }
  

  computerInput(){
    const computer = [];
    while (computer.length < KEY.NUM_SIZE) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    this.computerInputNums = computer;
  }

  userInput(){
    return Console.readLine('숫자를 입력해주세요 : ',(input) => {
      this.checkUserInput(input);
      this.compareInput(input);
      Console.close();
      })
  }

  checkUserInput(userInput){
    if(userInput.length!==KEY.NUM_SIZE) throw new Error("3자리의 수를 입력해주세요.");
    if(new Set(userInput).size!==KEY.NUM_SIZE) throw new Error("중복된 숫자가 없도록 입력해주세요.");
    if(userInput.includes(0)) throw new Error("1~9 범위의 숫자로 구성된 수를 입력해주세요.");
  }


  askRestartOrQuit(){
    Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    Console.readLine('', (answer) => {
      if(answer === KEY.RESTART) return this.startGame();
      if(answer === KEY.QUIT) return Console.print("게임 종료");
    })
  }



  compareInput(userInput){
    this.userInputNums = userInput;
    const subtractArr = this.computerInputNums.map((x,y) => x-this.userInputNums[y]);
    const zeroCount = subtractArr.reduce((count, data) => data == 0 ? count + 1 : count, 0);
    if(zeroCount == KEY.NUM_SIZE){
      Console.print("3스트라이크");
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return this.askRestartOrQuit();
    }

    this.getHint();

    return this.userInput();

  }

  getHint(){
    let strikeCount = 0;
    let ballCount = 0;

    let subtractArr = this.computerInputNums.map((x,y) => x-this.userInputNums[y]);
    let zeroCount = subtractArr.reduce((count, data) => data == 0 ? count + 1 : count, 0);

    let difference = this.computerInputNums.filter(x => !this.userInputNums.includes(x));

    strikeCount = zeroCount;
    ballCount = KEY.NUM_SIZE-strikeCount-difference.length;

    if(ballCount != 0 && strikeCount !=0) return Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
    if(ballCount != 0 && strikeCount == 0) return Console.print(`${ballCount}볼`);
    if(ballCount == 0 && strikeCount != 0) return Console.print(`${strikeCount}스트라이크`);
    
    return Console.print("낫싱");

  }

}

module.exports = App;
