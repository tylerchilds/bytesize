import {
  loadImage,
  resizeImage
} from './image-resizer.js';

(function(){
  const elements = {
    imageInput: document.getElementById("image-input"),
    results: document.querySelector(".image-results"),
    original: document.getElementById("original"),
    resized: document.getElementById("resized"),
  }

  async function onImageSelection() {
    const originalImage = await loadImage(this.files && this.files[0])
    const resizedImage = await resizeImage(originalImage, 480)

    elements.original.src = originalImage;
    elements.resized.src = resizedImage;

    elements.results.classList.remove('hidden');
  }

  elements.imageInput.addEventListener("change", onImageSelection);
})();