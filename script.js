const btn = document.querySelector('.btn');
const img = document.querySelector('.img');
const imgHide = document.querySelector('img');

btn.addEventListener('click', function () {
  imgHide.classList.remove('hidden');

  const randImg = Math.trunc(Math.random() * 604) + 1;

  img.src = `/img/${randImg}.gif`;

  if (btn) {
    btn.textContent = 'اقرأ ورد آخر';
  }
});
