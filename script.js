const shareBtn = document.querySelector('.share-btn');
const card = document.querySelector('.card');

shareBtn.addEventListener('click', () => {
  card.classList.toggle('active');
});
