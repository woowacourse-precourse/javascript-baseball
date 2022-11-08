class App {
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    const computer = this.get_computer_number();
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
      MissionUtils.Console.close();
    });
  }

}

module.exports = App;
