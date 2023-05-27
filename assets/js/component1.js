
const { createApp, ref } = Vue;
const app1 = createApp({
  data() {
    return {
      items: null,
      percent: 76,
      grade: 'great'
    };
  },
  mounted() {
    this.getItems();
  },
  methods: {
    async getItems() {
      try {
        const response = await fetch('/assets/data/section1-data.json');
        const data = await response.json();
        this.items = data;
        // console.log(this.items);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
  app1.mount('#component-1');

 

