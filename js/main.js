import { getPhotoDesription } from "./generators";
import { getMiniatures } from "./miniatures";

//Массив с описаниями фотографий
// const getPhotoDescriptions = Array.from({length: 25}, getPhotoDesription);

// Находим блок, куда будут вставляться фото
const pictures = document.querySelector('.pictures');

pictures.append(getMiniatures);

