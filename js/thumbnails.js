const pictureTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');

const picturesContainer = document.querySelector('.pictures');

const createThumbNail = ({url, description, likes, comments, id}) => {

  const thumbnail = pictureTemplate.cloneNode(true);

  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.dataset.thumbnailId = id;


  // thumbnail.addEventListener('click', (event) => {
  //   event.preventDefault();
  //   openScreen;
  // });

  return thumbnail;
};

const renderThumbnails = (pictures) => {
  const pictureListFragment = document.createDocumentFragment();
  pictures.forEach ((picture) => {
    const getThumbnail = createThumbNail(picture);
    pictureListFragment.append(getThumbnail);
  });
  picturesContainer.append(pictureListFragment);
}



export {renderThumbnails};
