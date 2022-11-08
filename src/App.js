class App {
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    const computer = this.get_computer_number();
    count_ball_strike(computer);
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
      this.count_ball_strike(computer, user);
      MissionUtils.Console.close();
    });
  }

  count_ball_strike(computer, user) {
    let ball = 0;
    let strike = 0;

    for(let i=0;i<3;i++){
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
  }

  print_message(strike, ball) {
    let save_message = "";
    if (ball > 0) save_message += `${ball}볼 `;
    if (strike > 0) save_message += `${strike}스트라이크`;
    if (ball === 0 && strike === 0) save_message = '낫싱';
    if (strike === 3) save_message = '3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료';
    return save_message;
  }
}

module.exports = App;
