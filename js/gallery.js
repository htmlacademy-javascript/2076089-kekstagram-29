import { renderThumbnails } from "./thumbnails.js";
import { showBigPicture } from "./full-screen-photos.js"

const picturesContainer = document.querySelector('.pictures');

const renderGallery = (pictures) => {
  picturesContainer.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-thumbnail-id');
    if (!thumbnail) {
      return;
    }

    evt.preventDefault();
    const picture = pictures.find(
      (item) => item.id === +thumbnail.dataset.thumbnailId
    );
    showBigPicture(picture);
  })
  renderThumbnails(pictures);
};

export {renderGallery};
