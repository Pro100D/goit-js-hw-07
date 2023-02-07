import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = markupСreationEl(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function markupСreationEl(images) {
	return images
		.map(({ preview, original, description }) => {
			return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
</a>`;
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
	new SimpleLightbox(".gallery a", {
		captionDelay: 250,
	});
}
