// 길이 유효성 검사
const checkLength = (num) => {
  return num.length === 3;
};
// 0 포함 유효성 검사
const checkZeroExist = (num) => {
  return !num.includes(0);
};
// 중복 유효성 검사
const checkDuplicate = (num) => {
  const numberSet = new Set([...number]);
  return numberSet.size === num.length;
};
// 숫자 데이터를 같은 형식으로 변환
const convertNum = (user, computer) => {
  const user_num = user.split("");
  const computer_num = computer.map((item) => String(item));
  return { user_num, computer_num };
};

module.exports = {
  checkLength,
  checkZeroExist,
  checkDuplicate,
  convertNum,
};
