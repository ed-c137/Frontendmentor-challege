
const { createApp, ref } = Vue;
const app1 = createApp({
  data() {
    return {
      items: null,
      percent: 76,
      grade: 'great',
      data:  [
        {
          "category": "Reaction",
          "score": 80,
          "icon": "./assets/img/section1/images/icon-reaction.svg"
        },
        {
          "category": "Memory",
          "score": 92,
          "icon": "./assets/img/section1/images/icon-memory.svg"
        },
        {
          "category": "Verbal",
          "score": 61,
          "icon": "./assets/img/section1/images/icon-verbal.svg"
        },
        {
          "category": "Visual",
          "score": 72,
          "icon": "./assets/img/section1/images/icon-visual.svg"
        }
      ]
    };
  },
  mounted() {
    this.getItems();
  },
  methods: {
    getItems() {
      try {
        // const response = await fetch('/assets/data/section1-data.json');
        // const data = await response.json();
        this.items = this.data;
        // console.log(this.items);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
  app1.mount('#component-1');



const app3 = createApp({
  data() {
    return {
      sliderValue: 10,
      isYearly: false,
    };
  },
  computed: {
    pageViews: function() {
      return this.sliderValue * 1000;
  },
  price: function() {
      // Compute the price based on slider value and yearly/monthly billing
      let price = this.sliderValue * 10;
      if (this.isYearly) {
          price = price * 12 * 0.75; // 25% discount for yearly billing
      }
      return price.toFixed(2);
  },
  sliderStyle() {
    return `background: linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${this.sliderValue}%, hsl(224, 65%, 95%) ${this.sliderValue}%, hsl(224, 65%, 95%) 100%);`
  }
  },
});
  app3.mount('#component-12');
 

  const app4 = createApp({
    data() {
      return {
        selectedRating: null,
      submitted: false
      };
    },
    methods: {
      selectRating(num) {
        this.selectedRating = num;
      },
      submitRating() {
        if (this.selectedRating !== null) {
          this.submitted = true;
        }
      }
    },
  });
    app4.mount('#component-3');