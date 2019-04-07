/*
  Private API
*/

async function getImageElement(image) {
  return await new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject({ reason: 'getImageElement(): Image Load Error' });
    img.src = image;
  })
}

function getResizedDimensions(elem, maxDimensionSize) {
  const 
    [ bigSide, smallSide ] = elem.width > elem.height ?
    ['width', 'height']:
    ['height', 'width'];

  // if big side is smaller than our max dimension, then pass dimensions through
  if(maxDimensionSize > elem[bigSide]){
    return {
      [bigSide]: elem[bigSide],
      [smallSide]: elem[smallSide]
    }
  }

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

/*
  Public API
*/

export async function resizeImage(image, maxDimensionSize) {
  const imageElement = await getImageElement(image);
  const dimensions = getResizedDimensions(imageElement, maxDimensionSize);

  return createCanvasImage(imageElement, dimensions).toDataURL('image/jpeg', 1.0);
}

export async function loadFile(file) {
  return await new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.onload = (e) => resolve(e.target.result);
    fileReader.onabort = () => reject({ reason: 'loadFile(): File Read Aborted' });
    fileReader.onerror = () => reject({ reason: 'loadFile(): File Read Error' });

    fileReader.readAsDataURL(file);
  });
}

export async function getResizedImageFromFile(file, maxDimensionSize, errorHandler) {
  return await new Promise(async (resolve, reject) => {
    const image = await loadFile(file).catch(errorHandler);
    const resizedImage = await resizeImage(image, maxDimensionSize).catch(errorHandler);

    resolve(resizedImage);
  });
}

export default getResizedImageFromFile;