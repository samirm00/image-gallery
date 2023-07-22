import { dom } from '../data.js';
import searchImageHandler from '../handlers/searchImagesHandler.js';

dom.input.addEventListener('keyup', () => {
    const value = dom.input.value;
    searchImageHandler(value);
});
