const MissionUtils = require("@woowacourse/mission-utils");
const {
  checkLength,
  checkZeroExist,
  checkDuplicate,
  convertNum,
} = require("./utils");

// 같은 수가 같은 자리에 있으면 스트라이크, 다른 자리에 있으면 볼, 같은 수가 전혀 없으면 낫싱이란 힌트를 얻고, 그 힌트를 이용해서 먼저 상대방(컴퓨터)의 수를 맞추면 승리한다.
// 예) 상대방(컴퓨터)의 수가 425일 때
// 123을 제시한 경우 : 1스트라이크
// 456을 제시한 경우 : 1볼 1스트라이크
// 789를 제시한 경우 : 낫싱
// 위 숫자 야구 게임에서 상대방의 역할을 컴퓨터가 한다. 컴퓨터는 1에서 9까지 서로 다른 임의의 수 3개를 선택한다. 게임 플레이어는 컴퓨터가 생각하고 있는 서로 다른 3개의 숫자를 입력하고, 컴퓨터는 입력한 숫자에 대한 결과를 출력한다.
// 이 같은 과정을 반복해 컴퓨터가 선택한 3개의 숫자를 모두 맞히면 게임이 종료된다.
// 게임을 종료한 후 게임을 다시 시작하거나 완전히 종료할 수 있다.
// 사용자가 잘못된 값을 입력한 경우 throw문을 사용해 예외를 발생시킨후 애플리케이션은 종료되어야 한다.

class App {
  #computer_number;
  #user_number;
  #strike = 0;
  #ball = 0;

  play() {
    this.#init();
  }
  // 시작 단계
  #init() {
    this.#computer_number = this.#getRandomNum();
    this.#ball = 0;
    this.#strike = 0;
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.#guessNum();
  }
  // 랜덤 번호 생성
  #getRandomNum() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }
  // 사용자가 번호를 입력
  #guessNum() {
    MissionUtils.Console.readLine("숫자를 입력해 주세요 : ", (answer) => {
      this.#setUserNum(answer);
    });
  }
  // 사용자 입력 숫자 유효성 검사
  #valid(number) {
    if (checkLength(number) && checkZeroExist(number) && checkDuplicate(number))
      return true;
    else return false;
  }
  // 사용자 입력 숫자 유효성 검사 후 저장
  #setUserNum(number) {
    if (this.#valid(number)) {
      this.#user_number = number;
      this.#compareNum(this.#user_number, this.#computer_number);
    } else {
      throw "잘못된 입력입니다.";
    }
  }
  // 사용자 숫자와 컴퓨터 숫자 비교 후 strike와 ball 저장
  #compareNum(user, computer) {
    const { user_num, computer_num } = convertNum(user, computer);

    user_num.forEach((item, idx) => {
      const is_include = computer_num.includes(item);
      const is_index_match = computer_num.indexOf(item) === idx;

      if (is_include && is_index_match) this.#strike += 1;
      else if (is_include) this.#ball += 1;
    });
    this.#getCompareResult(this.#strike, this.#ball);
  }
  // 스트라이크 및 볼 갯수 출력 및 다음 단계 판별
  #getCompareResult(strike, ball) {
    let is_answer_right = false;
    if (strike && ball) {
      this.#print(`${ball}볼 ${strike}스트라이크`);
    } else if (ball) {
      this.#print(`${ball}볼`);
    } else if (strike) {
      this.#print(`${strike}스트라이크`);
    } else {
      this.#print("낫싱");
    }

    if (strike === 3) {
      is_answer_right = true;
    }

    if (is_answer_right) {
      // 정답이므로 마지막 단계로 진입
      this.#print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.#restartOrFinish();
    } else {
      // 틀렸으므로 사용자 숫자 다시 입력
      this.#strike = 0;
      this.#ball = 0;
      this.#guessNum();
    }
  }
  // 재시작 / 종료
  #restartOrFinish() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (answer) => {
        this.#restartOrFinishContext(answer);
      }
    );
  }
  #restartOrFinishContext(answer) {
    if (answer === "2") MissionUtils.Console.close();
    else if (answer === "1") this.#init();
    else {
      this.#print("잘못된 입력입니다. 다시 입력해주세요.");
      restartOrFinishContext();
    }
  }

  #print(string) {
    MissionUtils.Console.print(string);
  }
}

module.exports = App;
