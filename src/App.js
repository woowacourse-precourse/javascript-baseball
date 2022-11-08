/**
 * 1. 실행 시 "숫자 야구 게임을 실행합니다." 출력 후
 * 2. 숫자를 입력해주세요  : (랜덤 3개 숫자 입력)
 *    a. 숫자가 아니거나 3글자 이상시 return 
 * 3. 컴퓨터 숫자와 비교 해서 값 추출
 *    a. 맞추지못하면 숫자 다시쓰게하기 (1b 1s 등 해주고)
 *    b. 맞추면 다시게임할지 물어본 후 종료 또는 재시작
 */
const MissionUtils = require("@woowacourse/mission-utils");
class App {

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.")
    this.computer()
  }



  //컴퓨터 랜덤 숫자 3개 뽑기
  computer() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    this.userNumber(computer)
  }

  //유저 입력 받기
  userNumber(computer) {
    let check = /^[0-9]+$/;
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (userInput) => {
      if (userInput.length !== 3 || !check.test(userInput) ||
        ((userInput[0] == userInput[1]) || (userInput[1] == userInput[2]) || (userInput[0] == userInput[2]))) {
        throw "Error Message 2";
      } else {
        this.playing(computer, userInput)
      }
    })
  }

  playing(computer, player) {
    let input = player.split('').map(el => parseInt(el))
    let strikeCount = 0;
    let ballCount = 0;
    for (let i = 0; i < 3; i++) {
      if (computer[i] === input[i]) {
        strikeCount += 1;
      } else if (computer[i] !== input[i] && computer.includes(input[i])) {
        ballCount += 1;
      }
    }

    this.count(strikeCount, ballCount)

    if (strikeCount === 3) {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료")
      this.restart()
    } else if (strikeCount !== 3) {
      this.userNumber(computer)
    } else {
      this.playing(computer, userInput)
    }

  }

  count(strike, ball) {
    if (strike > 0 && ball > 0) {
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`)
    } else if (ball > 0) {
      MissionUtils.Console.print(`${ball}볼`)
    } else if (strike > 0) {
      MissionUtils.Console.print(`${strike}스트라이크`)
    } else if (strike === 0 && ball === 0) {
      MissionUtils.Console.print("낫싱")
    }
  }

  restart() {
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (start) => {
      if (start === '1') {
        this.play()
      } else if (start === '2') {
        MissionUtils.Console.close()
        MissionUtils.Console.print("게임 종료")
      } else {
        throw "Error Message";
      }
    })
  }

}
const app = new App()
app.play()

module.exports = App;
