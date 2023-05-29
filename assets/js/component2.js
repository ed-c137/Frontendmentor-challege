

const app17 = Vue.createApp({
    data() {
      return {
        step: 1,
        form: {
          name: '',
          email: '',
          phone: ''
        },
        errors: {
          name: '',
          email: '',
          phone: ''
        },
        isYearly: false,
        selectedPlanIndex: 0,
        plans:[{
          img: 'icon-arcade',
          name: 'arcade',
          pricem: 9,
          pricey: 90,
        },
        {
          img: 'icon-advanced',
          name: 'advance',
          pricem: 12,
          pricey: 120,
        },
        {
          img: 'icon-pro',
          name: 'pro',
          pricem: 16,
          pricey: 150,
        }],
        selectedAddons: [],
        addOns:[
          {
            name: 'Online Service',
            desc: 'Access to multiplayer games',
            costm: 1,
            costy: 10,
          },
          {
            name: 'Larger Storage',
            desc: 'Extra 1TB of cloud save',
            costm: 2,
            costy: 20,
          },
          {
            name: 'Customizable Profile',
            desc: 'Custom theme on your profile',
            costm: 2,
            costy: 20,
          }
        ],
       
      }
    },
    methods:{
      next() {
        if (this.step === 1) this.validateName();
        if (this.step === 1) this.validateEmail();
        if (this.step === 1) this.validatePhone();
        
        if (this.errors.name || this.errors.email || this.errors.phone) return;
        
        if (this.step < 4) this.step++;
      },
      previous() {
        if (this.step > 1) this.step--;
      },
      validateName() {
        this.errors.name = this.form.name ? '' : 'Name is required';
      },
      validateEmail() {
        const emailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        this.errors.email = !this.form.email 
          ? 'Email is required.' 
          : !this.form.email.match(emailFormat) 
          ? 'Invalid email format.' 
          : '';
      },
      validatePhone() {
        console.log(this.form.phone);
        const phoneFormat = /^\d{10}$/;
        this.errors.phone = !this.form.phone 
          ? 'Phone is required.' 
          : !String(this.form.phone).match(phoneFormat) 
          ? 'Phone number should be numbers only.' 
          : '';
          console.log(this.form.phone);
      },
      submit() {
        //fineal submission
        this.step++;
      },
      setStepToTwo() {
        this.step = 2;
        console.log(this.step);
      }
    
    },
    computed: {
      selectedPlan() {
        return this.plans[this.selectedPlanIndex];
      },
      total() {
        let planCost = this.isYearly ? this.plans[this.selectedPlanIndex].pricey : this.plans[this.selectedPlanIndex].pricem;
        let addonCost = this.selectedAddons.reduce((total, addon) => total + (this.isYearly ? addon.costy : addon.costm), 0);
        return planCost + addonCost;
      }
    },
    watch: {
      selectedAddons(newVal, oldVal) {
        console.log('message changed from', oldVal, 'to', newVal);
      }
    }
  });
  app17.mount('#component-17');