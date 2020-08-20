import code from './code.js';

const normalSpeed = 80;
const quadraSpeed = 20;
const hexaSpeed = 5;

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

let codeStyle = document.querySelector("#codeStyle");
codeStyle = codeStyle ? codeStyle : document.querySelector("style");
const origStyle = document.querySelector("style").innerHTML;

let stringBuffer = "";
let index = 0;

let finished = false;

let interval = normalSpeed;

const printHTML = () => {
  stringBuffer += code[index] === "\n" ? "<br>" :
    (code[index] === " ") ? "&nbsp;" : code[index];
  codeContent.innerHTML = stringBuffer;
  codeStyle.innerHTML = `${origStyle}\n${code.substr(0, index+1)}`;
  scrollToContent();
  if (index < code.length - 1) {
    index ++;
  } else {
    finished = true;
    stop();
  }
};

const scrollToContent = ()=> {
  window.scrollTo(0, document.body.scrollHeight);
  document.querySelector("#codeContent-wrapper").scrollTo(0, codeContent.scrollHeight);
};

const play = (interval)=> {
  btnPlay.disabled = true;
  btnPause.disabled = false;
  return setInterval(printHTML, interval);
}

const stop = ()=> {
  window.clearInterval(id);
  btnPlay.disabled = false;
  btnPause.disabled = true;
};

btnPlay.disabled = true;
let id = play(interval);

btnPause.onclick = ()=> {
  stop();
};

btnPlay.onclick = ()=> {
  if (finished) {
    index = 0;
    stringBuffer = "";
    finished = false;
  }
  id = play(interval);
};

btnSkip.onclick = ()=> {
  stop();
  codeContent.innerHTML = code.replace(/\n/g, "<br>").replace(/ /g, "&nbsp;");
  codeStyle.innerHTML = `${origStyle}\n${code}`;
  scrollToContent();

  finished = true;
}

btnNormalSpeed.onclick = ()=> {
  stop();
  interval = normalSpeed;
  id = play(interval);
}

btnQuadraSpeed.onclick = ()=> {
  stop();
  interval = quadraSpeed;
  id = play(interval);
}

btnHexaSpeed.onclick = ()=> {
  stop();
  interval = hexaSpeed;
  id = play(interval);
}