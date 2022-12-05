const { VALUE } = require("./Value");

const ERROR_HEADER = "[ERROR] ";

const ERROR = {
  number: {
    notANumber: "값은 숫자로만 이루어져야 합니다",
    invalidLength: `값은 ${VALUE.computerNumberRange.length}자리로만 이루어져야 합니다`,
    includesZero: `0을 제외한  ${VALUE.computerNumberRange.minimum}~${VALUE.computerNumberRange.maximum}의 숫자만 입력가능합니다`,
    duplicated: "값이 중복되어선 안됩니다",
  },

  command: {
    invalidCommand: `${VALUE.command.restart}과 ${VALUE.command.finish}중 하나만 입력가능합니다.`,
  },
};

module.exports = { ERROR_HEADER, ERROR };
