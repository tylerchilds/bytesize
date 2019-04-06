async function getImageElement(image) {
  return await new Promise((resolve, reject) => {
    let img = new Image()
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = image
  })
}

function createCanvas(imageElement) {
  const canvas = document.createElement("canvas");
  document.body.appendChild(canvas);

  canvas.width = imageElement.width;
  canvas.height = imageElement.height;

  return canvas;
}

function drawImage(canvas, imageElement) {
  const ctx = canvas.getContext('2d');
  console.log('but the imageElement is ', imageElement)
  ctx.drawImage(imageElement, 0, 0);
}

export async function resizeImage(image) {
  const imageElement = await getImageElement(image);
  const canvas = createCanvas(imageElement);
  
  drawImage(canvas, imageElement);

  // canvas.remove();
}

export function toBase64() {

}

export async function loadImage(file) {
  return await new Promise((resolve) => {
    const fileReader = new FileReader();

    fileReader.addEventListener("load", function(e) {
      resolve(e.target.result);
    });

    fileReader.readAsDataURL(file);
  });
}