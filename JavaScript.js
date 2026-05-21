const moreBtn = document.getElementById('moreBtn');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');

moreBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
});