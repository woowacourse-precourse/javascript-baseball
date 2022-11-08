/*
입력 문자열을 받아서 set에 넣고 set의 크기가 3이 아니면 false
*/

const ANWERNUM = 3;
function IsOverLap(UserInputNumber) {
  const CheckLenghtSet = new Set();
  for (let i = 0; i < UserInputNumber.length; i++) {
    CheckLenghtSet.add(UserInputNumber[i]);
  }

  if (CheckLenghtSet.size === ANWERNUM || UserInputNumber === '') {
    return true;
  }
  return false;
}
module.exports = IsOverLap;
