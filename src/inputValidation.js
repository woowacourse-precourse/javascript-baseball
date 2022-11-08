const isInvalidLength = (value) => {
  if (value.length !== 3) {
    throw new Error("입력한 수가 3자리가 아닙니다.");
  }
};
const isDuplicated = (value) => {
  if (new Set(value).size !== value.length) {
    throw new Error("중복된 수를 입력했습니다.");
  }
};
const isNaN = (value) => {
  if (Number.isNaN(Number(value))) {
    throw new Error("숫자만 입력해주세요. ");
  }
};
const includeSpace = (value) => {
  if (!!value.match(/ /gi)) {
    throw new Error("공백을 제외해주세요.");
  }
};

module.exports = { isInvalidLength, isDuplicated, isNaN, includeSpace };
