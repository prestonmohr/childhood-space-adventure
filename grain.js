const grainCanvas = document.querySelector("#grain");
const grainCtx = grainCanvas.getContext("2d");
const grainSize = 70;

function createGrainTexture() {
  const grainTextureCanvas = document.createElement("canvas");
  grainTextureCanvas.width = grainSize * 2;
  grainTextureCanvas.height = grainSize * 2;
  const grainTextureCtx = grainTextureCanvas.getContext("2d");

  for (let i = 0; i < grainSize * 2; i++) {
    for (let j = 0; j < grainSize * 2; j++) {
      const randomOpacity = Math.random() * 0.05;
      grainTextureCtx.fillStyle = `rgba(255, 255, 255, ${randomOpacity})`;
      grainTextureCtx.fillRect(i, j, 1, 1);
    }
  }

  return grainTextureCanvas;
}

const grainTexture = createGrainTexture();

function onResize() {
  grainCanvas.width = window.innerWidth;
  grainCanvas.height = window.innerHeight;
}

function animateGrain() {
  grainCtx.clearRect(0, 0, grainCanvas.width, grainCanvas.height);
  grainCtx.globalCompositeOperation = "multiply";

  for (let i = 0; i < grainCanvas.width; i += grainSize * 2) {
    for (let j = 0; j < grainCanvas.height; j += grainSize * 2) {
      grainCtx.drawImage(grainTexture, i, j, grainSize * 2, grainSize * 2);
    }
  }

  grainCtx.globalCompositeOperation = "source-over";
  requestAnimationFrame(animateGrain);
}

window.addEventListener("resize", onResize);
onResize();
animateGrain();
