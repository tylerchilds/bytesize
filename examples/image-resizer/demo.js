import {
  loadImage,
  resizeImage
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

    await loadImage(this.files && this.files[0]).then(result => {
      originalImage = result;
    });

    await resizeImage(originalImage).then(result => {
      resizedImage = result;
    });

    elements.original.src = originalImage;
    elements.resized.src = resizedImage;
  }

  elements.imageInput.addEventListener("change", onImageSelection);
})();