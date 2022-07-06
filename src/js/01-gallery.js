import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";


// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryItem = ({ preview, original, description }) => {
    return `
    <div class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" style="display:block"/>
</a>
</div>`
    
};

const galleryMarkUp = galleryItems.map(galleryItem).join('');

const galleryCollection = document.querySelector('.gallery');
galleryCollection.insertAdjacentHTML('beforeend', galleryMarkUp);

let lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,

});



