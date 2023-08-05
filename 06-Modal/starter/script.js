'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const modalButtons = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');



function close() {
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
}
function showModal() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

// Close 
closeModal.addEventListener('click', close);
document.addEventListener('keydown', (e) => {
    if(e.key == 'Escape') {
        close();
    }
});


modalButtons.forEach(button => {
    button.addEventListener('click', showModal);
});

overlay.addEventListener('click', close);
