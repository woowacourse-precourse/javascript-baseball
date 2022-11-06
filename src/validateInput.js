const onlyNumRegex = /^[1-9]+$/;

const isAllDifferent = (userInput) => {
  const [first, second, third] = userInput.split('');
  return first !== second && second !== third && third !== first;
};

const validateInput = (userInput) => {
  if (userInput.length !== 3 || !onlyNumRegex.test(userInput)) {
    throw Error('잘못된 입력입니다. 프로그램을 종료합니다.');
  } else if (!isAllDifferent(userInput)) {
    throw Error('잘못된 입력입니다. 프로그램을 종료합니다.');
  }
};

module.exports = validateInput;
