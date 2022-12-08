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
const instance = basicLightbox.create(
  `
    <img class="modal-img" src="">
`,
  {
    onShow: (instance) => {
      window.addEventListener("keydown", escape);
    },
    onClose: (instance) => {
      window.removeEventListener("keydown", escape);
    },
  }
);

function onclick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  instance.element().querySelector("img").src = e.target.dataset.source;
  instance.show();
}
function escape(e) {
  if (e.key === "Escape") {
    instance.close();
    return;
  }
}
