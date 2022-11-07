const { Console } = require('@woowacourse/mission-utils');
const Game = require('./components/Game');
const { MESSAGE } = require('./constant/baseball');

// - Game 인터페이스 = 실행/재실행/게임종료/메시지 등 실제 갬 관련 프로세스를 수행하도록 함
// - App 클래스에서 Game 인터페이스를 di 받음
//   = play, replay만 냅두기
// - app.play() 시 di 받은 Game 인터페이스 구현체의 게임 시작 메서드 호출
// - 이 구현체는 Game 클래스며 여기서 야구게임 프로세스 수행
// - 갬 시작 및 종료나 재실행에 따라 적절한 메서드 호출
// - 각 클래스나 인터페이스의 목적: App은 애플리케이션 "시동", Game 인터페이스는 게임 프로세스 수행, 그 외 User 또는 Computer 클래스는 게임 프로세스 수행 관련 컴포넌트

class App {
  constructor() {
    this.game = new Game();
  }

  play() {
    Console.print(MESSAGE.START);
    this.game.start();
  }
}

module.exports = App;
