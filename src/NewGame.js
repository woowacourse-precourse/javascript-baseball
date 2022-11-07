const { Console, Random } = require("@woowacourse/mission-utils");
class NewGame {
  computerAnswer;

  constructor() {
    this.gameStart();
  }
  gameStart() {
    this.getComputerAnswer();
    this.getUserAnswer();
  }
  getComputerAnswer() {
    const computerNumberList = [];
    while (computerNumberList.length < 3) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      if (!computerNumberList.includes(randomNumber)) {
        computerNumberList.push(randomNumber);
      }
    }
    this.computerAnswer = Number(computerNumberList.join(""));
  }

  getUserAnswer() {
    Console.readLine("숫자를 입력해주세요 : ", (userAnswer) => {
      console.log(userAnswer, "플레이어 입력값");
      console.log(this.computerAnswer, "컴퓨터 입력값");
      this.compareNumber(this.computerAnswer, userAnswer);
      this.getUserAnswer();
      //숫자 비교하기 함수
    });
  }
  compareNumber(computerAnswer, userAnswer) {
    const computerAnswerList = String(computerAnswer).split("");
    const userAnswerList = String(userAnswer).split("");
    const computerAnswerObject = { ...computerAnswerList };
    const userAnswerObject = { ...userAnswerList };
    const score = this.baseballReferee(computerAnswerObject, userAnswerObject);
    console.log(score);
    const strike = score[0];
    const ballCount = score[1];
    if (strike === 3) {
      Console.print("3스트라이크");
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.gameRestart();
      return;
    }
    if ((strike === 0) & (ballCount === 0)) {
      Console.print("낫싱");
    }
    if ((strike === 0) & (ballCount !== 0)) {
      Console.print(`${ballCount}볼`);
    }
    if ((strike !== 0) & (ballCount === 0)) {
      Console.print(`${strike}스트라이크`);
    }
    if ((strike !== 0) & (ballCount !== 0)) {
      Console.print(`${ballCount}볼 ${strike}스트라이크`);
    }
  }
  baseballReferee(computerAnswerObject, userAnswerObject) {
    let strike = 0;
    let ballCount = 0;
    console.log(userAnswerObject, computerAnswerObject);
    if (
      JSON.stringify(computerAnswerObject) === JSON.stringify(userAnswerObject)
    ) {
      strike = 3;
      return [strike, ballCount];
    }
    const checkBallStrike = Object.values(userAnswerObject).reduce(
      (checkBallStrike, userNumber, numberIndex) => {
        const sameNumberCount =
          Object.values(computerAnswerObject).indexOf(userNumber);
        if (sameNumberCount === -1) {
          return [strike, ballCount];
        } else {
          numberIndex === sameNumberCount ? (strike += 1) : (ballCount += 1);
        }
        return [strike, ballCount];
      },
      {}
    );
    return checkBallStrike;
  }

  gameRestart() {
    Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (number) => {
        if (Number(number) === 1) {
          this.gameStart();
        } else {
          Console.close();
        }
      }
    );
  }
  /*
    스트라이크 = 같은 숫자, 같은 자리
    볼 = 같은 숫자, 다른 자리
    낫싱 = 같은 숫자가 1개도 없을 경우

    1. 스트라이크 === 3
        => 게임 재시작문 출력
    2. 볼 > 0 || 스트라이크 > 0  ?볼 ?스트라이크 출력
        => 단, 둘 중 하나가 0개인 경우 0개 인것을 제외하고 출력
            ex) 볼 1, 스트라이크 0 => 1 볼
    3. 볼 & 스트라이크 === 0 일때 낫싱 출력
    */
}

module.exports = NewGame;
