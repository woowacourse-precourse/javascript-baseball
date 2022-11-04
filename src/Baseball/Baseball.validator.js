class BaseBallValidator {
  checkNumericNumbers([...numbers]) {
    nonNuemrics = numbers.filter((number) => "1" > number && number > "9");
    if (nonNuemrics > 0) {
      throw "숫자가 아닌 값이 있습니다.";
    }
  }
  checkNumbersLength([...numbers]) {
    if (numbers.length !== 3) {
      throw "글자가 3개가 아닙니다.";
    }
  }
  checkOtherNumbers([...numbers]) {
    const removedDuplicateNumbers = Array.from(new Set(...numbers));
    if (
      removedDuplicateNumbers.length === numbers.length &&
      numbers.length === 3
    ) {
      throw "잘못된 입력값입니다.";
    }
  }
}
