import { IS_ESCAPE_KEY } from "./data.js";

const COUNT_COMMENTS_OPEN = 5;

const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const commentList = bigPicture.querySelector('.social__comments');
const commentTemplate = commentList.querySelector('.social__comment');
const commentsShownCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');

let commentsArray = [];
let commentsShown = 0;


const createComment = ({avatar, name, message}) => {
  const comment = commentTemplate.cloneNode(true);
  const commentAvatar = comment.querySelector('.social__picture');
  const commentText = comment.querySelector('.social__text');

  commentAvatar.src = avatar;
  commentAvatar.alt = name;
  commentText.textContent = message;

  return comment;
}

const renderComments = () => {
  commentsShown += COUNT_COMMENTS_OPEN;

  if (commentsShown >= commentsArray.length) {
    commentsLoader.classList.add('hidden');
    commentsShown = commentsArray.length
  } else {
    commentsLoader.classList.remove('hidden');

  }

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < commentsShown; i++) {
    const comment = createComment(commentsArray[i]);
    fragment.append(comment);
  };

  commentList.innerHTML = '';
  commentList.append(fragment);
  commentsShownCount.textContent = `${commentsShown} из ${commentsArray.length} комментариев`;
}

const onButtonLoadCommentsClick = (data) => renderComments(data.comments);


const renderPictureDetails = ({url, likes, description}) => {
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.big-picture__img img').alt = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;

  renderComments();
};

const onKeyDown = (evt) => {
  if (IS_ESCAPE_KEY) {
    evt.preventDefault();
    hideBigPicture();
  }
}

const onCancelButtonClick = () => hideBigPicture();

const hideBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.add('modal-open');
  document.removeEventListener('keydown', onKeyDown);
  closeButton.removeEventListener('click', onCancelButtonClick);

  commentsShown = 0;
}

const onCloseButton = () => hideBigPicture();

const showBigPicture = (data) => {
  commentsArray = data.comments

  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onKeyDown);
  closeButton.addEventListener('click', onCloseButton);
  commentsLoader.addEventListener('click', onButtonLoadCommentsClick);

  renderPictureDetails(data);
}



export {showBigPicture};
