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

const normalSpeed = 80;
const quadraSpeed = 20;
const hexaSpeed = 5;

let stringBuffer = "";
let index = 0;

let interval = normalSpeed;

const printHTML = () => {
  const isChinseChar = code[index].match(/[\u3400-\u9FBF]/);
  stringBuffer += code[index] === "\n" ? "<br>" :
    (code[index] === " ") ? "&nbsp;" : code[index];
  codeContent.innerHTML = stringBuffer;
  codeStyle.innerHTML = code.substr(0, index+1);
  window.scrollTo(0, document.body.scrollHeight);
  document.querySelector("#codeContent-wrapper").scrollTo(0, codeContent.scrollHeight);
  if (index < code.length - 1) {
    index ++;
  } else {
    window.clearInterval(id);
    return;
  }
};

btnPlay.disabled = true;
let id = setInterval(()=>{
  printHTML()
}, interval);

btnPause.onclick = ()=> {
  window.clearInterval(id);
  btnPause.disabled = true;
  btnPlay.disabled = false;
};

btnPlay.onclick = ()=> {
  id = setInterval(()=>{
    printHTML()
  }, interval);
  btnPause.disabled = false;
  btnPlay.disabled = true;
};

btnSkip.onclick = ()=> {
  window.clearInterval(id);
  codeContent.innerHTML = code.replace(/\n/g, "<br>").replace(/ /g, "&nbsp;");
  codeStyle.innerHTML = code;
  window.scrollTo(0, document.body.scrollHeight);
  document.querySelector("#codeContent-wrapper").scrollTo(0, codeContent.scrollHeight);

  index = 0;
  stringBuffer = "";
}

btnNormalSpeed.onclick = ()=> {
  window.clearInterval(id);
  interval = normalSpeed;
  id = setInterval(()=>{
    printHTML()
  }, interval);
  btnPause.disabled = false;
  btnPlay.disabled = true;
}

btnQuadraSpeed.onclick = ()=> {
  window.clearInterval(id);
  interval = quadraSpeed;
  id = setInterval(()=>{
    printHTML()
  }, interval);
  btnPause.disabled = false;
  btnPlay.disabled = true;
}

btnHexaSpeed.onclick = ()=> {
  window.clearInterval(id);
  interval = hexaSpeed;
  id = setInterval(()=>{
    printHTML()
  }, interval);
  btnPause.disabled = false;
  btnPlay.disabled = true;
}