async function getImageElement(image) {
  return await new Promise((resolve, reject) => {
    let img = new Image()
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = image
  })
}

function getResizedDimensions(elem, maxDimensionSize) {
  const 
    [ bigSide, smallSide ] = elem.width > elem.height ?
    ['width', 'height']: 
    ['height', 'width'];

  return {
    [bigSide]: maxDimensionSize,
    [smallSide]: maxDimensionSize / elem[bigSide] * elem[smallSide]
  }
}

function createCanvasImage(imageElement, dimensions) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext('2d');

  canvas.width = dimensions.width;
  canvas.height = dimensions.height;

  ctx.drawImage(imageElement, 0, 0, dimensions.width, dimensions.height);

  return canvas;
}

export async function resizeImage(image, maxDimensionSize) {
  const imageElement = await getImageElement(image);
  const dimensions = getResizedDimensions(imageElement, maxDimensionSize);

  return createCanvasImage(imageElement, dimensions).toDataURL('image/jpeg', 1.0);
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

export default async function getResizedImage(file, maxDimensionSize) {
  return await resizeImage(await(loadImage(file)), maxDimensionSize)
}