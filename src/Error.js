const ERROR_CODE = Object.freeze({
  OUT_OF_RANGE: "OUT_OF_RANGE",
  DUPLICATED: "DUPLICATED",
  WRONG_NUMBER: "WRONG_NUMBER",
  WRONG_TYPE: "WRONG_TYPE",
});

const ERROR_MESSAGE = Object.freeze({
  OUT_OF_RANGE: "3가지의 숫자를 입력해 주세요",
  DUPLICATED: "중복되지 않은 숫자를 입력해 주세요",
  WRONG_NUMBER: "1 ~ 9 사이의 숫자를 입력해 주세요",
  WRONG_TYPE: "숫자만 입력해 주세요",
});

const createParams = (code, value) =>
  // eslint-disable
  [ERROR_MESSAGE[code], { cause: { code: ERROR_CODE[code], value } }];

class AnswerError extends Error {
  constructor(code, value = null) {
    super(...createParams(code, value));
  }
}

module.exports = { AnswerError, ERROR_CODE };
