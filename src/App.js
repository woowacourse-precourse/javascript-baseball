class App {
  #isPlaying = false;
  #computerValue = null;
  #userValue = null;

  isAvailableValue(value) {
    let stringValue = value + '';
    return stringValue.length === 3 && /^[1-9]{3}$/.test([...new Set(stringValue)].join(''));
  }
}

module.exports = App;
