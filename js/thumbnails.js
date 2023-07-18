import { showBigPicture } from "./big-picture.js"

const pictureTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');

const picturesContainer = document.querySelector('.pictures');

const createThumbNail = ({id, url, description, likes, comments}) => {

  const thumbnail = pictureTemplate.cloneNode(true);

  picture.dataset.pictureId = id;
  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;

  return thumbnail;
};

const renderThumbnails = (pictures) => {
  const pictureListFragment = document.createDocumentFragment();
  pictures.forEach ((picture) => {
    const thumbnail = createThumbNail(picture);
    thumbnail.addEventListener('click', (evt) => {
      evt.preventDefault();
      showBigPicture(picture);
    })

    pictureListFragment.append(thumbnail);
  });
  picturesContainer.append(pictureListFragment);
}

export {renderThumbnails};
