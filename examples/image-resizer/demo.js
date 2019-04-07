import {
  loadFile,
  getResizedImageFromFile
} from './image-resizer.js';

(function(){
  const elements = {
    imageInput: document.getElementById("image-input"),
    results: document.querySelector(".image-results"),
    original: document.getElementById("original"),
    resized: document.getElementById("resized"),
  }

  async function onImageSelection() {
    const file = this.files && this.files[0];

    const originalImage = await loadFile(file);
    const resizedImage = await getResizedImageFromFile(file, 480, console.error);

    elements.original.src = originalImage;
    elements.resized.src = resizedImage;

    elements.results.classList.remove('hidden');
  }

  elements.imageInput.addEventListener("change", onImageSelection);
})();