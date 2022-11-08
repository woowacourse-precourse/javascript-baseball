const MIN = 1;
const MAX = 9;

const TO_STRING_BALL = {
  0: "",
  1: "1볼",
  2: "2볼",
  3: "3볼",
};
const TO_STRING_STRIKE = {
  0: "",
  1: "1스트라이크",
  2: "2스트라이크",
  3: "3스트라이크",
};
const NOTHING = "낫싱";

const RESTART = "1";
const EXIT = "2";
const VALID_ANSWER = {
  1: RESTART,
  2: EXIT,
};

module.exports = {
  MIN,
  MAX,
  TO_STRING_BALL,
  TO_STRING_STRIKE,
  NOTHING,
  RESTART,
  EXIT,
  VALID_ANSWER,
};
