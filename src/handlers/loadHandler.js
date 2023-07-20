import { data, dom } from '../data.js';
import createImage from '../components/createImage.js';

const loadHandler = () => {
    // loop throw images
    data.images.forEach((imgData) => {
        const id = imgData.id;
        const imgExist = dom.imgsDom.filter((img) => img.id === id)[0];
        if (!imgExist) {
            const imageDom = createImage(imgData);
            dom.imgsDom.push({
                id: id,
                title: imgData.title,
                dom: imageDom,
            });

            dom.images.append(imageDom);
        }
    });

    console.log(dom.imgsDom);
};

export default loadHandler;
