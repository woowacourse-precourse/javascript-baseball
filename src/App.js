class App {
  play() {
    const MissionUtils = require("@woowacourse/mission-utils");

    console.log("숫자 야구 게임을 시작합니다.");

    // 1. 컴퓨터 : 1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 뽑기
    let answer = 0;
    selectNumber();

    function selectNumber() {
      let num_candidate = MissionUtils.Random.pickNumberInRange(100, 999);
      num_candidate = num_candidate.toString();
      if (
        num_candidate[0] !== num_candidate[1] &&
        num_candidate[1] !== num_candidate[2] &&
        num_candidate[2] !== num_candidate[0]
      ) {
        answer = num_candidate;
        return answer;
      } else {
        selectNumber();
      }
    }

    // 2. 사용자 : 3개의 숫자 입력
    // 2-1. 서로 다른 3자리의 수 입력
    let userNum = 123; // 일단 임의로 설정해둠
    // askNumber();

    // function askNumber() {
    //   MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
    //     // num = userNum;
    //     console.log(`숫자: ${input}`);
    //   });
    // }

    // 2-2. 게임이 끝난 경우, 재시작/종료를 구분하는 1과 2 중 하나의 수

    // 3. 컴퓨터 : 사용자가 입력한 숫자에 대한 결과 출력
    userNum = userNum.toString();
    answer = answer.toString();
    let score = [0, 0]; // [볼, 스트라이크]

    isStrike();

    function isStrike() {
      for (let i = 0; i < 3; i++) {
        if (userNum[i] === answer[i]) {
          score[1] += 1;
        } else {
          isBall(i);
        }
      }
    }

    function isBall(i) {
      console.log(`정답 ${answer} / 입력 : ${userNum[i]}`);
      if (i === 0) {
        if (userNum[i] === answer[1] || userNum[i] === answer[2]) {
          score[0] += 1;
        }
      } else if (i === 1) {
        if (userNum[i] === answer[2] || userNum[i] === answer[0]) {
          score[0] += 1;
        }
      } else if (i === 2) {
        if (userNum[i] === answer[0] || userNum[i] === answer[1]) {
          score[0] += 1;
        }
      }
    }

    console.log(`정답 : ${answer} / 입력 : ${userNum}`);
    console.log(`${score[0]} 볼 ${score[1]} 스트라이크`);
  }
}

// module.exports = App;

let game = new App();

game.play();
