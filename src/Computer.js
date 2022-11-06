const MissionUtils = require("@woowacourse/mission-utils");

class Computer {
    startMessage() {
        MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    }
  
    successMessage() {
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    }

    chooseMessage() {
        MissionUtils.Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.")
    }

    pickedNum() {
        let correctAnswer = new Set();
      
    while (correctAnswer.size < 3) {
        correctAnswer.add(MissionUtils.Random.pickNumberInRange(1, 9));
        }

        return Array.from(correctAnswer);
    }
}

module.exports = Computer;