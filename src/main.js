import code from './code.js';

const figureElement = document.querySelector(".figure");
figureElement.addEventListener("touchmove", moveEyeballs);
figureElement.addEventListener("mousemove", moveEyeballs);

function moveEyeballs (e) {
  const pupils = document.querySelectorAll(".pupil");
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

let stringBuffer = "";
let index = 0;

(function printHTML(timeout=20) {
  setTimeout(()=>{
    const isChinseChar = code[index].match(/[\u3400-\u9FBF]/);
    stringBuffer += code[index] === "\n" ? "<br>" :
      (code[index] === " ") ? "&nbsp;" : code[index];
    codeContent.innerHTML = stringBuffer;
    codeStyle.innerHTML = code.substr(0, index+1);
    window.scrollTo(0, document.body.scrollHeight);
    document.querySelector("#codeContent-wrapper").scrollTo(0, codeContent.scrollHeight);
    if (index < code.length - 1) {
      index ++;
      printHTML(isChinseChar ? 80 : undefined);
    }
  }, timeout)
}) ();