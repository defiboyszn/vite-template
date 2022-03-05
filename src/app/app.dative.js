import Dative from 'dativejs';

export let App = Dative.extend({
  template: `
  <div>  
    <div class="text-center">
      <h1>Hello {{name}} + Vite!</h1>
      <a  href="https://dativejs.js.org/guide/index.html"  target="_blank">Documentation</a>
    </div>
  </div>
  `,
  props: {
    name: String,
  },
  css: `
    .text-center {
      text-align: center
    }
  `,
});
