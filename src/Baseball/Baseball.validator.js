class BaseBallValidator {
  checkOtherNumbers([...numbers]) {
    let removedDuplicateNumbers = Array.from(new Set(...numbers));
    return (
      removedDuplicateNumbers.length === numbers.length && numbers.length === 3
    );
  }
}
