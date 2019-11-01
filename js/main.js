let image = document.querySelector('#flowers');

image.onclick = (e) => {
  if (e.target.getAttribute('src') ===  'images/flowers.jpg') {
      e.target.setAttribute('src', 'images/flowersbw.jpg')
    } else {
      e.target.setAttribute('src', 'images/flowers.jpg')
    }
  }

let image2 = document.querySelector('#jellyfish');

image2.onmouseenter = (e) => {
  e.target.setAttribute('src', 'images/jellyfishneg.jpg')
};

image2.onmouseleave = (e) => {
  e.target.setAttribute('src', 'images/jellyfish.jpg')
};
