const digimones = [
    "https://digimon.shadowsmith.com/img/koromon.jpg",
    "https://digimon.shadowsmith.com/img/tsunomon.jpg",
    "https://digimon.shadowsmith.com/img/yokomon.jpg",
    "https://digimon.shadowsmith.com/img/motimon.jpg",
    "https://digimon.shadowsmith.com/img/patamon.jpg",
    "https://digimon.shadowsmith.com/img/kuwagamon.jpg",
    "https://digimon.shadowsmith.com/img/greymon.jpg",
    "https://digimon.shadowsmith.com/img/tanemon.jpg",
  ];
  
  function createImageElement(url) {
    const img = document.createElement('img');
    img.src = url;
    img.classList.add('img-item');
    img.addEventListener('click', () => {
      alert(url);
    });
    return img;
  }
  
  function injectImages() {
    const container = document.getElementById('image-container');
    digimones.forEach(url => {
      const img = createImageElement(url);
      container.appendChild(img);
    });
  }
  
  injectImages();