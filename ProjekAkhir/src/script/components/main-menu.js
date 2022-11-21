'use strict';
class MainMenu extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-family: 'Ubuntu', Arial, Helvetica, sans-serif;
            scroll-behavior: smooth;
        }
        body {
            overflow-x: hidden;
            margin: 0 50px;
            background-color: #23242e;
            color: white;
        }
        .container {
            display: grid;
            gap: 100px;
        }
      
        .main {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            grid-template-areas:
            'heading heading'
            'form result';
            place-items: center;
            row-gap: 50px;
        }
        textarea#inputSentence {
            background-color: #23242e;
            color: white;
            border: 1px solid #6b728e;
            padding: 20px;
            border-radius: 10px;
            resize: none;
            line-height: 1.5em;
        }
        .heading {
            margin-top: 30px;
            grid-area: heading;
        }
        .heading h2 {
            font-weight: 300;
        }
        form {
            grid-area: form;
            display: grid;
            width: 100%;
            justify-items: stretch;
        }
        form p {
            position: relative;
            top: -30px;
            left: -10px;
            justify-self: end;
            color: #6b728e;
        }
        form button {
            background-color: rgba(0, 0, 0, 0);
            padding: 10px;
            color: white;
            cursor: pointer;
            border-radius: 5px;
            border: 1px solid white;
            margin-top: 20px;
            justify-self: end;
            width: fit-content;
        }
        form button:hover {
            border: 1px solid #6b728e;
            border-radius: 5px;
            color: #6b728e;
        }
        .main .result {
            grid-area: result;
            display: grid;
            font-size: 2em;
            place-items: center;
        }

        @media (max-width: 1200px) {
            .main .result {
              font-size: 1.5em;
            }
          }
          
          @media (max-width: 992px) {
            .main .result {
              font-size: 1.25em;
            }
          }
          
          @media (max-width: 768px) {
            .main {
              grid-template-columns: 1fr;
              gap: 75px;
              grid-template-areas:
                'heading'
                'form'
                'result';
            }
            form button {
              width: 100%;
              font-size: 1.1em;
            }
            .main .result {
              font-size: 2em;
            }
          }
          
          @media (max-width: 576px) {
            .main .result {
              font-size: 1.5em;
            }
          }
          
      </style>
      
      <div class="main" id="main-section">
        <div class="heading">
          <h2>Type your Sentences</h2>
        </div>
        <form action="">
          <textarea
            id="inputSentence"
            name="inputSentence"
            rows="12"
            maxlength="999"
            placeholder="Type your sentence here (english only and max 1000 character)"
          ></textarea>
          <p class="counter">0/1000</p>
          <button type="submit">Sentiment it !</button>
        </form>
        <div class="result">
          <p class="icon">😄</p>
          <p class="description">Your sentiment is positive</p>
        </div>
      </div>
    `;
  }
}
customElements.define('main-menu', MainMenu);
