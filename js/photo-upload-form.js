import { IS_ESCAPE_KEY } from "./data.js";
import { downScale, increaseScale, initScale } from "./photo-scale.js";
import { isInputFocus, setValidator, resetPristine } from "./validation.js";
import { sliderUpdateChange, initSlider } from "./photo-slider.js";
// Поля формы
const uploadForm = document.querySelector('.img-upload__form');
const imgUploadForm = uploadForm.querySelector('.img-upload__input');
const hiddenPhotoForm = uploadForm.querySelector('.img-upload__overlay');
const resetButton = uploadForm.querySelector('.img-upload__cancel');

// Кнопки контроля масштаба
const imgUploadFieldset = document.querySelector('.img-upload__scale');
const buttonScaleControlSmaller = imgUploadFieldset.querySelector('.scale__control--smaller');
const buttonScaleControlBigger = imgUploadFieldset.querySelector('.scale__control--bigger');

// Эффекты
const imgEffectsContainer = uploadForm.querySelector('.img-upload__effect-level');


const onKeyDown = (evt) => {
  if (IS_ESCAPE_KEY(evt) && !(isInputFocus())) {
    evt.preventDefault();
    onClickHideForm();
  }
}

const onChangeOpenForm = () => {
  hiddenPhotoForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onKeyDown);
}

const onClickHideForm = () => {
  uploadForm.reset();
  initScale();
  initSlider();
  resetPristine();
  hiddenPhotoForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onKeyDown);
}

const initUploadForm = () => {
  setValidator();
  imgUploadForm.addEventListener('change', onChangeOpenForm);
  resetButton.addEventListener('click', onClickHideForm);
  buttonScaleControlSmaller.addEventListener('click', downScale)
  buttonScaleControlBigger.addEventListener('click', increaseScale)
  imgEffectsContainer.classList.add('hidden');
  sliderUpdateChange();
}

export {initUploadForm};
