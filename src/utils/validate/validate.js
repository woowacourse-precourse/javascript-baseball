const isWrongLength = (num) => {
  if (num.length !== 3) throw new Error("3자리의 숫자를 입력해주세요");
};

const hasDuplicatedNumbers = (num) => {
  if (new Set(num).size !== num.length)
    throw new Error("중복된 숫자가 없이 입력해주세요.");
};
