const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d");

const overlay = document.getElementById("overlay");

let stars = [];
var speed = 0.5;
let plusOrMinusX;
let plusOrMinusY;
var starCount = 20000;
let starSize = 1.2;

function onResize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

class Star {
    constructor() {
        plusOrMinusX = Math.random() < 0.5 ? -1 : 1;
        this.x = Math.random() * canvas.width * plusOrMinusX;
        plusOrMinusY = Math.random() < 0.5 ? -1 : 1;
        this.y = Math.random() * canvas.height * plusOrMinusY;
        this.z = Math.random() * canvas.width;
        this.size = Math.random() * starSize;
        this.opacity = 0;
    }
    
    update() {
        this.z = this.z - speed;
        if (this.z <= 0) {
            plusOrMinusX = Math.random() < 0.5 ? -1 : 1;
            this.x = Math.random() * canvas.width * plusOrMinusX;
            plusOrMinusY = Math.random() < 0.5 ? -1 : 1;
            this.y = Math.random() * canvas.height * plusOrMinusY;
            this.z = canvas.width;
            this.opacity = 0;
        } else {
            this.opacity += 0.01;
        }
    }
    
    draw() {
        const x = (this.x / this.z) * canvas.width + canvas.width / 2;
        const y = (this.y / this.z) * canvas.height + canvas.height / 2;
        
        if (x > 0 && x < canvas.width && y > 0 && y < canvas.height) {
            ctx.beginPath();
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.arc(x, y, this.size, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
}

function init() {
    onResize();
    for (let i = 0; i < starCount; i++) {
        stars.push(new Star());
    }
    
    const images = [
        "image1.webp",
        "image2.webp",
        "image3.webp",
        "image4.webp",
        "image5.webp"
        // add more images here as needed
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    overlay.style.backgroundImage = `url(images/${images[randomIndex]})`;
}

function animate() {
    requestAnimationFrame(animate);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
            
    for (let i = 0; i < stars.length; i++) {
        stars[i].update();
        stars[i].draw();
    }
}

window.addEventListener("resize", onResize);
init();
animate();
