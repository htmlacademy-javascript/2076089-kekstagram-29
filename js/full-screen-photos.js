const bigPicture = document.querySelector('.big-picture');
const commentCountList = bigPicture.querySelector('.social__comment-count');
const commentListElement = bigPicture.querySelector('.social__comments');
const commentListLoader = bigPicture.querySelector('.comments-loader');
const bodyElement = document.querySelector('body');
const cancelButton = bigPicture.querySelector('.big-picture__cancel');
const commentElement = document.querySelector('.social__comment');


const createComment = ({avatar, name, message}) => {
  const comment = commentElement.cloneNode(true);

  comment.querySelector('.social-picture').src = avatar;
  comment.querySelector('.social-picture').alt = name;
  comment.querySelector('.social-text').textContent = message;

  return comment;
}

const renderComments = (comments) => {
  commentListElement.innerHTML = '';

  const commentsFragment = document.createDocumentFragment();
  comments.forEach((item) => {
    const comment = createComment(item);
    commentsFragment.append(comment);
  });
}

const hideBigPicture = () => {
  bigPicture.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeyDown);
}

const onDocumentKeyDown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideBigPicture();
  }
}

const onCancelButton = () => {
  hideBigPicture();
}

const renderPictureDetails = ({url, likes, description}) => {
  bigPicture.querySelector('.big-picture_img img').src = url;
  bigPicture.querySelector('.big-picture_img img').alt = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social-caption').textContent = description;
};


const showBigPicture = (data) => {
  bigPicture.classList.remove('hidden');
  bodyElement.classList.remove('modal-open');
  commentListLoader.classList.add('hidden');
  commentCountList.classList.add('hidden');

  document.addEventListener('keydown', onDocumentKeyDown);

  renderPictureDetails(data);
  renderComments(data.comments);
}

cancelButton.addEventListener('click', onCancelButton);


export {showBigPicture};
