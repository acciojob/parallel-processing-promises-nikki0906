//your JS code here. If required.

/* const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];


    btn.addEventListener('click', () => {
      downloadAndDisplayImages(images);
    });

    function downloadImage(image) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image.url;
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Failed to load image's URL: ${image.url}`));
      });
    }

    function downloadAndDisplayImages(images) {
      output.innerHTML = '';

      const downloadPromises = images.map(image => downloadImage(image));

      Promise.all(downloadPromises)
        .then(images => {
          images.forEach(img => {
            output.appendChild(img);
          });
        })
        .catch(error => {
          console.error(error);
          alert(error.message);
        });
    }
