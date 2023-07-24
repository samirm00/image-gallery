import dom from '../dom.js';
import insertChildAtIndex from '../components/insertChildAtIndex.js';

const searchImageHandler = (value) => {
    dom.imgs.forEach((img) => {
        // check if the img already exist in the dom
        const imgExistInDom = document.getElementById(img.id);

        if (value.length > 2) {
            if (!img.title.toLowerCase().includes(value.toLowerCase())) {
                img.dom.remove();
            } else {
                if (!imgExistInDom) {
                    insertChildAtIndex(dom.images, img.dom, img.id - 1);
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
                insertChildAtIndex(dom.images, img.dom, img.id - 1);
            }
        }
    });
};

export default searchImageHandler;
