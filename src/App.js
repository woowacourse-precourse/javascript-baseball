const MissionUtils = require('@woowacourse/mission-utils');

class App {
  // play() {}
  constructor(){ // 일단 배열 초기화
    this.computerArr=[];
    this.userArr=[];
  }

  play() { // main
    // 시작 메시지 출력
    const computer = new Set(); // set은 중복값 허용x
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    while (computer.size < 3) {
      computer.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }
    this.computerArr = [...computer]; // 배열로 바꿔야 출력 가능 // 배열 내용은 number
    console.log(`computer : ${this.computerArr}, type: ${typeof(this.computerArr[0])}`);

    let strr, ball, nothing;
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
      // userinput은 computerinput과 다르게 123 이렇게 주어짐
      this.userArr = input.split('').map(Number);
      MissionUtils.Console.print(`input: ${this.userArr}`); // this.userArr[0] 이렇게 뽑아보면 number 확인

      if(this.isValid(this.userArr)){ // 만약 유효성 검사 만족하면       
        // 결과 확인
        [strr, ball, nothing] = this.baseball();
        console.log(`strr : ${strr}, ball : ${ball}, nothing : ${nothing}`);
        if(nothing === 0){
          MissionUtils.Console.print('낫싱');
        }
        else if(strr === 3){
          MissionUtils.Console.print('3스트라이크');
          MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        }
        else if(ball !== 0 && strr !== 0){
          MissionUtils.Console.print(`${ball}볼 ${strr}스트라이크`);
        }
        else if(ball === 0){
          MissionUtils.Console.print(`${strr}스트라이크`);
        }
        else if(strr === 0){
          MissionUtils.Console.print(`${strr}스트라이크`);
        }
      }
    });
  }

  // 유효성 검사
  isValid(userInput){
    const NOT_NUMBER_ERROR = "입력은 3개까지 허용입니다."
    const NOT_DIGIT_ERROR = "숫자만 입력해야 합니다."
    // 입력값 3자리인지 확인 => set은 중복 허용 하지 않기에 같은 숫자 들어온다면 3자리 입력이라도 중복되어 자릿수 줄어든다.
    if(userInput.length !== 3) throw NOT_NUMBER_ERROR;

    // 숫자인지 확인
    if(!isNaN(userInput)) throw NOT_DIGIT_ERROR; // true면 문자, false면 숫자

    // 중복 없는지 확인

    return true;

  }

  // 결과 확인
  baseball(){
    console.log(`userinput: ${this.userArr} type: ${typeof(this.userArr)}, ${typeof(this.userArr[0])}`);
    console.log(`computerinput: ${this.computerArr} type: ${typeof(this.computerArr)}, ${typeof(this.computerArr[0])}`);
    // arr 자체는 object. 배열의 요소는 number
    const strike = this.computerArr.filter(x=>this.userArr.includes(x));
    let nothing = -1;

    console.log(`strike : ${strike}, length : ${strike.length}`);

    if(strike.length === 0) nothing++; // 아무것도 겹치는거 없음
    let size = strike.length;
    let strr = 0;
    let ball = 0;
    while(size--){
      if(this.computerArr.indexOf(strike[size]) === this.userArr.indexOf(strike[size])){ // 같은 자리에 있으면
        strr++;
      }
    }
    ball = strike.length - strr;

    console.log(`ball : ${ball}, strike : ${strr}, nothing : ${nothing}`)

    console.log(`배열 두개 겹치는지 확인` + this.computerArr.filter(x=>this.userArr.includes(x)));

    return [strr, ball, nothing];
  }
}

module.exports = App;
