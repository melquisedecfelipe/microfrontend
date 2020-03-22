class CustomHeader extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
      <style>
        :host() {
          display: block;
        }
        :host([react]) .react, :host([vue]) .vue,  a:hover {
          background: #fff;
          color: #080808;
        }
        header {
          position: absolute;
          top: 0;
          left: 0;
          text-align: left;
          display: flex;
          margin: 0;
        }
        a {
          -webkit-font-smoothing: antialiased;
          font-family: arial;
          line-height: 20px;
          display: block;
          width: fit-content;
          padding: 20px;
          text-decoration: none;
          color: #fff;
        }
      </style>
      <header>
        <a href="/" class="react">React</a>
        <a href="/vue" class="vue">Vue</a>
      </header>
    `;
  }
}

customElements.define('custom-header', CustomHeader);
