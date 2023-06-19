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
// Массив с именами
const names = [
  'Иван',
  'Хуан',
  'Марк',
  'Кристоф',
  'Виктор',
  'Юлий',
  'Люпит',
  'Вашингтон',
];
// Массив с отдельными комментариями
const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
// Генератор текста для комментариев
const messageGenerator = function () {
  let message = messages[getRandomNumber(0, messages.length -1)];
  if (getRandomNumber(1, 2) === 2) {
    message = messages[getRandomNumber(0, messages.length -1)] + ' ' + messages[getRandomNumber(0, messages.length -1)];
  }
  return message;
}

const idCommentGenerator = getUniqueNumber(0, 50);
const idGenerator = getUniqueNumber(0, 25);
const urlGenerator = getUniqueNumber(0, 25);

// Генератор комментариев
const commentGenerator = function () {
return {
  id: idCommentGenerator(),
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: messageGenerator(),
  name: names[getRandomNumber(0, names.length - 1)]
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
//Массив с описаниями фотографий
const getPhotoDesriptions = Array.from({length: 25}, getPhotoDesription);
