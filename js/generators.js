import { getRandomNumber, idCommentGenerator, idGenerator, urlGenerator } from "./random-functions.js";
import { getData } from "./data.js";

const messageGenerator = function () {
  let message = getData.MESSAGES[getRandomNumber(0, getData.MESSAGES.length - 1)];
  if (getRandomNumber(1, 2) === 2) {
    message += ' ' + getData.MESSAGES[getRandomNumber(0, getData.MESSAGES.length - 1)];
  }
  return message;
}

const commentGenerator = function () {
return {
  id: idCommentGenerator(),
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: messageGenerator(),
  name: getData.NAMES[getRandomNumber(0, getData.NAMES.length - 1)]
}
}
const getPhotoDescription = function () {
  return {
  id: idGenerator(),
  url: `photos/${urlGenerator()}.jpg`,
  description: 'Очень классная фотография',
  likes: getRandomNumber(15, 200),
  comments: Array.from({length: getRandomNumber(0, 30)}, commentGenerator),
  }
}

export {getPhotoDescription};
