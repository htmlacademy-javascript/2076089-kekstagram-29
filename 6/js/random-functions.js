// Генератор рандомного числа
const getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min +1 )) + min;
}

// Генератор уникального рандомного числа
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

const idCommentGenerator = () => getUniqueNumber(0, 50);

const idGenerator = () => getUniqueNumber(0, 25);

const urlGenerator = () => getUniqueNumber(0, 25);

export {getRandomNumber, getUniqueNumber, idCommentGenerator, idGenerator, urlGenerator};
