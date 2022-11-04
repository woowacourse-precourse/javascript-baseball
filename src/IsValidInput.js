/*
입력 문자열을 받아서 set에 넣고 set의 크기가 3이 아니면 false
*/
function IsOverLap(InputStr) {
  const StrSet = new Set();
  const ArrayInputStr = [...InputStr];
  ArrayInputStr.forEach((Inputchar) => {
    StrSet.add(Inputchar);
  });
  if (StrSet.size === 3) {
    return 1;
  }
  return 0;
}

module.exports = IsOverLap;
