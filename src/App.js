
class App {
  play() {
    // 프로그램 시작
    console.log(`숫자 야구 게임을 시작합니다.`);

    // 정답 숫자 선정
    const computer = [];
    const MissionUtils = require("@woowacourse/mission-utils");
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    // 사용자로부터 입력값 얻기
    let user = ''
    MissionUtils.Console.readLine('숫자를 입력해주세요.', (answer) => {
      console.log(`숫자를 입력해주세요 : ${answer}`);
      user = answer
    });

    // 입력값 예외 처리
    //숫자인지 체크
    if(isNaN(user)){ 
      throw new Error('에러');
      console.log('숫자가 아님')
    }
    // 3자리인지 체크
    if(user.length != 3){
      throw new Error('에러');
      console.log('3자리가 아님')
    }
    // 서로 다른 숫자인지 체크
    let numberCheck = new Set(user);
    if(numberCheck.size != user.length){
      throw new Error('에러');
      console.log('서로 다른 숫자가 아님')
    }

  }
}

const app = new App();
app.play();

module.exports = App;
