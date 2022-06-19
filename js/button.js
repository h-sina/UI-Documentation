Vue.component('my-button', {
  props: ['msg'],
  template: '<button class="bt">{{ msg }}</button>'
});
var vm = new Vue({
  el: '#app',
  data: {

  }
});