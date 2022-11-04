class BaseBallValidator {
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
