document.addEventListener("DOMContentLoaded", () => {
  const intro = document.querySelector(".intro");

  const vanish = setTimeout(() => {
    intro.classList.add('vanish');
  },2000);
  setTimeout(() => {
    intro.remove();
  },4000);

  intro.addEventListener('click', ()=>{
    clearTimeout(vanish);
    intro.classList.add('vanish');
    setTimeout(() => {
      intro.remove();
    },2000);
  })
});
