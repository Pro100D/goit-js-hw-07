import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = markupСreationEl(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function markupСreationEl(images) {
	return images
		.map(({ preview, original, description }) => {
			return `<div class="gallery__item">
                   <a class="gallery__link" href="${original}" >
                      <img
                       class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                        />
                   </a>
                </div>`;
		})
		.join("");
}

galleryContainer.addEventListener("click", onClickGallaryImag);

function onClickGallaryImag(event) {
	event.preventDefault();

	const isGallaryImageEl = event.target.classList.contains("gallery__image");

	if (!isGallaryImageEl) {
		return;
	}

	const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
	
	instance.show();

	galleryContainer.addEventListener('keydown', evt => {
		if (evt.key === 'Escape') {
			instance.close();
		}
		console.log(evt.key);
	});
	
	

}


