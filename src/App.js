const MissionUtils = require("@woowacourse/mission-utils");

class App {
  //컴퓨터(상대)가 정답 생성하기
  makeRandomNumber() {  
    const computer = []; //정답 배열
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9); //1부터 9까지 숫자 하나 고르기
      if (!computer.includes(number)) { //배열에 없다면
        computer.push(number); //배열에 추가
      }
    }
    return computer; 
  }

  //숫자만 입력했는지 유효성 검사
  numberValidation (arrToValidate) {
    //kiy 를 입력하면 ['k','i', 'y']로 배열에 저장 => Number형으로 변환 시 [NaN, NaN, NaN] 이 됨.
    if(isNaN(arrToValidate[0]) == true ||  isNaN(arrToValidate[1]) == true || isNaN(arrToValidate[2]) == true ){ //숫
      return true;
    }
  }

  //배열 내 원소 중복 여부 검사
  duplicateValidation (arrToValidate){
    const setCollection = new Set(arrToValidate); //배열을 집합으로 변환
    const IS_DUPLICATE = setCollection.size < arrToValidate.length; //배열의 원소 중복 여부

    return IS_DUPLICATE;
  }
  //플레이어의 입력값 유효성 판단하기 (숫자를 3개 입력하지 않는 경우 등)
  //올바른 입력값은 '1-9 사이의 숫자 3개'
  validationTest(playerGuess) { 
    const guessArr = Array.from(playerGuess).map((i) => Number(i)); //문자열을 Number형 배열로 변환

    if(this.numberValidation(guessArr)){ //숫자 이외의 값이 입력된 경우
      throw '숫자만 입력해주세요';
    } else if (guessArr.length != 3) { //숫자 개수가 3이 아닌 경우
      throw '3개의 숫자를 입력해주세요';
    } else if(guessArr.includes(0)){ //1-9 외에 0이 입력된 경우
      throw '1부터 9까지 숫자만 입력해주세요';
    } else if(this.duplicateValidation(guessArr)) { //3개의 숫자 중 서로 중복된 값이 있는 경우 (예. 122)
      throw '서로 다른 수를 입력해주세요';
    }
  }  

  //결과 문구 반환하기
  showResultPhrase(ball, strike) {

    let resultPhrase = '';

    if (ball == 0 && strike == 0) resultPhrase = '낫싱';
    if(ball == 0 && strike != 0) resultPhrase = `${strike}스트라이크`;
    if(ball !=0 && strike == 0) resultPhrase = `${ball}볼`;
    if(ball == 0 && strike == 3) resultPhrase = `3스트라이크`;
    if(ball !=0 && strike !=0) resultPhrase = `${ball}볼 ${strike}스트라이크`;

    return resultPhrase;

  }

  //플레이어가 추측한 값(입력값)과 컴퓨터의 정답을 비교하여 추측 결과 알려주기
  showGuessResult(answer, player) {
    let ball = 0;
    let strike = 0;
    let guessResult = '';

    for (var i=0; i<player.length; i++){
      if (answer.includes(player[i])){ //플레이어가 추측한 숫자가 정답 중에 있다면
        if(player[i] == answer[i]) strike += 1 //위치까지 같다면 스트라이크
        else ball += 1 //위치는 틀리면 볼
      }
    }

    guessResult = this.showResultPhrase(ball, strike) //결과 문구(예. 1볼 1스트라이크) 저장
   
    return guessResult;
  }
  
  //게임 재시작 여부 결정하기
  restartOrNot () {
    MissionUtils.Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    MissionUtils.Console.readLine('',(continueInput) => {
      if (continueInput == 1) this.play(); //게임 새로 시작하기
      else if (continueInput == 2) MissionUtils.Console.close(); //종료하기
    });
  }

  //정답 추측하기
  guessAnswer(answer) {
    this.answer = answer;
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (number) => {
      this.validationTest(number); //입력값의 유효성 테스트
      const playerArr = Array.from(number).map((i) => Number(i));
      const guessResult = this.showGuessResult(playerArr, this.answer) //추측 결과 저장
      MissionUtils.Console.print(guessResult); //추측 결과 출력
      
      if (guessResult == '3스트라이크') { //3개 숫자 모두 맞혔다면
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');  //게임 종료
        this.restartOrNot(); //재시작 여부 결정하기
        return;
      } else { //정답을 못 맞혔다면
        this.guessAnswer(this.answer); //계속 추측하기
      }
    })
  }

  //게임 시작 (입출력은 이 함수 내에서)
  play() { 
    this.answer = this.makeRandomNumber(); 
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.guessAnswer(this.answer);
  }
}

const app = new App();
app.play();

module.exports = App;
