//module used
const { Console, Random } = require('@woowacourse/mission-utils');
const { Constants, Errors } = require('./Constants');
const { TOTAL_COUNT, OPTION_STRING, INPUT_STRING } = Constants;
const {
  ERR_INPUT_UNDEFINED,
  ERR_3_NUM_NEEDED,
  ERR_NUM_DUPLICATED,
  ERR_ONLY_NUMBER,
  ERR_OPT_1_CHAR_NEEDED,
  ERR_OPT_ANSWER_NEEDED,
} = Errors;

class App {
  // 정답 문자열 저장하는 변수
  #answer = '';

  getAnswer() {
    return this.#answer;
  }

  initAnswer() {
    //랜덤으로 1~9까지 3개의 중복되지 않은 수를 골라 answer에 저장한다
    const answerList = [];
    while (answerList.length < TOTAL_COUNT) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      if (!answerList.includes(randomNumber)) {
        answerList.push(randomNumber);
      }
    }
    this.#answer = answerList.join('');
  }

  play() {
    //숫자 야구 게임을 진행한다
    this.initAnswer();
    const opponentString = this.getAnswer();
    Console.print('숫자 야구 게임을 시작합니다.');
    this.performGame(opponentString);
  }

  performGame(answer) {
    //정답문자열이 있는 상태에서 게임을 진행한다
    Console.readLine('숫자를 입력해주세요 : ', (input) => {
      let [ball, strike] = this.countBallStrike(answer, input);
      this.printBS(ball, strike);
      if (strike === TOTAL_COUNT) {
        Console.print(`${TOTAL_COUNT}개의 숫자를 모두 맞히셨습니다! 게임 종료`);
        this.askReplay();
      } else {
        this.performGame(answer);
      }
    });
  }

  askReplay() {
    //게임이 한판 끝난 상태에서 다음의 진행 여부를 묻는다
    Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (input) => {
      this.checkOptionValid(input);
      if (input === '1') {
        this.initAnswer();
        const newAnswer = this.getAnswer();
        this.performGame(newAnswer);
      } else if (input === '2') {
        Console.close();
      }
    });
  }

  checkAnswerValid(input) {
    //게임 진행시의 사용자의 입력을 검증한다
    if (!input) throw new Error(ERR_INPUT_UNDEFINED);
    if (input.length !== 3) throw new Error(ERR_3_NUM_NEEDED);
    if (new Set(input).size !== 3) throw new Error(ERR_NUM_DUPLICATED);
    let isAllNum = true;
    input.split('').forEach((char) => (isAllNum = INPUT_STRING.includes(char) && isAllNum));
    if (isAllNum === false) throw new Error(ERR_ONLY_NUMBER);
  }

  checkOptionValid(input) {
    //추가 진행 여부 입력시의 사용자의 입력을 검증한다
    if (!input){
      throw new Error(ERR_INPUT_UNDEFINED)
    }
    if (input.length !== 1) {
      throw new Error(ERR_OPT_1_CHAR_NEEDED);
    }
    if (!OPTION_STRING.includes(input)) {
      throw new Error(ERR_OPT_ANSWER_NEEDED);
    }
    return true;
  }

  countIfStrike(player_char, opponent_char) {
    //player_char가 '스트라이크'의 조건을 만족하는 경우 1을 리턴한다
    if (player_char === opponent_char) return 1;
    return 0;
  }

  countIfBall(player_char, opponent_input) {
    //player_char가 '볼'의 조건을 만족하는 경우 1을 리턴한다
    if (opponent_input.includes(player_char)) {
      return 1;
    }
    return 0;
  }

  printBS(ball, strike) {
    // 볼과 스트라이크로 현재 상황을 출력한다
    if (ball + strike === 0) {
      Console.print('낫싱');
    } else if (ball === 0) {
      Console.print(`${strike}스트라이크`);
    } else if (strike === 0) {
      Console.print(`${ball}볼`);
    } else {
      Console.print(`${ball}볼 ${strike}스트라이크`);
    }
  }

  countBallStrike(opponent_input, player_input) {
    //두 문자열로 볼과 스트라이크를 리턴한다
    let ball = 0;
    let strike = 0;
    this.checkAnswerValid(player_input);
    for (let idx in player_input) {
      strike += this.countIfStrike(player_input[idx], opponent_input[idx]);
      ball +=
        this.countIfBall(player_input[idx], opponent_input) &
        !this.countIfStrike(player_input[idx], opponent_input[idx]);
    }
    return [ball, strike];
  }
}

module.exports = App;

