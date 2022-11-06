const MissionUtils = require("@woowacourse/mission-utils");

class App {
  //컴퓨터가 정답 생성하기
  makeRandomNumber() {
    let computer = []; //정답 숫자들 배열
    /*
    while (computer.length < 3) { 
      const number = MissionUtils.Random.pickNumberInRange(1, 9); //랜덤으로 1-9중에서 숫자 하나 고르기
      if (!computer.includes(number)) { //고른 적 없는 숫자라면
        computer.push(number); //숫자 배열에 추가
      }
    }*/
    computer = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    return computer 
  }

  //플레이어가 추측한 값(입력값)과 컴퓨터의 정답을 비교하여 추측 결과 알려주기
  showGameResult(answer, player) {
    this.ball = 0;
    this.strike = 0;
    this.gameResult = [];

    if (answer[0]==player[0]) this.strike += 1
    else if (answer[0]==player[1]) this.ball += 1
    else if(answer[0]==player[2]) this.ball += 1
    
    if (answer[1]==player[1]) this.strike += 1
    else if (answer[1]==player[0]) this.ball += 1
    else if(answer[1]==player[2]) this.ball += 1
    
    if (answer[2]==player[2]) this.strike += 1
    else if (answer[2]==player[0]) this.ball += 1
    else if(answer[2]==player[1]) this.ball += 1
    
    if (this.ball == 0 && this.strike == 0) this.gameResult = '낫싱';
    else if(this.ball == 0) this.gameResult = `${this.strike}스트라이크`;
    else if(this.strike == 0) this.gameResult = `${this.ball}볼`;
    else this.gameResult = `${ball}볼 ${strike}스트라이크`;
    
    return this.gameResult
  }
  //게임 시작 (입출력은 이 함수 내에서)
  play() { 
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (number) => {
      //console.log(`숫자: ${number}`);
      //예를 들어 정답이 123이면 게임 종료(입출력 인스턴스 종료)
      const playerArr = Array.from(number).map((i) => Number(i));;
      MissionUtils.Console.print(playerArr);
      const answer = this.makeRandomNumber();
      MissionUtils.Console.print(answer);
      //const gameResult = this.showGameResult(playerArr, answer)
      const gameResult = '3볼3스트라이크';
      MissionUtils.Console.print(gameResult);
      if(gameResult == '3볼3스트라이크') {
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        MissionUtils.Console.close()
      }
    })
  }
}

const app = new App();
app.play();

module.exports = App;
