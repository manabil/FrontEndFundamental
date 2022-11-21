'use strict';
/**
 * Class of Hero menu custom element
 */
class HeroMenu extends HTMLElement {
  /**
   * Attach shadow DOM
   */
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }
  /**
   * Render when element created
   */
  connectedCallback() {
    this.render();
  }
  /**
   * Render element
   */
  render() {
    this.shadowDOM.innerHTML = `
      <style>
        .header {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            align-items: center;
        }
        .header .heading {
            font-size: 4.5em;
            font-weight: 300;
        }
        .header .sub-heading {
            margin-top: 20px;
            font-size: 1.3em;
            font-weight: 300;
        }
        .header img {
            place-self: center;
            width: 70%;
        }

        @media (max-width: 1200px) {
            .header .heading {
              font-size: 3em;
            }
            .header .sub-heading {
              font-size: 1em;
            }
          }
          
          @media (max-width: 992px) {
            .header .heading {
              font-size: 2em;
              font-weight: 400;
            }
            .header .sub-heading {
              font-size: 1em;
            }
          }
          
          @media (max-width: 768px) {
            .header {
              grid-template-columns: 1fr;
              gap: 30px;
            }
            .header img {
              width: 40%;
              order: -1;
            }
          }
          
      </style>
      
      <div class="header" id="header-section">
        <div class="title">
          <h1 class="heading">Let's check your happiness</h1>
          <p class="sub-heading">Know your sentence. Know your speech. Know your sentiments. Know your emotions. Know your happiness.</p>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Comedy_and_tragedy_masks_without_background.svg/1200px-Comedy_and_tragedy_masks_without_background.svg.png"
          alt="Two mask image"
        />
      </div>
    `;
  }
}
customElements.define('hero-menu', HeroMenu);
