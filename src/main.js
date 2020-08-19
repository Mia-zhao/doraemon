const figureElement = document.querySelector(".figure");
figureElement.addEventListener("touchmove", moveEyeballs);
figureElement.addEventListener("mousemove", moveEyeballs);

const pupils = document.querySelectorAll(".pupil");

function moveEyeballs (e) {
  const isTouchEvent = e.type === 'touchmove';
  const clientX = isTouchEvent ? e.touches[0].clientX : e.clientX;
  const clientY = isTouchEvent ? e.touches[0].clientY : e.clientY;
  const left = Math.max(0.1, Math.min((clientX - figureElement.offsetLeft) / figureElement.clientWidth, 0.55));
  const top = Math.max(0.1, Math.min((clientY - figureElement.offsetTop) / figureElement.clientHeight, 0.5));
  pupils.forEach(item => {
    item.style.left = `${left*100}%`;
    item.style.top = `${top*100}%`;
  });
};