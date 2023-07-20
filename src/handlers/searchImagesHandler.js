import { data, dom } from '../data.js';
import insertChildAtIndex from '../components/insertChildAtIndex.js';

const searchImageHandler = (value) => {
    dom.imgsDom.forEach((imgDom) => {
        // check if the img already exist in the dom
        const imgExistInDom = document.getElementById(imgDom.id);

        if (value.length > 2) {
            if (!imgDom.title.toLowerCase().includes(value.toLowerCase())) {
                imgDom.dom.remove();
            } else {
                if (!imgExistInDom) {
                    insertChildAtIndex(dom.images, imgDom.dom, imgDom.id - 1);
                }
            }

            // if no img found
            const imgsInDom = document.querySelectorAll('.image-box').length;
            if (imgsInDom === 0) {
                dom.message.innerHTML = `<p>No image found with the title</p>`;
                dom.images.append(dom.message);
            } else {
                dom.message.remove();
            }
        } else {
            dom.message.remove();
            if (!imgExistInDom) {
                insertChildAtIndex(dom.images, imgDom.dom, imgDom.id - 1);
            }
        }
    });
};

export default searchImageHandler;
