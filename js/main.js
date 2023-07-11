import { getPhotoDescription } from "./generators.js";
import { renderGallery } from "./gallery.js";

const photoDescriptions = Array.from({length: 25}, getPhotoDescription);

renderGallery(photoDescriptions);
