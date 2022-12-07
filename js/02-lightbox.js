import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const mainGallery = galleryItems
  .map(
    (item) => `<li>
    <a href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>
</li>`
  )
  .join("");
gallery.innerHTML = mainGallery;

gallery = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
  captionSelector: "img",
  captionPosition: "bottom",
});
