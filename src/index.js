import "./styles.css";
import { saveAs } from "file-saver";
document.addEventListener("touchstart", function () {}, false);

let canvasMain = document.getElementById("canvasMain");
let ctxMain = canvasMain.getContext("2d");

let downloadButton = document.getElementById("download");

let tabButton01 = document.getElementById("tabbutton-01");
let tabButton02 = document.getElementById("tabbutton-02");
let tabButton03 = document.getElementById("tabbutton-03");
let tabButton04 = document.getElementById("tabbutton-04");
let tabButton05 = document.getElementById("tabbutton-05");

let tabContent01 = document.getElementById("tab01");
let tabContent02 = document.getElementById("tab02");
let tabContent03 = document.getElementById("tab03");
let tabContent04 = document.getElementById("tab04");
let tabContent05 = document.getElementById("tab05");

tabContent01.style.visibility = "visible";
tabContent02.style.visibility = "hidden";
tabContent03.style.visibility = "hidden";
tabContent04.style.visibility = "hidden";
tabContent05.style.visibility = "hidden";

tabButton01.addEventListener("click", showTab01);
function showTab01() {
  tabContent01.style.visibility = "visible";
  tabContent02.style.visibility = "hidden";
  tabContent03.style.visibility = "hidden";
  tabContent04.style.visibility = "hidden";
  tabContent05.style.visibility = "hidden";
}

tabButton02.addEventListener("click", showTab02);
function showTab02() {
  tabContent02.style.visibility = "visible";
  tabContent01.style.visibility = "hidden";
  tabContent03.style.visibility = "hidden";
  tabContent04.style.visibility = "hidden";
  tabContent05.style.visibility = "hidden";
}

tabButton03.addEventListener("click", showTab03);
function showTab03() {
  tabContent03.style.visibility = "visible";
  tabContent01.style.visibility = "hidden";
  tabContent02.style.visibility = "hidden";
  tabContent04.style.visibility = "hidden";
  tabContent05.style.visibility = "hidden";
}

tabButton04.addEventListener("click", showTab04);
function showTab04() {
  tabContent04.style.visibility = "visible";
  tabContent01.style.visibility = "hidden";
  tabContent02.style.visibility = "hidden";
  tabContent03.style.visibility = "hidden";
  tabContent05.style.visibility = "hidden";
}

tabButton05.addEventListener("click", showTab05);
function showTab05() {
  tabContent05.style.visibility = "visible";
  tabContent01.style.visibility = "hidden";
  tabContent02.style.visibility = "hidden";
  tabContent03.style.visibility = "hidden";
  tabContent04.style.visibility = "hidden";
}

let sampleRock = new Image();
sampleRock.crossOrigin = "anonymous";
sampleRock.src = require("../sample-rock.png");

let emptyCanvas = new Image();
emptyCanvas.crossOrigin = "anonymous";
emptyCanvas.src = require("../empty-bg.png");

let rockButton01 = document.getElementById("rockButton01");
let rockButton02 = document.getElementById("rockButton02");
let rockButton03 = document.getElementById("rockButton03");
let rockButton04 = document.getElementById("rockButton04");
let rockButton05 = document.getElementById("rockButton05");
let rockButton06 = document.getElementById("rockButton06");
let rockButton07 = document.getElementById("rockButton07");
let rockButton08 = document.getElementById("rockButton08");
let rockButton09 = document.getElementById("rockButton09");
let rockButton10 = document.getElementById("rockButton10");
let rockButton11 = document.getElementById("rockButton11");
let rockButton12 = document.getElementById("rockButton12");

let rock01 = new Image();
rock01.crossOrigin = "anonymous";
rock01.src = require("../rocks/01-rock-garnet.png");
rockButton01.addEventListener("click", showRock01);

let rock02 = new Image();
rock02.crossOrigin = "anonymous";
rock02.src = require("../rocks/02-rock-amethyst.png");
rockButton02.addEventListener("click", showRock02);

let rock03 = new Image();
rock03.crossOrigin = "anonymous";
rock03.src = require("../rocks/03-rock-bloodstone.png");
rockButton03.addEventListener("click", showRock03);

let rock04 = new Image();
rock04.crossOrigin = "anonymous";
rock04.src = require("../rocks/04-rock-sapphire.png");
rockButton04.addEventListener("click", showRock04);

let rock05 = new Image();
rock05.crossOrigin = "anonymous";
rock05.src = require("../rocks/05-rock-agate.png");
rockButton05.addEventListener("click", showRock05);

let rock06 = new Image();
rock06.crossOrigin = "anonymous";
rock06.src = require("../rocks/06-rock-moonstone.png");
rockButton06.addEventListener("click", showRock06);

let rock07 = new Image();
rock07.crossOrigin = "anonymous";
rock07.src = require("../rocks/07-rock-peridot.png");
rockButton07.addEventListener("click", showRock07);

let rock08 = new Image();
rock08.crossOrigin = "anonymous";
rock08.src = require("../rocks/08-rock-carnelian-v3.png");
rockButton08.addEventListener("click", showRock08);

let rock09 = new Image();
rock09.crossOrigin = "anonymous";
rock09.src = require("../rocks/09-rock-opal.png");
rockButton09.addEventListener("click", showRock09);

let rock10 = new Image();
rock10.crossOrigin = "anonymous";
rock10.src = require("../rocks/10-rock-aquamarine.png");
rockButton10.addEventListener("click", showRock10);

let rock11 = new Image();
rock11.crossOrigin = "anonymous";
rock11.src = require("../rocks/11-rock-topaz.png");
rockButton11.addEventListener("click", showRock11);

let rock12 = new Image();
rock12.crossOrigin = "anonymous";
rock12.src = require("../rocks/12-rock-ruby.png");
rockButton12.addEventListener("click", showRock12);

sampleRock.onload = renderMain;
let currentRock = sampleRock;

function showRock01() {
  currentRock = rock01;
  renderMain();
}

function showRock02() {
  currentRock = rock02;
  renderMain();
}

function showRock03() {
  currentRock = rock03;
  renderMain();
}

function showRock04() {
  currentRock = rock04;
  renderMain();
}

function showRock05() {
  currentRock = rock05;
  renderMain();
}

function showRock06() {
  currentRock = rock06;
  renderMain();
}

function showRock07() {
  currentRock = rock07;
  renderMain();
}

function showRock08() {
  currentRock = rock08;
  renderMain();
}

function showRock09() {
  currentRock = rock09;
  renderMain();
}

function showRock10() {
  currentRock = rock10;
  renderMain();
}

function showRock11() {
  currentRock = rock11;
  renderMain();
}

function showRock12() {
  currentRock = rock12;
  renderMain();
}

let faceButtonEmpty = document.getElementById("faceButtonEmpty");
let faceButton01 = document.getElementById("faceButton01");
let faceButton02 = document.getElementById("faceButton02");
let faceButton03 = document.getElementById("faceButton03");
let faceButton04 = document.getElementById("faceButton04");
let faceButton05 = document.getElementById("faceButton05");
let faceButton06 = document.getElementById("faceButton06");
let faceButton07 = document.getElementById("faceButton07");
let faceButton08 = document.getElementById("faceButton08");

faceButtonEmpty.addEventListener("click", emptyFace);

let face01 = new Image();
face01.crossOrigin = "anonymous";
face01.src = require("../faces/face-01.png");
faceButton01.addEventListener("click", showFace01);

let face02 = new Image();
face02.crossOrigin = "anonymous";
face02.src = require("../faces/face-02.png");
faceButton02.addEventListener("click", showFace02);

let face03 = new Image();
face03.crossOrigin = "anonymous";
face03.src = require("../faces/face-03.png");
faceButton03.addEventListener("click", showFace03);

let face04 = new Image();
face04.crossOrigin = "anonymous";
face04.src = require("../faces/face-04.png");
faceButton04.addEventListener("click", showFace04);

let face05 = new Image();
face05.crossOrigin = "anonymous";
face05.src = require("../faces/face-05.png");
faceButton05.addEventListener("click", showFace05);

let face06 = new Image();
face06.crossOrigin = "anonymous";
face06.src = require("../faces/face-06.png");
faceButton06.addEventListener("click", showFace06);

let face07 = new Image();
face07.crossOrigin = "anonymous";
face07.src = require("../faces/face-07.png");
faceButton07.addEventListener("click", showFace07);

let face08 = new Image();
face08.crossOrigin = "anonymous";
face08.src = require("../faces/face-08.png");
faceButton08.addEventListener("click", showFace08);

let currentFace = emptyCanvas;

function emptyFace() {
  currentFace = emptyCanvas;
  renderMain();
}

function showFace01() {
  currentFace = face01;
  renderMain();
}

function showFace02() {
  currentFace = face02;
  renderMain();
}

function showFace03() {
  currentFace = face03;
  renderMain();
}

function showFace04() {
  currentFace = face04;
  renderMain();
}

function showFace05() {
  currentFace = face05;
  renderMain();
}

function showFace06() {
  currentFace = face06;
  renderMain();
}

function showFace07() {
  currentFace = face07;
  renderMain();
}

function showFace08() {
  currentFace = face08;
  renderMain();
}

let hairButtonEmpty = document.getElementById("hairButtonEmpty");
let hairButton01 = document.getElementById("hairButton01");
let hairButton02 = document.getElementById("hairButton02");
let hairButton03 = document.getElementById("hairButton03");
let hairButton04 = document.getElementById("hairButton04");

hairButtonEmpty.addEventListener("click", emptyHair);

let hair01 = new Image();
hair01.crossOrigin = "anonymous";
hair01.src = require("../hair/hair-01.png");
hairButton01.addEventListener("click", showHair01);

let hair02 = new Image();
hair02.crossOrigin = "anonymous";
hair02.src = require("../hair/hair-02.png");
hairButton02.addEventListener("click", showHair02);

let hair03 = new Image();
hair03.crossOrigin = "anonymous";
hair03.src = require("../hair/hair-03.png");
hairButton03.addEventListener("click", showHair03);

let hair04 = new Image();
hair04.crossOrigin = "anonymous";
hair04.src = require("../hair/hair-04.png");
hairButton04.addEventListener("click", showHair04);

let currentHair = emptyCanvas;

function emptyHair() {
  currentHair = emptyCanvas;
  renderMain();
}

function showHair01() {
  currentHair = hair01;
  renderMain();
}

function showHair02() {
  currentHair = hair02;
  renderMain();
}

function showHair03() {
  currentHair = hair03;
  renderMain();
}

function showHair04() {
  currentHair = hair04;
  renderMain();
}

let accButtonEmpty = document.getElementById("accButtonEmpty");
let accButton01 = document.getElementById("accButton01");
let accButton02 = document.getElementById("accButton02");
let accButton03 = document.getElementById("accButton03");
let accButton04 = document.getElementById("accButton04");
let accButton05 = document.getElementById("accButton05");

accButtonEmpty.addEventListener("click", emptyAcc);

let acc01 = new Image();
acc01.crossOrigin = "anonymous";
acc01.src = require("../acc/acc-01.png");
accButton01.addEventListener("click", showAcc01);

let acc02 = new Image();
acc02.crossOrigin = "anonymous";
acc02.src = require("../acc/acc-02.png");
accButton02.addEventListener("click", showAcc02);

let acc03 = new Image();
acc03.crossOrigin = "anonymous";
acc03.src = require("../acc/acc-03.png");
accButton03.addEventListener("click", showAcc03);

let acc04 = new Image();
acc04.crossOrigin = "anonymous";
acc04.src = require("../acc/acc-04.png");
accButton04.addEventListener("click", showAcc04);

let acc05 = new Image();
acc05.crossOrigin = "anonymous";
acc05.src = require("../acc/acc-05.png");
accButton05.addEventListener("click", showAcc05);

let currentAcc = emptyCanvas;

function emptyAcc() {
  currentAcc = emptyCanvas;
  renderMain();
}

function showAcc01() {
  currentAcc = acc01;
  renderMain();
}

function showAcc02() {
  currentAcc = acc02;
  renderMain();
}

function showAcc03() {
  currentAcc = acc03;
  renderMain();
}

function showAcc04() {
  currentAcc = acc04;
  renderMain();
}

function showAcc05() {
  currentAcc = acc05;
  renderMain();
}

let bgButtonEmpty = document.getElementById("bgButtonEmpty");
let bgButton01 = document.getElementById("bgButton01");
let bgButton02 = document.getElementById("bgButton02");
let bgButton03 = document.getElementById("bgButton03");
let bgButton04 = document.getElementById("bgButton04");
let bgButton05 = document.getElementById("bgButton05");
let bgButton06 = document.getElementById("bgButton06");
let bgButton07 = document.getElementById("bgButton07");
let bgButton08 = document.getElementById("bgButton08");
let bgButton09 = document.getElementById("bgButton09");

bgButtonEmpty.addEventListener("click", emptyBg);

let bg01 = new Image();
bg01.crossOrigin = "anonymous";
bg01.src = require("../backgrounds/01-background-space.jpg");
bgButton01.addEventListener("click", showBg01);

let bg02 = new Image();
bg02.crossOrigin = "anonymous";
bg02.src = require("../backgrounds/02-background-underwater.jpg");
bgButton02.addEventListener("click", showBg02);

let bg03 = new Image();
bg03.crossOrigin = "anonymous";
bg03.src = require("../backgrounds/03-background-centralpark.jpg");
bgButton03.addEventListener("click", showBg03);

let bg04 = new Image();
bg04.crossOrigin = "anonymous";
bg04.src = require("../backgrounds/04-background-sand.jpg");
bgButton04.addEventListener("click", showBg04);

let bg05 = new Image();
bg05.crossOrigin = "anonymous";
bg05.src = require("../backgrounds/05-background-moon.jpg");
bgButton05.addEventListener("click", showBg05);

let bg06 = new Image();
bg06.crossOrigin = "anonymous";
bg06.src = require("../backgrounds/06-background-rainforest.jpg");
bgButton06.addEventListener("click", showBg06);

let bg07 = new Image();
bg07.crossOrigin = "anonymous";
bg07.src = require("../backgrounds/07-background-gooey.jpg");
bgButton07.addEventListener("click", showBg07);

let bg08 = new Image();
bg08.crossOrigin = "anonymous";
bg08.src = require("../backgrounds/08-background-rocks.jpg");
bgButton08.addEventListener("click", showBg08);

let bg09 = new Image();
bg09.crossOrigin = "anonymous";
bg09.src = require("../backgrounds/08-background-shiny.jpg");
bgButton09.addEventListener("click", showBg09);

let currentBg = emptyCanvas;

function emptyBg() {
  currentBg = emptyCanvas;
  renderMain();
}

function showBg01() {
  currentBg = bg01;
  renderMain();
}

function showBg02() {
  currentBg = bg02;
  renderMain();
}

function showBg03() {
  currentBg = bg03;
  renderMain();
}

function showBg04() {
  currentBg = bg04;
  renderMain();
}

function showBg05() {
  currentBg = bg05;
  renderMain();
}

function showBg06() {
  currentBg = bg06;
  renderMain();
}

function showBg07() {
  currentBg = bg07;
  renderMain();
}

function showBg08() {
  currentBg = bg08;
  renderMain();
}

function showBg09() {
  currentBg = bg09;
  renderMain();
}

function renderMain() {
  ctxMain.clearRect(0, 0, canvasMain.width, canvasMain.height);
  ctxMain.drawImage(currentBg, 0, 0, 320, 320);
  ctxMain.drawImage(currentRock, 0, 0, 320, 320);
  ctxMain.drawImage(currentFace, 0, 0, 320, 320);
  ctxMain.drawImage(currentHair, 0, 0, 320, 320);
  ctxMain.drawImage(currentAcc, 0, 0, 320, 320);
}

downloadButton.addEventListener("click", () => {
  console.log("download!");
  canvasMain.toBlob(function (blob) {
    console.log(blob);
    saveAs(blob, "myPetRock.png");
  });
});
