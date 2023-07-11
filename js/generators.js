import { getRandomNumber, idCommentGenerator, idGenerator, urlGenerator } from "./random-functions.js";
import { getNames, getMessages } from "./data.js";

// Генератор текста для комментариев
const messageGenerator = function () {
  let message = getMessages()[getRandomNumber(0, getMessages().length -1)];
  if (getRandomNumber(1, 2) === 2) {
    message += ' ' + getMessages()[getRandomNumber(0, getMessages.length -1)];
  }
  return message;
}

// Генератор комментариев
const commentGenerator = function () {
return {
  id: idCommentGenerator(),
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: messageGenerator(),
  name: getNames()[getRandomNumber(0, getNames.length - 1)]
}
}
// Генератор описания фото
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
