const inning = require("./inning");

async function* game() {
  for await (const result of inning()) {
    yield result;
  }
}

module.exports = game;
