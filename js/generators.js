import { getRandomNumber, idCommentGenerator, idGenerator, urlGenerator } from "./random-functions";
import { getNames, getMessages } from "./data";



// Генератор текста для комментариев
const messageGenerator = function () {
  let message = getMessages[getRandomNumber(0, getMessages.length -1)];
  if (getRandomNumber(1, 2) === 2) {
    message = getMessages[getRandomNumber(0, messages.length -1)] + ' ' + messages[getRandomNumber(0, messages.length -1)];
  }
  return message;
}

// Генератор комментариев
const commentGenerator = function () {
return {
  id: idCommentGenerator(),
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: messageGenerator(),
  name: getNames[getRandomNumber(0, getNames.length - 1)]
}
}
// Генератор описания фото
const getPhotoDesription = function () {
  return {
  photoId: idGenerator(),
  photoUrl: `${urlGenerator()}.jpg`,
  description: 'Очень классная фотография',
  LikesNumber: getRandomNumber(15, 200),
  getComments: Array.from({length: getRandomNumber(0, 30)}, commentGenerator)
  }
}

export {getPhotoDesription};
