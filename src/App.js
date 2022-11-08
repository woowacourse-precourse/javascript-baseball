const MissionUtils = require("@woowacourse/mission-utils");
const {
  checkLength,
  checkZeroExist,
  checkDuplicate,
  convertNum,
} = require("./utils");
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
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
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
