function isTask(thing) {
  return typeof thing === 'function';
}

function whileGenerates(gen, prevGenResult) {
  if (isTask(prevGenResult.value)) {
    const task = prevGenResult.value;
    const resolve = (...args) => whileGenerates(gen, gen.next(...args));
    task(resolve); // run callback
  } else if (!prevGenResult.done) {
    whileGenerates(gen, gen.next(prevGenResult.value));
  }
}

function runGenerator(generator) {
  const gen = generator();
  whileGenerates(gen, gen.next());
}

module.exports = runGenerator;
