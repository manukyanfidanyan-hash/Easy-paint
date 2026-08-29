const canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");

canvas.width = window.innerWidth / 1.5;
canvas.height = window.innerHeight / 1.5;
// ! first part // -----------------------------------------------------------------------------------)
let myDrawChecker = false;
let myLineChecker = false;
let myRetinChecker = false;
let firstLine = false;
let mySquareChecker = false;
let mySquareChecker2 = false;

let linePos1x = 0;
let linePos1y = 0;

let linePos2x = 0;
let linePos2y = 0;

let squarePos1x = 0;
let squarePos1y = 0;

let squarePos2x = 0;
let squarePos2y = 0;

document.addEventListener("keydown", (e) => {
   if (e.key === 'Shift') {
      // @ts-ignore
      document.getElementById("square_square").checked = true;
   }
});

document.addEventListener("keyup", (e) => {
   if (e.key === 'Shift') {
      // @ts-ignore
      document.getElementById("square_square").checked = false;
   }
});
// --------------------------------------------------------------------------------------------------------------------------------------------------------)
canvas.addEventListener("mousemove", (e) => {
   cursor.pos.x = e.clientX - (window.innerWidth / 2 - canvas.width / 2);
   cursor.pos.y = e.clientY - (window.innerHeight / 2 - canvas.height / 2);

   setTimeout(() => {
      cursor.pos2.x1 = e.clientX - (window.innerWidth / 2 - canvas.width / 2);
      cursor.pos2.y1 = e.clientY - (window.innerHeight / 2 - canvas.height / 2);
   }, 1);

   if (myLineChecker == true) {
      linePos2x = e.clientX - (window.innerWidth / 2 - canvas.width / 2);
      linePos2y = e.clientY - (window.innerHeight / 2 - canvas.height / 2);
   }

   if (myRetinChecker == true) {
      retin.pos.x = e.clientX - (window.innerWidth / 2 - canvas.width / 2);
      retin.pos.y = e.clientY - (window.innerHeight / 2 - canvas.height / 2);
   }
   // @ts-ignore
   if (mySquareChecker == true) {
      squarePos2x = e.clientX - (window.innerWidth / 2 - canvas.width / 2);
      squarePos2y = e.clientY - (window.innerHeight / 2 - canvas.height / 2);
   }
});

document.addEventListener("touchstart", (e) => {
   window.alert("You can't draw on phone");
});

canvas.addEventListener("mousedown", (e) => {
   // @ts-ignore
   if (document.getElementById("pencil").value == 'pencil') {
      myDrawChecker = true;
   }

   // @ts-ignore
   if (document.getElementById("pencil").value == 'line') {
      myLineChecker = true;
      line.circleEnds = false;

      linePos1x = e.clientX - (window.innerWidth / 2 - canvas.width / 2);
      linePos1y = e.clientY - (window.innerHeight / 2 - canvas.height / 2);
  
      linePos2x = e.clientX - (window.innerWidth / 2 - canvas.width / 2);
      linePos2y = e.clientY - (window.innerHeight / 2 - canvas.height / 2);

      line.draw();
   }

      // @ts-ignore
   if (document.getElementById("pencil").value == 'line2') {
      myLineChecker = true;
      line.circleEnds = true;

      linePos1x = e.clientX - (window.innerWidth / 2 - canvas.width / 2);
      linePos1y = e.clientY - (window.innerHeight / 2 - canvas.height / 2);
  
      linePos2x = e.clientX - (window.innerWidth / 2 - canvas.width / 2);
      linePos2y = e.clientY - (window.innerHeight / 2 - canvas.height / 2);

      line.draw();
   }

   // @ts-ignore
   if (document.getElementById("pencil").value == 'retin') {
      retin.pos.x = e.clientX - (window.innerWidth / 2 - canvas.width / 2);
      retin.pos.y = e.clientY - (window.innerHeight / 2 - canvas.height / 2);

      myRetinChecker = true;
   }

   // @ts-ignore
   if (document.getElementById("pencil").value == 'square' || document.getElementById("pencil").value == 'square2') {
      square.radius = 0;
      mySquareChecker = true;

      squarePos1x = e.clientX - (window.innerWidth / 2 - canvas.width / 2);
      squarePos1y = e.clientY - (window.innerHeight / 2 - canvas.height / 2);
  
      squarePos2x = e.clientX - (window.innerWidth / 2 - canvas.width / 2);
      squarePos2y = e.clientY - (window.innerHeight / 2 - canvas.height / 2);
   }

   // @ts-ignore
   if (document.getElementById("pencil").value == 'square2') {
      mySquareChecker2 = true;
   }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   // @ts-ignore
   if (document.getElementById("pencil").value == 'circle' || document.getElementById("pencil").value == 'circle2') {
      square.radius = Number.MAX_SAFE_INTEGER;
      mySquareChecker = true;

      squarePos1x = e.clientX - (window.innerWidth / 2 - canvas.width / 2);
      squarePos1y = e.clientY - (window.innerHeight / 2 - canvas.height / 2);
  
      squarePos2x = e.clientX - (window.innerWidth / 2 - canvas.width / 2);
      squarePos2y = e.clientY - (window.innerHeight / 2 - canvas.height / 2);
   }

   // @ts-ignore
   if (document.getElementById("pencil").value == 'circle2') {
      mySquareChecker2 = true;
   }

   // @ts-ignore
   if (document.getElementById("pencil").value == 'text') {
      text.pos.x = e.clientX - (window.innerWidth / 2 - canvas.width / 2);
      text.pos.y = e.clientY - (window.innerHeight / 2 - canvas.height / 2);

      text.draw();
   }
});

document.addEventListener("mouseup", (e) => {
   setTimeout(() => {
      myDrawChecker = false;
      myLineChecker = false;
      myRetinChecker = false;
      mySquareChecker = false;
      mySquareChecker2 = false;
   }, 1);
});

canvas.addEventListener("mouseup", (e) => {
   if (myLineChecker == true) {
      linePos1x = e.clientX - (window.innerWidth / 2 - canvas.width / 2);
      linePos1y = e.clientY - (window.innerHeight / 2 - canvas.height / 2);
  
      linePos2x = e.clientX - (window.innerWidth / 2 - canvas.width / 2);
      linePos2y = e.clientY - (window.innerHeight / 2 - canvas.height / 2);

      line.draw();
   }

   if (mySquareChecker == true) {
      squarePos1x = e.clientX - (window.innerWidth / 2 - canvas.width / 2);
      squarePos1y = e.clientY - (window.innerHeight / 2 - canvas.height / 2);
  
      squarePos2x = e.clientX - (window.innerWidth / 2 - canvas.width / 2);
      squarePos2y = e.clientY - (window.innerHeight / 2 - canvas.height / 2);

      square.draw();
   }
});
// ------------------------------------------------------------------------------------------------------------------------------------------------------)
function seeText_and_seeSquareSquare () {
   // @ts-ignore
   if (document.getElementById("pencil").value == 'text') {
      document.getElementById("text").style.display = 'block';
   }
   else {
      document.getElementById("text").style.display = 'none';
      // @ts-ignore
      document.getElementById("text").value = '';
   }

   // @ts-ignore
   if (document.getElementById("pencil").value == 'square' ||
      // @ts-ignore
      document.getElementById("pencil").value == 'square2' ||
      // @ts-ignore
      document.getElementById("pencil").value == 'circle' ||
      // @ts-ignore
      document.getElementById("pencil").value == 'circle2'
   ) {
      document.getElementById("inpText").style.display = 'block';
      document.getElementById("square_square").style.display = 'block';
   }
   else {
      document.getElementById("inpText").style.display = 'none';
      document.getElementById("square_square").style.display = 'none';
   }
}

function Fullscreen() {
   document.documentElement.requestFullscreen();
}

class Background {
   constructor() {
      this.width = canvas.width;
      this.height = canvas.height;
      this.pos = {
         x: 0,
         y: 0
      }
      this.color = '#dddddd';
   }
   draw () {
      c.beginPath();
      c.fillStyle = this.color;
      c.fillRect(0, 0, this.width, this.height);
      c.fill();
   }
}

class Cursor {
   constructor() {
      this.width = 10;
      this.height = 10;
      this.pos = {
         x: 0,
         y: 0
      }
      this.pos2 = {
         x1: 0,
         y1: 0
      }
      this.linewidth = 1;
      this.radius = 1000;
      this.color = '#000000';
   }
   draw () {
      c.beginPath();
      if (myDrawChecker) {
         c.save();
         c.lineCap = 'round';
      }
      else {
         c.save();
         c.lineCap = 'butt';
      }
      c.strokeStyle = this.color;
      c.lineWidth = this.linewidth;
      c.moveTo(this.pos.x, this.pos.y);
      c.lineTo(this.pos2.x1, this.pos2.y1);
      c.stroke();
      c.restore();
   }
   update () {
      if (myDrawChecker) {
         this.draw();
      }
      // @ts-ignore
      this.color = document.getElementById("color").value;
      // @ts-ignore
      this.linewidth = document.getElementById("lineWidth").value;
   }
}

class Line {
   constructor() {
      this.pos = {
         x: linePos1x,
         y: linePos2y
      }
      this.pos2 = {
         x1: linePos2x,
         y1: linePos2y
      }
      this.linewidth = 1;
      this.color = '#000000';
      this.circleEnds = false;
   }
   draw () {
      c.beginPath();
      c.strokeStyle = this.color;
      if (this.circleEnds) {
         c.save();
         c.lineCap = 'round';
      }
      else{
         c.save();
         c.lineCap = 'butt';
      }
      c.lineWidth = this.linewidth;
      c.moveTo(this.pos.x, this.pos.y);
      c.lineTo(this.pos2.x1, this.pos2.y1);
      if (!this.circleEnds) {
         c.closePath();
      }
      c.stroke();
      c.restore();
   }
   update () {

      if (myLineChecker == true) {
         this.pos.x = linePos1x;
         this.pos.y = linePos1y;

         this.pos2.x1 = linePos2x;
         this.pos2.y1 = linePos2y;
      }

      // @ts-ignore
      this.color = document.getElementById("color").value;
      // @ts-ignore
      this.linewidth = document.getElementById("lineWidth").value;
   }
}

class Square {
   constructor() {
      this.pos = {
         x: squarePos1x,
         y: squarePos1y
      }
      this.pos2 = {
         x: squarePos2x,
         y: squarePos2y
      }
      // @ts-ignore
      this.linewidth_string_number = document.getElementById("lineWidth").value;
      this.linewidth_string_number = Number(this.linewidth_string_number);
      this.linewidth = this.linewidth_string_number;
      this.radius = 0;
      this.color = '#000000';
      this.color2 = '#dddddd';

      this.Xcheacker = false;
      this.Ycheacker = false;
   }
   draw () {
      c.beginPath();
      c.save();
      c.rotate(0);
      c.strokeStyle = this.color;
      c.fillStyle = this.color2;
      c.lineWidth = this.linewidth;

      if (this.pos2.x - this.pos.x > 0) {
         this.Xcheacker = true;
      }
      if (this.pos2.x - this.pos.x < 0) {
         this.Xcheacker = false;
      }

      if (this.pos2.y - this.pos.y > 0) {
         this.Ycheacker = true;
      }
      if (this.pos2.y - this.pos.y < 0) {
         this.Ycheacker = false;
      }
      // @ts-ignore
      if (!document.getElementById("square_square").checked) {
         c.roundRect(this.pos.x, this.pos.y, this.pos2.x - this.pos.x, this.pos2.y - this.pos.y, this.radius);
      }
      // @ts-ignore
      else if (document.getElementById("square_square").checked) {
         c.roundRect(this.pos.x, this.pos.y,

         this.Xcheacker && this.Ycheacker ? Math.max(this.pos2.x  - this.pos.x, this.pos2.y  - this.pos.y): Math.min(this.pos2.x  - this.pos.x, this.pos2.y  - this.pos.y),

         this.Xcheacker && this.Ycheacker ? Math.max(this.pos2.x  - this.pos.x, this.pos2.y  - this.pos.y): Math.min(this.pos2.x  - this.pos.x, this.pos2.y  - this.pos.y),
         
         this.radius);
      }
      c.closePath();
      if (mySquareChecker2 == true) {
         c.fill();
      }
      c.stroke();
      c.restore();
   }
   update () {
      // @ts-ignore
      this.color = document.getElementById("color").value;

      // @ts-ignore
      this.color2 = document.getElementById("color2").value;
      
      // @ts-ignore
      this.linewidth_string_number = document.getElementById("lineWidth").value;
      this.linewidth_string_number = Number(this.linewidth_string_number);

      this.linewidth = this.linewidth_string_number;

      if (mySquareChecker == true) {
         this.pos.x = squarePos1x;
         this.pos.y = squarePos1y;

         this.pos2.x = squarePos2x;
         this.pos2.y = squarePos2y;
      }

   }
}

class Retin {
   constructor() {
      this.width = 10;
      this.height = 10;
      this.pos = {
         x: 0,
         y: 0
      }
      this.linewidth = 7.5;
      this.color = '#dddddd';
   }
   draw () {
      c.beginPath();
      c.strokeStyle = this.color;
      c.fillStyle = this.color;
      c.lineWidth = this.linewidth;
      c.arc(this.pos.x, this.pos.y, this.linewidth, 0, 2 * Math.PI);
      c.stroke();
      c.fill();
   }
   update () {
      if (myRetinChecker) {
         this.draw();
      }
   }
}

class Text_ {
   constructor() {
      // ? super();
      this.textInp = '';
      this.color = '#000000';
      this.font = `${1}rem sans-serif`;
      this.pos = {
         x: 10,
         y: 10
      }
   }
   draw () {
      c.beginPath();
      c.fillStyle = this.color;
      c.font = this.font;
      c.textAlign = 'center';
      c.textBaseline = 'middle';
      c.fillText(this.textInp, this.pos.x, this.pos.y);
   }
   update () {
      // @ts-ignore
      text.textInp = document.getElementById("text").value;

      // @ts-ignore
      this.color = document.getElementById("color").value;
      
      // @ts-ignore
      this.font = `${document.getElementById("lineWidth").value}rem sans-serif`;
   }
}

let background = new Background();
background.draw();

let cursor = new Cursor();
let line = new Line();
let square = new Square();
let text = new Text_();
let retin = new Retin();

function infinity_cursor() {
   requestAnimationFrame(infinity_cursor);
   cursor.update();
   line.update();
   square.update();
   text.update();
   retin.update();
}

infinity_cursor();

function clear1() {
   myDrawChecker = false;
   c.clearRect(0, 0, window.innerWidth, window.innerHeight);
   c.clearRect(0, 0, window.innerWidth, window.innerHeight);
   background.draw();
}

function textF () {
   // @ts-ignore
   text.textInp = document.getElementById("text").value;
}

function select() {
   // @ts-ignore
   document.getElementById("text").select();
}

// * // ----------------------------------------------------------------------------------------------------------------------------------------------------)
let namevar = '';
let toUnderstandSpaces = '';
// @ts-ignore
let timeout1;

function toHaveImageName() {
   // @ts-ignore
   namevar = document.getElementById("imageName").value;

   toUnderstandSpaces = namevar.split(" ").join("");

   if (toUnderstandSpaces != '') {
      document.getElementById("imageName").style.display = 'none';
      document.getElementById("canselBtn").style.display = 'none';
      document.getElementById("imageNameBackground").style.display = 'none';
      document.getElementById("agreeBtnForImageName").style.display = 'none';

      let time;

      time = new Intl.DateTimeFormat('arm-AM', {
         timeZone: 'Asia/Yerevan',
         year: 'numeric',
         month: 'numeric',
         day: 'numeric',
      }).format(new Date());

      const imageURL = canvas.toDataURL('image/png');

      const link = document.createElement('a');
      link.href = imageURL;
    
      link.download = `(${time}), ${namevar}.png`;
    
      link.click();
   }
   else {
      // @ts-ignore
      clearTimeout(timeout1);
      document.getElementById("imageName").style.borderColor = '#ff0000';
      // @ts-ignore
      document.getElementById("imageName").value = '';
      timeout1 = setTimeout(() => {
         document.getElementById("imageName").style.borderColor = '#dddddd';
      }, 1000);
   }
}

function cansel() {
   document.getElementById("imageName").style.display = 'none';
   document.getElementById("canselBtn").style.display = 'none';
   document.getElementById("imageNameBackground").style.display = 'none';
   document.getElementById("agreeBtnForImageName").style.display = 'none';
}

function install() {
   document.getElementById("imageName").style.display = 'block';
   document.getElementById("canselBtn").style.display = 'block';
   document.getElementById("imageNameBackground").style.display = 'block';
   document.getElementById("agreeBtnForImageName").style.display = 'block';
}

let file;
document.getElementById("addImage").addEventListener("change", (e) => {
   // @ts-ignore
   file = e.target.files[0]; 

   if (file) {
      const url_ = URL.createObjectURL(file);
      const img_ = new Image();

      img_.onload = () => {
         c.clearRect(0, 0, window.innerWidth, window.innerHeight);
         c.drawImage(img_, 0, 0, canvas.width, canvas.height);
         URL.revokeObjectURL(url_);
      }

      img_.src = url_;
   }
});

window.addEventListener("beforeunload", (e) => {
   e.preventDefault();
   e.returnValue = ''; 
});

document.addEventListener('contextmenu', (e) => {
   e.preventDefault();
});