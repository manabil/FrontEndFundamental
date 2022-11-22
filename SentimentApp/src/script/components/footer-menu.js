/* eslint max-len: ["error", { "code": 100 }]*/
'use strict';
/**
 * Class of Footer menu custom element
 */
class FooterMenu extends HTMLElement {
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
        /* *Footer* */
        footer {
            padding: 10px 0em;
            color: #fff;
            text-align: center;
            font-size: 0.8em;
        }

        @media (max-width: 576px) {
            /* *Footer* */
            footer {
                font-size: 0.7em;
            }
        }

      </style>
      
      <footer>
        <p>Belajar Fundamental Front-End Web Development &#169; 2022, Dicoding Academy</p>
      </footer>
    `;
  }
}
customElements.define('footer-menu', FooterMenu);
