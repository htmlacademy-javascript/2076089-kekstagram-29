import { isEscapeKey } from "./random-functions.js";
import { downScale, increaseScale } from "./photo-scale.js";
import { isInputFocus } from "./validation.js";
import { onSliderUpdate } from "./photo-slider.js";
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
const sliderElement = imgEffectsContainer.querySelector('.effect-level__slider');

const onKeyDown = (evt) => {
  if (isEscapeKey(evt) && !(isInputFocus())) {
    evt.preventDefault();
    hideForm();
  }
}

const onChangeOpenForm = () => {
  hiddenPhotoForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onKeyDown);
}

imgUploadForm.addEventListener('change', onChangeOpenForm);

const hideForm = () => {
  imgUploadForm.value = '';
  hiddenPhotoForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

const onClickHideForm = () => hideForm();

resetButton.addEventListener('click', onClickHideForm);

buttonScaleControlSmaller.addEventListener('click', downScale)
buttonScaleControlBigger.addEventListener('click', increaseScale)

imgEffectsContainer.classList.add('hidden');

sliderElement.noUiSlider.on('update', onSliderUpdate);


