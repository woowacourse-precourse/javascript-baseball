const MissionUtils = require('@woowacourse/mission-utils');

class App {

  init(){
    this.computerArr=[];
    this.userArr=[];
  }

  makeUserInputNum(){
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
      this.userArr = input.split('').map(Number);
      // console.log(`userInput: ${this.userArr}`);
      this.printResult();
    });
  }

  printResult(){
    let strike, ball, nothing;
    this.isValid(this.userArr);
    [strike, ball, nothing] = this.playing();

    if(nothing === 0) MissionUtils.Console.print('낫싱');
    else if(strike === 3){
      MissionUtils.Console.print('3스트라이크');
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      this.isRepeat(); // 게임 재시작 여부 확인
    }
    else if(ball !== 0 && strike !== 0) MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    else if(ball === 0) MissionUtils.Console.print(`${strike}스트라이크`);
    else if(strike === 0) MissionUtils.Console.print(`${strike}스트라이크`);
    this.makeUserInputNum(); // 사용자 재입력
  }

  // 유효성 검사
  isValid(userInput){
    const NOT_THREE_NUM_ERROR = "입력은 3개까지 허용입니다."
    const NOT_DIGIT_ERROR = "숫자만 입력해야 합니다."
    const DUPLICATE_ERROR = "중복된 입력입니다."
    const NOT_ALLOW_ZERO_ERROR = "1~9사이의 숫자만 입력하세요"

    // 입력값 3자리인지 확인
    if(userInput.length !== 3) throw NOT_THREE_NUM_ERROR;

    // 숫자인지 확인
    if(!isNaN(userInput)) throw NOT_DIGIT_ERROR;

    // 중복 없는지 확인
    const array = [...userInput];
    const arraySet = new Set(array); 
    if(arraySet.size!==array.length) throw DUPLICATE_ERROR;

    // 1~9사이의 숫자인지 확인
    if(userInput.includes(0)) throw NOT_ALLOW_ZERO_ERROR;

    return true;
  }

  makeComputerInputNum(){
    const randomArr = [];
    while (randomArr.length < 3) {
      const temp = MissionUtils.Random.pickNumberInRange(1, 9);
      if(!randomArr.includes(temp)) randomArr.push(temp);
    }

    this.computerArr = [...randomArr];
    // console.log(`computerInput : ${this.computerArr}`);
  }

  // 결과 확인
  playing(){
    const same = this.computerArr.filter(x=>this.userArr.includes(x));
    let nothing = -1;
    let size = same.length;
    let strike = 0;
    let ball = 0;

    if(same.length === 0) nothing++;
    while(size--){
      if(this.computerArr.indexOf(same[size]) === this.userArr.indexOf(same[size])) strike++;
    }
    ball = same.length - strike;

    return [strike, ball, nothing];
  }

  isRepeat(){
    const INPUT_ERROR = "잘못된 입력입니다.(1, 2 이외의 입력)"
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (input) => {
      // console.log(`${input}`);
      if(input === '1') this.playBaseball();
      else if(input === '2'){
        MissionUtils.Console.print('게임 종료');
        MissionUtils.Console.close();
      }
      else throw INPUT_ERROR;
    });
  }

  playBaseball(){
    this.init();
    this.makeComputerInputNum();
    this.makeUserInputNum();
    this.isRepeat();
  }

  play() { // main
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.playBaseball();
  }

}

module.exports = App;
