import Dative from 'dativejs';

export let App = Dative.extend({
  template: `
  <div>  
      <nav>
      <div class="nav-wrapper">
        <form>
          <div class="input-field">
            <input id="search" type="search" placeholder="search" required>
          </div>
        </form>
      </div>
    </nav>
    <div>
      <h1>Hello {{name}} + Vite!</h1>
      <a  href="https://dativejs.js.org/guide/index.html"  target="_blank">Documentation</a>
    </div>
  </div>
  `,
  props: {
    name: String,
  },
});
