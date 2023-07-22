const createImage = (imgData) => {
    // create container
    const container = document.createElement('div');
    container.classList.add('image-box');
    container.id = imgData.id;

    // create img
    const img = document.createElement('img');
    img.src = imgData.src;
    img.alt = imgData.title;

    // create title
    const title = document.createElement('h6');
    title.innerText = imgData.title;

    container.append(img, title);

    return container;
};

export default createImage;
