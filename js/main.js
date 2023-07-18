import { getPhotoDescription } from "./generators.js";
import { renderThumbnails } from "./thumbnails.js";
import { initUploadForm } from "./photo-upload-form.js";
const photoDescriptions = Array.from({length: 25}, getPhotoDescription);

renderThumbnails(photoDescriptions);

initUploadForm();
