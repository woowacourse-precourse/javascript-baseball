const { Console } = require('@woowacourse/mission-utils');

class Io {
  /**
   * 메시지를 출력하고, 사용자의 입력을 받아 콜백 함수를 실행한다.
   * @param {string} message
   * @param {(input:string)=>void} callback
   */
  static input (message, callback) {
    Console.readLine(message, callback);
  }

  /**
   * 메시지를 출력한다.
   * @param {string} message
   */
  static output (message) {
    Console.print(message);
  }

  static close () {
    Console.close();
  }
}

module.exports = Io;
