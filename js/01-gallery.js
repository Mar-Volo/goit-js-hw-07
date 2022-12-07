import { galleryItems } from "./gallery-items.js";

// Change code below this line

const gallery = document.querySelector(".gallery");

const mainGallery = galleryItems
  .map(
    (item) => `<div class ="gallery__item">
        <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" 
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"/>
        </a>
        </div>`
  )
  .join("");
gallery.innerHTML = mainGallery;
gallery.addEventListener("click", onclick);

function onclick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src= ${e.target.dataset.source} source= ${e.target.src}>
`);

  instance.show();
  document.addEventListener("keydown", escape);
  function escape(e) {
    if (e.code === "Escape") {
      instance.close();
      document.removeEventListener("keydown", escape);
    }
  }
}

