const isWrongLength = (num) => {
  if (num.length !== 3) throw new Error("3자리의 숫자를 입력해주세요");
};

const hasDuplicatedNumbers = (num) => {
  if (new Set(num).size !== num.length)
    throw new Error("중복된 숫자가 없이 입력해주세요.");
};

const hasZero = (num) => {
  if (num.indexOf("0") !== -1)
    throw new Error(
      "0을 입력하셨습니다. 1부터 9까지의 숫자범위에서 입력해주세요."
    );
};
