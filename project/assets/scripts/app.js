const addMovieModal = document.getElementById('add-modal');
const stratAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
};
const toggleBackdropHandler = () => {
    toggleMovieModal();
};

const cancelAddMovie = () => {
    toggleMovieModal();
};

stratAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', toggleBackdropHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovie);

