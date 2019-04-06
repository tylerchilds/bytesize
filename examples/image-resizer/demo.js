import {
  loadImage,
  resize,
  toBase64
} from './image-resizer.js';

(function(){
  const elements = {
    imageInput: document.getElementById("image-input"),
    original: document.getElementById("original"),
    resized: document.getElementById("resized"),
  }

  let originalImage;
  let resizedImage;

  async function onImageSelection() {
    console.log('what are we')
    await loadImage(this.files && this.files[0]).then(result => {
      console.log(result);
      originalImage = result;
    });
    console.log(originalImage);
    elements.original.src= originalImage;
  }

  elements.imageInput.addEventListener("change", onImageSelection);
})();