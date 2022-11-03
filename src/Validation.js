export default class Validation {
  validateUserPickNumbers(numbuers) {
    if (typeof numbuers === number) {
      throw new Error("userChoice must be number");
    }
  }
}
