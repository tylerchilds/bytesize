## Image Resizer

Image Resizer is a light-touch approach to resizing an image. It has three public functions:

* `loadFile(file)`: Returns a file as Base64.
* `resizeImage(image, maxDimensionSize)`: Returns a resized Base64 image.
* `getResizedImageFromFile(file, maxDimensionSize [, errorHandler])`: Returns a resized Base64 image by composing `loadFile` and `resizeImage`. Has an errorHandler argument that fires when an error occurs.

### Example using a file input

```
  <!-- HTML -->
  <input type="file" id="image-input" accept="image/*" />
```

```
  /* JavaScript */
  import getResizedImage from './image-resizer.js';

  async function onImageSelection() {
    const file = this.files && this.files[0];
    const resizedImage = await getResizedImage(file, 480, console.error);

    console.log(resizedImage);
  }

  document.getElementById('image-input').addEventListener("change", onImageSelection);
```

