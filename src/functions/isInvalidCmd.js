function isInvalidCmd(cmd) {
  if (cmd == "1" || cmd == "2") return false;
  return true;
}

module.exports = isInvalidCmd;
