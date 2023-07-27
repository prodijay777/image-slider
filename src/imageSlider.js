export default function createImageSlider() {

    function createElement(elType, textContent, parentElement, ...classes) {
        const newEl = document.createElement(elType);
        newEl.textContent = textContent;
        classes.map(className => newEl.classList.add(className)); 
        parentElement.appendChild(newEl);
        return newEl;
    }

    function createSlideContainer() {
        const body = document.querySelector('body');
        const pictureFrame = createElement('div', '', body, 'picture-frame');
        const wideDiv = createElement('div', '', pictureFrame, 'wide-div');

        const slide1 = createElement('div', 'slide 1', wideDiv, 'slide', 'slide1');
        const slide2 = createElement('div', 'slide 2', wideDiv, 'slide', 'slide2');
        const slide3 = createElement('div', 'slide 3', wideDiv, 'slide', 'slide3');
    }

    createSlideContainer();

    function getSlideContainer() {
        return document.querySelector('.wide-div');
    }

    function getMoveRight() {
        return document.querySelector('.move-right');
    }

    function getMoveLeft() {
        return document.querySelector('.move-left');
    }

    function checkExistingClass(el, className) {
        return (el.classList.contains(className))
    }

    function removeExistingClass(el, className) {
        el.classList.remove(className)
    }

    function containerMoveLeft() {
        if (checkExistingClass(getSlideContainer(), 'move-right')) {
            removeExistingClass(getSlideContainer(), 'move-right')
        }

        getSlideContainer().classList.add('move-left');
    }

    function containerMoveRight() {
        if (checkExistingClass(getSlideContainer(), 'move-left')) {
            removeExistingClass(getSlideContainer(), 'move-left')
        }

        getSlideContainer().classList.add('move-right');
    }

    function moveLeft() {
        const firstSlide = getSlideContainer().firstChild;
        getSlideContainer().removeChild(firstSlide);
        getSlideContainer().appendChild(firstSlide);
    }

    function moveRight() {
        const firstSlide = getSlideContainer().firstChild;
        const lastSlide = getSlideContainer().lastChild;
        getSlideContainer().removeChild(lastSlide);
        getSlideContainer().insertBefore(lastSlide, firstSlide);
    }

    
    // getMoveRight().addEventListener('click', moveRight);
    // getMoveLeft().addEventListener('click', moveLeft);
    getMoveRight().addEventListener('click', containerMoveRight);
    getMoveLeft().addEventListener('click', containerMoveLeft);
}
