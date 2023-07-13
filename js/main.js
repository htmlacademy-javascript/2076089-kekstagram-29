import { getPhotoDescription } from "./generators.js";
import { renderThumbnails } from "./thumbnails.js";

const photoDescriptions = Array.from({length: 25}, getPhotoDescription);

renderThumbnails(photoDescriptions);
