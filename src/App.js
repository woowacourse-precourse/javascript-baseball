const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    const computer = this.get_computer_number();
    this.get_from_user(computer);
  }

  get_computer_number() {
    let computer_number = [];
    while (computer_number.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer_number.includes(number)) computer_number.push(number);
    }
    return computer_number;
  }

  get_from_user(computer){
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (user_number) => {
      const user = user_number.split('').map(Number);
      let check_iteration = this.count_ball_strike(computer, user);
      if (check_iteration === true) return this.get_from_user(computer);
      else this.ask_repeat();
    });
  }

  count_ball_strike(computer, user) {
    let ball = 0;
    let strike = 0;
    let next_iteration = true;

    for(let i=0; i<3; i++){
      if(user[i] === computer[i]){
        strike++;
        continue;
      }

      else if(computer.includes(user[i])){
        ball++;
        continue;
      }
    }

    let message = this.print_message(strike, ball);
    MissionUtils.Console.print(message);

    if(strike === 3) next_iteration = false;
    return next_iteration;
  }

  print_message(strike, ball) {
    let save_message = "";
    if (ball > 0) save_message += `${ball}볼 `;
    if (strike > 0) save_message += `${strike}스트라이크`;
    if (ball === 0 && strike === 0) save_message = '낫싱';
    if (strike === 3) save_message = '3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료';
    return save_message;
  }

  ask_repeat(){
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (repeat) => {
      if (repeat === '1'){
        return this.play();
      }
      else if (repeat === '2'){
        return MissionUtils.Console.close();
      }
      else{
        throw '1또는 2만 선택할 수 있습니다.';
      }
    });
  }
}

module.exports = App;
