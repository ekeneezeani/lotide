const assertEqual = require('./assertEqual');

const tail = function(arr) {
  return arr.slice(1);
};
const result = tail(["Hello", "Lighthouse", "Labs"]);

module.exports = tail;