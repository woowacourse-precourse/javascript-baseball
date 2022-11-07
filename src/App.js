const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor(){
    this.NUMBER_LENGTH = 3;
  }

  isVaildPlayer(player){
    const test = [...player];
    return (
      (player.length <= this.NUMBER_LENGTH) &&     // 입력 길이 초과 확인
      (/^[0-9]+$/.test(player)) &&                 // 숫자로 이루어져 있는지 확인
      (test.length === [...new Set(test)].length)  // 중복 숫자 있는지 확인
    );
  }

  isVaildOption(option){
    return (
      (option==='1')||(option==='2')
    )
  }

  play(){
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.initGame();
  }

  initGame(){
    let computer = this.makeComputer();
    this.startASet(computer);
  }

  makeComputer(){
    const computer = new Set([]);
    let number;
    while([...computer].length < this.NUMBER_LENGTH){
      number = MissionUtils.Random.pickNumberInRange(1,9);
      computer.add(String(number));
    }
    return [...computer];
  }

  startASet(computer){
    MissionUtils.Console.readLine("숫자를 입력해 주세요 : ", (player)=>{
      if(!this.isVaildPlayer(player)) throw 'player error'
      this.playASet(player, computer);
    })
  }

  playASet(player, computer){
    const strike = this.countStrike(player, computer);
    const ball = this.countBall(player, computer, strike);
    this.showResult(ball, strike);

    if(!this.playerWin(strike)){
      return this.startASet(computer);
    }
    this.selectOptions();
  }

  countStrike(player, computer){
    const strike = computer.reduce((count, computer_number, index)=>(
      count + (computer_number === player[index])
    ), 0)
    return strike;
  }

  countBall(player, computer, strike){
    const ball = computer.reduce((ball, computer_number)=>(
      ball + ([...player].includes(computer_number))
    ), 0) - strike;
    return ball;
  }

  showResult(ball, strike){
    if (ball + strike === 0){
      MissionUtils.Console.print('낫싱');
      return;
    }
    let resultPrint = '';
    if (ball){
      resultPrint += `${ball}볼 `
    }
    if (strike){
      resultPrint += `${strike}스트라이크`
    }
    MissionUtils.Console.print(resultPrint);
  }

  playerWin(strike){
    return strike===this.NUMBER_LENGTH;
  }

  quitOrRestart(option){
    if(option === '1'){
      this.initGame();
    }
    else{
      MissionUtils.Console.close();
      return;
    }
  }

  selectOptions(){
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    MissionUtils.Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");

    MissionUtils.Console.readLine("",(option)=>{
      if(!this.isVaildOption(option)) throw 'option error'
      this.quitOrRestart(option);
    });
  }
}

module.exports = App;
