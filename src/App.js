const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    console.log(MissionUtils.Random.pickNumberInList([1, 2, 3]), "ㄴㄹㅁㄴㄹ");

    // 입력
    Console.readLine("닉네임을 입력해주세요.", (answer) => {
      console.log(`닉네임: ${answer}`);
    });

    // 출력
    Console.print("안녕하세요.");

    // 입출력 제어 ?
    //Console.close();
  }
}

module.exports = App;
