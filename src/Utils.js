const generateNumArr = ([min, max]) =>
  Array(max - min + 1)
    .fill()
    .map((number, index) => min + index);
