export function resize() {

}

export function toBase64() {

}

export async function loadImage(file) {
  return await new Promise((resolve) => {
    const fileReader = new FileReader();

    fileReader.addEventListener("load", function(e) {
      resolve(e.target.result);
    });

    fileReader.readAsDataURL( file );
  });
}