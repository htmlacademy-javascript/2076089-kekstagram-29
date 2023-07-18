import { getPhotoDescription } from "./generators.js";
import { renderThumbnails } from "./thumbnails.js";
import { setValidator } from "./validation.js";

const photoDescriptions = Array.from({length: 25}, getPhotoDescription);

renderThumbnails(photoDescriptions);

setValidator();
