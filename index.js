
const colorBtn = document.getElementById('color-btn')
const shakeBtn = document.getElementById('shake-btn')

let color = false;

const MOVE_AMOUNT = 10;
const shakebutton = document.querySelector('.shake');

// CANVAS logic
const canvas = document.querySelector('#etch-a-sketch')
const ctx = canvas.getContext('2d');
const { width, height } = canvas;
let x = Math.floor(Math.random() * width)
let y = Math.floor(Math.random() * height)
// ctx settings
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath()
ctx.moveTo(x,y)
ctx.lineTo(x,y)
ctx.stroke()


function handleKey(e) {
    if (e.key.includes("Arrow")) {
        e.preventDefault();
        draw({ key: e.key });
      }
}
window.addEventListener('keydown', handleKey)


// Make the lines colored

function colorRandom() {
    const hue = Math.random() * 360;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
}

function colorBlack() {
    const hue = 0;
    ctx.strokeStyle = `hsl(${hue}, 0%, 0%)`;
    
}


function draw({ key }) {
    
    
    ctx.beginPath()
    ctx.moveTo(x,y)
    switch (key) {
        case "ArrowUp":
        y -= MOVE_AMOUNT;
        break;
      case "ArrowRight":
        x += MOVE_AMOUNT;
        break;
      case "ArrowDown":
        y += MOVE_AMOUNT;
        break;
      case "ArrowLeft":
        x -= MOVE_AMOUNT;
        break;
      default:
        break;
      }
    ctx.lineTo(x,y);
    ctx.stroke();

    color ? colorRandom() : colorBlack()
  }

const colorToggle = () => {
    color = !color
}
colorBtn.addEventListener('click', colorToggle)

function clearCanvas() {
    canvas.classList.add("shake");
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener("animationend", function() {
        canvas.classList.remove("shake");
      },
      { once: true }
    );
  }

  shakeBtn.addEventListener('click', clearCanvas)

  