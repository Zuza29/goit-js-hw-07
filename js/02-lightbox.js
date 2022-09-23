import { galleryItems } from './gallery-items.js';

// Change code below this line

const gallery = document.querySelector(".gallery");

const mappedGallery = galleryItems
    .map(
        (image) =>
            `<a class="gallery__item" href="${image.original}">
    <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
    </a>`)
    .join("");

gallery.insertAdjacentHTML("beforeend", mappedGallery);

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: "bottom",
});

console.log(galleryItems);
