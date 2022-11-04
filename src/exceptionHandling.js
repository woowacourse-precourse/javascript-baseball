const exceptionHandling = () => {
  throw new Error(
    '❌ 잘못된 값입니다. 1~9까지의 숫자들 중 3개를 사용한 3자리 수를 입력해주세요. ❌'
  );
};

module.exports = exceptionHandling;
