import dom from '../dom.js';
import searchImageHandler from '../handlers/searchImagesHandler.js';

const searchImagesListener = () => {
    dom.input.addEventListener('keyup', () => {
        const value = dom.input.value;
        searchImageHandler(value);
    });
};

export default searchImagesListener;
