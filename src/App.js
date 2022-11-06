import * as MissionUtils from "@woowacourse/mission-utils";

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    const RANDOM_NUMBER = this.GET_RANDOM_NUMBER();
  }

  GET_RANDOM_NUMBER() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3); //ex - [2,5,6]
  }

  INPUT_NUMBER(correct_number) {
    MissionUtils.Console.readLine("숫자를 입력해주세요.", (answer) => {
      const NUMBER_LIST = String(answer)
        .split("")
        .map((e) => Number(e));

      if (NUMBER_LIST.includes(NaN)) {
        //문자열 입력
        throw "입력값은 문자열이 될 수 없습니다!";
      }
      if (NUMBER_LIST.includes(0)) {
        //0입력
        throw "입력값은 1~9사이의 숫자여야 합니다!";
      }
      if (NUMBER_LIST.length !== 3) {
        //3자리가 아닌 숫자 입력
        throw "입력값은 세 자리 숫자여야 합니다!";
      }
      if (NUMBER_LIST.length !== new Set(NUMBER_LIST).length) {
        //동일한 숫자 입력
        throw "입력값은 서로 다른 숫자여야 합니다!";
      }
    });
  }
}

module.exports = App;
