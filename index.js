const head = require("./head");
const tail = require("./tail");
const middle = require("./middle");
const eqArrays = require("./eqArrays");
const findKey = require("./findKey");
const findKeyByValue = require("./findKeyByValue");
const flatten = require("./flatten");
const takeUntil = require('./takeUntil');
const assertArraysEqual = require('./assertArraysEqual');
const letterPositions = require('./letterPositions');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const map = require('./map');
const eqObjects = require("./eqObjects");
const reverse = require("./reverse");
const pigLatin = require("./pigLatin");

module.exports = {
tail: tail,
middle: middle,
eqArrays: eqArrays,
findKey: findKey,
findKeyByValue: findKeyByValue,
flatten: flatten,
takeUntil: takeUntil,
assertArraysEqual: assertArraysEqual,
letterPositions: letterPositions,
countOnly:countOnly,
countLetters: countLetters,
map: map,
eqObjects: eqObjects,
reverse: reverse,
pigLatin: pigLatin,
head: head
};
