const code = `/* 动态展示Doraemon给你
 * 首先设置一个背景色
 */
body {
  background-color: rgb(212, 235, 249);
}
/*
 * 画出Doraemon头部
 */
.head {
  border: var(--border-style);
  height: 140px;
  width: 152px;
  border-radius: 50%;
  background-color: var(--doraemon-blue);
  position: absolute;
  left: 50%;
  margin-left: -76px;
  top: 32px;
  z-index: 5;
}
/*
 * 画出眼睛和鼻子
 */
.eye {
  border: var(--border-style);
  height: 50px;
  width: 40px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: 7px;
  left: 50%;
  z-index: 2;
}

.eye.left {
  margin-left: -40px;
}

.pupil {
  height: 18px;
  width: 12px;
  border-radius: 50%;
  background-color: black;
  position: absolute;
  top: 17px;
}
.pupil::before {
  content: '';
  height: 6px;
  width: 4px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: 6px;
  left: 4px;
}

.pupil.left {
  right: 3px;
}
.pupil.right {
 left: 3px;
}

.nose {
  border: var(--border-style);
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background-color: var(--doraemon-red);
  position: absolute;
  top: 42px;
  left: 50%;
  margin-left: -12px;
  z-index: 3;
}
.nose::before {
  content: '';
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: 3px;
  left: 3px;
}
/*
 * 画出脸颊
 */
.cheek {
  border: var(--border-style);
  height: 110px;
  width: 140px;
  border-radius: 50% 50% 60% 60%;
  background-color: white;
  position: absolute;
  top: 27px;
  left: 4px;
}
/*
 * 画出胡须和嘴巴
 */
.moustache-mid {
  border-left: var(--border-style);
  width: 10px;
  height: 40px;
  position: absolute;
  left: 50%;
  margin-left: -1px;
  top: 50px;
  z-index: 2;
}

.moustache {
  border-bottom: var(--border-style);
  height: 10px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  z-index: 2;
}
.moustache.left1 {
  width: 40px;
  margin-left: -66px;
  top: 44px;
  transform: rotate(25deg);
}
.moustache.right1 {
  width: 40px;
  margin-left: 25px;
  top: 44px;
  transform: rotate(-25deg);
}
.moustache.left2 {
  width: 44px;
  margin-left: -70px;
  top: 52px;
  transform: rotate(15deg);
}
.moustache.right2 {
  width: 44px;
  margin-left: 26px;
  top: 52px;
  transform: rotate(-15deg);
}
.moustache.left3 {
  width: 48px;
  margin-left: -74px;
  top: 60px;
  transform: rotate(5deg);
}
.moustache.right3 {
  width: 48px;
  margin-left: 26px;
  top: 60px;
  transform: rotate(-5deg);
}

.mouth {
  border: var(--border-style);
  width: 112px;
  height: 56px;
  border-radius: 0 0 100px 100px;
  background-color: var(--doraemon-red);
  position: absolute;
  left: 50%;
  margin-left: -56px;
  top: 74px;
  z-index: 4;
  overflow: hidden;
}

.tongue {
  width: 60px;
  height: 60px;
  background-color: var(--tongue-color);
  position: absolute;
  left: 50%;
  top: 15px;
}
.tongue.left {
  margin-left: -50px;
  border-radius: 50% 50% 0 0;
}
.tongue.right {
  margin-left: -10px;
  border-radius: 50% 50% 0 0;
}
/*
 * 手和身体
 */
.arm {
  border: var(--border-style);
  height: 90px;
  width: 50px;
  background-color: var(--doraemon-blue);
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 97px;
  z-index: 3;
}
.arm.left {
  margin-left: -95px;
  transform: rotate(-35deg);
}
.arm.right {
  margin-left: 45px;
  transform: rotate(35deg);
}

.hand {
  border: var(--border-style);
  background-color: white;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  position: absolute;
  top: 92px;
  left: 50%;
  z-index: 4;
}
.hand.left {
  margin-left: -110px; 
}
.hand.right {
  margin-left: 54px;
}

.body {
  border: var(--border-style);
  height: 140px;
  width: 120px;
  border-radius: 48%;
  background-color: var(--doraemon-blue);
  position: absolute;
  top: 112px;
  left: 50%;
  margin-left: -60px;
  z-index: 1;
}

.body-white {
  border: var(--border-style);
  height: 80px;
  width: 88px;
  border-radius: 40% 40% 50% 50%;
  background-color: white;
  position: absolute;
  bottom: 6px;
  left: 50%;
  margin-left: -44px; 
}
/*
 * 加一个四次元百宝袋
 */
.pocket {
  border: var(--border-style);
  background-color: white;
  width: 72px;
  height: 36px;
  border-radius: 0 0 100px 100px;
  position: absolute;
  left: 50%;
  top: 38px;
  margin-left: -36px;
}
/*
 * 画上腿
 */
.leg {
  border: var(--border-style);
  height: 80px;
  width: 50px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: 188px;
  left: 50%;
}
.leg.left {
  margin-left: -50px;
}
/*
 * 加上小铃铛
 */
.choker {
  border: var(--border-style);
  background-color: var(--doraemon-red);
  height: 80px;
  width: 100px;
  border-radius: 40px;
  position: absolute;
  left: 50%;
  margin-left: -50px;
  top: 99px;
  z-index: 4;
}

.bell {
  border: var(--border-style);
  background-color: var(--bell-color);
  width: 28px;
  height: 28px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  margin-left: -14px;
  top: 174px;
  z-index: 5;
  overflow: hidden;
  animation: bell-animation 1.4s infinite linear;
}

.bell .circle {
  border: var(--border-style);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: grey;
  position: absolute;
  left: 50%;
  margin-left: -4px;
  top: 12px;
  z-index: 2;
}

.bell .rect {
  width: 4px;
  height: 10px;
  background-color: black;
  position: absolute;
  left: 50%;
  margin-left: -2px;
  top: 16px;
  z-index: 1;
}

.bell .band {
  border-bottom: var(--border-style);
  height: 8px;
  width: 36px;
  border-radius: 50%;
  background-color: transparent;
  position: absolute;
  left: 50%;
  margin-left: -18px;
}
.bell .band.top {
  top: -1px;
}
.bell .band.bottom {
  top: 3px;
}
@keyframes bell-animation {
  0%, 32%, 40%, 48%, 56%, 64%, 76%, 84%, 92%, 100% {
    transform: rotate(0deg);
    transform-origin: top center;
  }
  36%, 52%, 72%, 88% {
    transform: rotate(30deg);
    transform-origin: top center;
  }
  44%, 60%, 80%, 96% {
    transform: rotate(-30deg);
    transform-origin: top center;
  }
}
/*
 * 补上竹蜻蜓
 */
.hopter .semi-circle {
  border: var(--border-style);
  background-color: var(--bell-color);
  width: 16px;
  height: 8px;
  border-radius: 50px 50px 0 0;
  position: absolute;
  left: 50%;
  margin-left: -8px;
  top: 26px;
  z-index: 2;
}

.hopter .rect {
  border: var(--border-style);
  background-color: var(--bell-color);
  width: 8px;
  height: 36px;
  border-radius: 5px;
  position: absolute;
  left: 50%;
  margin-left: -4px;
}

.hopter .plate {
  height: 5px;
  width: 100px;
  border-radius: 5px;
  background-color: grey;
  opacity: 0.95;
  position: absolute;
  left: 50%;
  margin-left: -50px;
  z-index: 2;
  animation: hopter-animation 0.2s infinite linear;
}
/*
 * 最后加上动画
 */
@keyframes doraemon-animation {
  0%, 40%, 80%, 100% {
    transform: translateY(0px);
  }
  20% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-30px);
  }
}
 `;

 module.exports = code;