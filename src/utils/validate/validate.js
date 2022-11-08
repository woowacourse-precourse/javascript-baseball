const isWrongLength = (num) => {
  if (num.length !== 3) throw new Error('3자리의 숫자를 입력해주세요');
};

const hasDuplicatedNumbers = (num) => {
  if (new Set(num).size !== num.length) throw new Error('중복된 숫자가 없이 입력해주세요.');
};

const hasZero = (num) => {
  if (num.indexOf('0') !== -1) throw new Error('0을 입력하셨습니다. 1부터 9까지의 숫자범위에서 입력해주세요.');
};

const isNotNumeric = (num) => {
  if (Number.isNaN(Number(num))) throw new Error('1부터 9로 이루어진 숫자를 입력해주세요');
};

const isValidNumbers = (num) => {
  isWrongLength(num);
  hasDuplicatedNumbers(num);
  hasZero(num);
  isNotNumeric(num);
};

const isOneOrTwo = (num) => {
  if (num !== '1' && num !== '2') {
    throw new Error('1 또는 2만 입력해주세요.');
  }
};

module.exports = { isValidNumbers, isOneOrTwo };
