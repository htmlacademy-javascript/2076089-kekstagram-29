import { getPhotoDesription } from "./generators";

const getMiniatures = () => {

// Находим темплейт и элемент внутри
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

// Создаем массив с описаниями фотографий
const photoDescriptions = Array.from({length: 25}, getPhotoDesription);

// Создаем фрагмент
const pictureListFragment = document.createDocumentFragment();

//Создаем DOM элементы
photoDescriptions.forEach (({photoUrl, description, likesNumber, getComments}) => {

  // Клонируем темплейт
  let newElement = pictureTemplate.cloneNode(true);

  // Добавляем значения внутри
  newElement.querySelector('.picture__img').src = photoUrl;
  newElement.querySelector('.picture__img').alt = description;
  newElement.querySelector('.picture__likes').textContent = likesNumber;
  newElement.querySelector('.picture__comments').textContent = getComments.length;

  // Добавляем элементы во фрагмент
  fragment.appendChild(newElement);
});
return pictureListFragment;
}

export {getMiniatures};
