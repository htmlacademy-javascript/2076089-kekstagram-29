import { getData } from "./data.js";

const getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getUniqueNumber = function (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomNumber(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomNumber(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const idCommentGenerator = getUniqueNumber(0, getData.COMMENTS_COUNT);

let idGenerator = () => getUniqueNumber(0, getData.PHOTOS_COUNT);
let urlGenerator = getUniqueNumber(1, getData.PHOTOS_COUNT);


export {getRandomNumber, getUniqueNumber, idCommentGenerator, idGenerator, urlGenerator};
