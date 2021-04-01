const popupDiv = document.querySelector('.instagram-popup-div');
const popupButton = document.querySelector('.close-popup');

popupButton.addEventListener('click', () => {
    popupDiv.classList.remove('instagram-popup-div-show');
    popupDiv.classList.add('instagram-popup-div-remove')
});