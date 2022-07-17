const clear = () => ({ type: clear.type });
clear.type = 'ALL/clear';

const makeHandleClear = initial => () => initial;

module.exports = {
  clear,
  makeHandleClear,
};
