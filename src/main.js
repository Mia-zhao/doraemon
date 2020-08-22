import code from './code.js';

const DEFAULT_INTERVAL = 40;
const NORMAL_CHARS_PER_ITER = 1;

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

let stringBuffer;
let index;
let charsPerIter = NORMAL_CHARS_PER_ITER;

const reset = ()=> {
  stringBuffer = "";
  index = 0;
};

reset();

const printHTML = () => {
  let finished = false;
  for (let i = 0; i < charsPerIter; i++) {
    stringBuffer += code[index] === "\n" ? "<br>" :
      (code[index] === " ") ? "&nbsp;" : code[index];
    index ++;
    if (index > code.length - 1) {
      finished = true;
      break;
    }
  }
  codeContent.innerHTML = stringBuffer;
  codeStyle.innerHTML = `${origStyle}\n${code.substr(0, index)}`;
  scrollToContent();
  if (finished) {
    stop();
    reset();
  }
};

const scrollToContent = ()=> {
  window.scrollTo(0, document.body.scrollHeight);
  document.querySelector("#codeContent-wrapper").scrollTo(0, codeContent.scrollHeight);
};

const stop = ()=> {
  window.clearInterval(id);
  btnPlay.disabled = false;
  btnPause.disabled = true;
};

let id;

const play = (numChars)=> {
  stop();
  btnPlay.disabled = true;
  btnPause.disabled = false;
  charsPerIter = numChars;
  id = setInterval(printHTML, DEFAULT_INTERVAL);
}

btnPlay.disabled = true;
play(charsPerIter);

btnPause.onclick = ()=> {
  stop();
};

btnPlay.onclick = ()=> {
  play(charsPerIter);
};

btnSkip.onclick = ()=> {
  stop();
  codeContent.innerHTML = code.replace(/\n/g, "<br>").replace(/ /g, "&nbsp;");
  codeStyle.innerHTML = `${origStyle}\n${code}`;
  scrollToContent();

  reset();
}

btnNormalSpeed.onclick = ()=> {
  play(NORMAL_CHARS_PER_ITER);
}

btnQuadraSpeed.onclick = ()=> {
  play(4 * NORMAL_CHARS_PER_ITER);
}

btnHexaSpeed.onclick = ()=> {
  play(16 * NORMAL_CHARS_PER_ITER);
}