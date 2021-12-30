const modalContainer = document.querySelector('.pop-up-message');
const modalBtn = document.querySelector('.pop-up-btn');

modalBtn.addEventListener('click', () => {
    modalContainer.style.visibility = "hidden";
    modalContainer.style.opacity = "0";
})


window.addEventListener('load', () => {
    setTimeout(() => {
        modalContainer.classList.add('pop-up-show')
    }, 1000);
    setTimeout(() => {
        modalContainer.classList.remove('pop-up-show')
    }, 4000);
});