const isWrongLength = (num) => {
  if (num.length !== 3) throw new Error("3자리의 숫자를 입력해주세요");
};
