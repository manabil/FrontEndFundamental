'use strict';
class ImageFigure extends HTMLElement {
  connectedCallback() {
    this.src = this.getAttribute('src') || null;
    this.alt = this.getAttribute('alt') || null;
    this.caption = this.getAttribute('caption') || null;
    this.innerHTML = `
          <figure>
            <img src="${this.src}" alt="${this.alt}">
            <figcaption>${this.caption}</figcaption>
          </figure>
        `;
  }
}

customElements.define('image-figure', ImageFigure);

const imageFigureElement = document.createElement('image-figure');
imageFigureElement.setAttribute('src', 'https://d17ivq9b7rppb3.cloudfront.net/original/academy/202003101842396ebe6d528e732b9586f5fe3562899d10.png');
imageFigureElement.setAttribute('alt', 'Dicoding Logo');
imageFigureElement.setAttribute('caption', 'Huruf g dalam logo Dicoding');
document.body.appendChild(imageFigureElement);
