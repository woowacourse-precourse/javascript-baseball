const deepFreeze = (target) => {
  Object.keys(target).forEach((key) => {
    if (typeof target[key] === 'object' && !Object.isFrozen(target[key])) deepFreeze(target[key]);
  });

  return Object.freeze(target);
};

module.exports = {
  deepFreeze,
};
