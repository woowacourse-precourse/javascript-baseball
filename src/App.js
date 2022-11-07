const MissionUtils = require("@woowacourse/mission-utils");

class App {
  // 예외 처리
  exceptionForUserNumbers(input){
    const check = /^[0-9]+$/; 
    if(input.length>3){
      return true;
    }
    if(!check.test(input)){
      return true;
    }
    const test = [...input];
    if(test.length !== [...new Set(test)].length){
      return true;
    }
  }
  
  exceptionForQuitOption(input){
    if(!(input==='1'||input==='2')){
      return true;
    }
  }

  initBaseballGame(){
    const NUMBER_LENGTH = 3;
    const computerNumbers = this.makeComputerNumbers(NUMBER_LENGTH);
    this.playOneRound(computerNumbers);
  }

  makeComputerNumbers(NUMBER_LENGTH){
    const computerNumbers = new Set([]);
    while ([...computerNumbers].length < NUMBER_LENGTH){
      computerNumbers.add(MissionUtils.Random.pickNumberInRange(1,9));
    }
    return [...computerNumbers];
  }

  playOneRound(computerNumbers){
    MissionUtils.Console.readLine("숫자를 입력해 주세요. : ", (userNumbers)=>{
      if(this.exceptionForUserNumbers(userNumbers)){
        throw '입력 오류'
      }
      const [ball, strike] = this.countBallAndStrike(userNumbers, computerNumbers);
      this.showResult(ball, strike);
      if(strike!==3){
        return this.playOneRound(computerNumbers);
      }
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.quitOptions();
    })
  }

  countBallAndStrike(userNumbers, computerNumbers){//결과 계산 함수
    const strike = computerNumbers.reduce((count,computerNumber,index)=>(
      count+(String(computerNumber)===userNumbers[index])
    ), 0)
    const ball = computerNumbers.reduce((count, computerNumber)=>(
      count+([...userNumbers].includes(String(computerNumber)))
    ), 0) - strike;
    return [ball, strike];
  }

  showResult(ball, strike){//결과 출력 함수
    if (ball + strike ===0){
      MissionUtils.Console.print('낫싱');
      return;
    }
    let resultPrint = '';
    if(ball){
      resultPrint += `${ball}볼 `;
    }
    if(strike){
      resultPrint += `${strike}스트라이크`
    }
    MissionUtils.Console.print(resultPrint);
  }

  quitOptions(){
    MissionUtils.Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    MissionUtils.Console.readLine("",(option)=>{
      if(this.exceptionForQuitOption(option)){
        throw '종료 옵션 선택 에러'
      }
      if(option === '1'){
        this.initBaseballGame();
      }
      else if(option === '2'){
        MissionUtils.Console.close();
      }
    })
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.initBaseballGame();
  }
  
}

module.exports = App;
const app = new App();
app.play(); 