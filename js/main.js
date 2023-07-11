<<<<<<< HEAD
import { getPhotoDesription } from "./generators";
import { getMiniatures } from "./miniatures";

//Массив с описаниями фотографий
// const getPhotoDescriptions = Array.from({length: 25}, getPhotoDesription);

// Находим блок, куда будут вставляться фото
const pictures = document.querySelector('.pictures');

pictures.append(getMiniatures);

=======
import { getPhotoDescription } from "./generators.js";
import { renderGallery } from "./gallery.js";

const photoDescriptions = Array.from({length: 25}, getPhotoDescription);

renderGallery(photoDescriptions);


>>>>>>> ad1b770 (full photo added + bugs fixed)
