// 숫자 범위 체크
function numberCheck(data) {
  const isNumber = (num) => num > 0 && num < 10;
  return data.every(isNumber);
}
//길이 체크
function lengthCheck(data) {
  if (data.length === 3) return true;
  return false;
}
//중복 체크
function duplicateCheck(data) {
  if ([...new Set(data)].length === 3) return true;
  return false;
}

function isValidNum(number) {
  const data = Array.from(String(number), Number);

  if (numberCheck(data) && lengthCheck(data) && duplicateCheck(data))
    return true;

  return false;
}

module.exports = isValidNum;
