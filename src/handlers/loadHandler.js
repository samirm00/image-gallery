import data from '../data.js';
import dom from '../dom.js';
import createImage from '../components/createImage.js';

const loadHandler = () => {
    // loop throw images
    data.images.forEach((imgData) => {
        const id = imgData.id;
        const imgExist = dom.imgs.filter((img) => img.id === id)[0];
        if (!imgExist) {
            const imageDom = createImage(imgData);
            dom.imgs.push({
                id: id,
                title: imgData.title,
                dom: imageDom,
            });

            dom.images.append(imageDom);
        }
    });
};

export default loadHandler;
