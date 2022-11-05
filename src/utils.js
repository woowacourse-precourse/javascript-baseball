export const isDuplicated = (arr) => {
  const elements = new Set();
  arr.forEach(a => elements.add(a));

  if (arr.length !== elements.size) return true;
  return false;
}