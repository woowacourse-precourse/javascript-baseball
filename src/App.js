const MissionUtils = require("@woowacourse/mission-utils");

class App {
  //플레이어의 입력값 유효성 판단하기 (숫자를 3개 입력하지 않는 경우 등)
  //올바른 입력값은 '1-9 사이의 숫자 3개'
  validationTest(playerGuess) {
    const guessArr = Array.from(playerGuess).map((i) => Number(i)); //문자열을 Number형 배열로 변환
    //console.log(typeof guessArr[0]);
    if(isNaN(guessArr[0]) == true ||  isNaN(guessArr[1]) == true || isNaN(guessArr[2]) == true ){
      throw '숫자만 입력해주세요'
    } else if (guessArr.length != 3) { //숫자 개수가 3이 아닌 경우
      throw '3개의 숫자를 입력해주세요'
    }
    else if(guessArr.includes(0)){ //1-9 외에 0이 입력된 경우
      throw '1부터 9까지 숫자만 입력해주세요'
    }
  }  
  //컴퓨터가 정답 생성하기
  makeRandomNumber() {
    let computer = []; //정답 숫자들 배열
    computer = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    return computer 
  }

  //플레이어가 추측한 값(입력값)과 컴퓨터의 정답을 비교하여 추측 결과 알려주기
  showGuessResult(answer, player) {
    let ball = 0;
    let strike = 0;
    let guessResult = [];

    if (answer[0]==player[0]) strike += 1
    else if (answer[0]==player[1]) ball += 1
    else if(answer[0]==player[2]) ball += 1
    
    if (answer[1]==player[1]) strike += 1
    else if (answer[1]==player[0]) ball += 1
    else if(answer[1]==player[2]) ball += 1
    
    if (answer[2]==player[2]) strike += 1
    else if (answer[2]==player[0]) ball += 1
    else if(answer[2]==player[1]) ball += 1
    
    if (ball == 0 && strike == 0) guessResult = '낫싱';
    else if(ball == 0) guessResult = `${strike}스트라이크`;
    else if(strike == 0) guessResult = `${ball}볼`;
    else if(ball == 3 && strike == 3) guessResult = `3스트라이크`;
    else guessResult = `${ball}볼 ${strike}스트라이크`;
    
    return guessResult
  }
  //게임 시작 (입출력은 이 함수 내에서)
  play() { 
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (number) => {
      //console.log(`숫자: ${number}`);
      //예를 들어 정답이 123이면 게임 종료(입출력 인스턴스 종료)
      this.validationTest(number);
      const playerArr = Array.from(number).map((i) => Number(i));
      MissionUtils.Console.print(playerArr);
      const answer = this.makeRandomNumber();
      MissionUtils.Console.print(answer);
      const guessResult = this.showGuessResult(playerArr, answer)
      //const guessResult = '3스트라이크';
      MissionUtils.Console.print(guessResult);
      if (guessResult == '3스트라이크') {
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        
        MissionUtils.Console.close()
      }
    })
  }
}

const app = new App();
app.play();

module.exports = App;
