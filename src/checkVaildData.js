const checkVaildData = (userInput) => {
  const isUniqueNumber = new Set(userInput.split("")).size === 3;
  const vaildNumber = [...userInput].map((num) => {
    if (isNaN(num)) throw "잘못된 문자를 입력했습니다. 프로그램을 종료합니다.";
    return +num;
  });

  if (userInput.length !== 3) {
    throw "잘못된 문자를 입력했습니다. 프로그램을 종료합니다.";
  }

  if (!vaildNumber || !isUniqueNumber || vaildNumber.includes(0)) {
    throw "잘못된 문자를 입력했습니다. 프로그램을 종료합니다.";
  }

  return vaildNumber;
};

module.exports = checkVaildData;
