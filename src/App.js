const MissionUtils = require("@woowacourse/mission-utils");

const START_GAME = "숫자 야구 게임을 시작합니다.";
const NUMBER_QUERY_INPUT = "숫자를 입력해주세요 : ";
const END_GAME_MESSAGE = "3개의 숫자를 모두 맞히셨습니다! 게임 종료";
const RESTART_END_APPLICATION =
  "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.";
const NUMBER_INPUT_CHECK = /[0-9]{3}/;
const ERROR_MESSAGE =
  "1~9까지 서로 다른 수로 이루어진 3자리의 수를 입력해주세요.";

class App {
  play() {}
}

module.exports = App;
