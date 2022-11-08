const MissionUtils = require('@woowacourse/mission-utils');
// 에러 계속 뜨는데 입력 한번만 받도록 해놔서 그런듯
class App {
  // play() {}
  init(){ // 일단 배열 초기화
    this.computerArr=[];
    this.userArr=[];
  }

  playBaseball(){
    // 시작 메시지 출력
    //const computer = new Set(); // set은 중복값 허용x => 그냥 입력은 배열로 받고 나중에 중복을 set으로 확인
    this.init();

    const randomArr = []; // computer의 입력을 위한 임시 배열 
    while (randomArr.length < 3) {
      const temp = MissionUtils.Random.pickNumberInRange(1, 9);
      if(!randomArr.includes(temp)) randomArr.push(temp);
    }

    this.computerArr = [...randomArr]; // 배열로 바꿔야 출력 가능 // 배열 내용은 number
    console.log(`computer : ${this.computerArr}, type: ${typeof(this.computerArr[0])}`);


    ////////////

    let strike, ball, nothing;
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
      // userinput은 computerinput과 다르게 123 이렇게 주어짐
      this.userArr = input.split('').map(Number);
      console.log(`userArr: ${this.userArr}`); // this.userArr[0] 이렇게 뽑아보면 number 확인

      if(this.isValid(this.userArr)){ // 만약 유효성 검사 만족하면       
        // 결과 확인
        [strike, ball, nothing] = this.baseball();
        console.log(`strike : ${strike}, ball : ${ball}, nothing : ${nothing}`);
        if(nothing === 0){
          MissionUtils.Console.print('낫싱');
        }
        else if(strike === 3){
          MissionUtils.Console.print('3스트라이크');
          MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        }
        else if(ball !== 0 && strike !== 0){
          MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
        }
        else if(ball === 0){
          MissionUtils.Console.print(`${strike}스트라이크`);
        }
        else if(strike === 0){
          MissionUtils.Console.print(`${strike}스트라이크`);
        }
      }
    });

    //////////////

    this.isRepeat();
  }

  play() { // main
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.playBaseball();
  }

  // 유효성 검사
  isValid(userInput){
    const NOT_NUMBER_ERROR = "입력은 3개까지 허용입니다."
    const NOT_DIGIT_ERROR = "숫자만 입력해야 합니다."
    const DUPLICATE_ERROR = "중복된 입력입니다."

    // 입력값 3자리인지 확인 => set은 중복 허용 하지 않기에 같은 숫자 들어온다면 3자리 입력이라도 중복되어 자릿수 줄어든다. => 따로 확인
    if(userInput.length !== 3) throw NOT_NUMBER_ERROR;

    // 숫자인지 확인
    if(!isNaN(userInput)) throw NOT_DIGIT_ERROR; // true면 문자, false면 숫자

    // 중복 없는지 확인 => set으로 중복 확인
    const array = [...userInput];
    const arraySet = new Set(array); 
    console.log(arraySet.size, array.length); // length 대신 set은 size 사용
    if(arraySet.size!==array.length) throw DUPLICATE_ERROR; // 3개까지 허용. !==3

    return true;

  }

  // 결과 확인
  baseball(){
    console.log(`userinput: ${this.userArr} type: ${typeof(this.userArr)}, ${typeof(this.userArr[0])}`);
    console.log(`computerinput: ${this.computerArr} type: ${typeof(this.computerArr)}, ${typeof(this.computerArr[0])}`);
    // arr 자체는 object. 배열의 요소는 number
    const same = this.computerArr.filter(x=>this.userArr.includes(x));
    let nothing = -1;

    console.log(`strike : ${same}, length : ${same.length}`);

    if(same.length === 0) nothing++; // 아무것도 겹치는거 없음
    let size = same.length;
    let strike = 0;
    let ball = 0;
    while(size--){
      if(this.computerArr.indexOf(same[size]) === this.userArr.indexOf(same[size])){ // 같은 자리에 있으면
        strike++;
      }
    }
    ball = same.length - strike;

    console.log(`ball : ${ball}, strike : ${strike}, nothing : ${nothing}`)

    console.log(`배열 두개 겹치는지 확인` + this.computerArr.filter(x=>this.userArr.includes(x)));

    return [strike, ball, nothing];
  }

  isRepeat(){
    const INPUT_ERROR = "잘못된 입력입니다.(1, 2 이외의 입력)"
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (input) => {
      console.log(`재시작??? : ${input}`);
      if(input === '1'){
        // play(); // 로직 새로 구성해서 다시 시작할 수 있도록.
      }
      else if(input === '2'){
        MissionUtils.Console.print('게임 종료');
        MissionUtils.Console.close();
      }
      else {
        throw INPUT_ERROR;
      }
    });
  }
}

module.exports = App;
