new Vue({
  el: '#v-form',
  data: {
    form: {
      formName: 'Online Order',
      name: '',
      email: '',
      number: '',
      orders: [
        {
          quantity: 0,
          cost: 8.5
        },
        {
          quantity: 0,
          cost: 8.5
        },
        {
          quantity: 0,
          cost: 8.5
        },
        {
          quantity: 0,
          cost: 8.5
        }
      ],
      other: ''
    },
    isSubmitting: false
  },
  methods: {
    submitOrder() {
      this.isSubmitting = true;
      setTimeout(() => {
        this.isSubmitting = false;
      }, 6000);
    },
    dishTotalPrice(i) {
      const order = this.form.orders[i];
      priceAsInt = order.quantity * order.cost;

      return this.intToPrice(priceAsInt);
    },
    intToPrice(number) {
      var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'

        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0,
        //maximumFractionDigits: 0,
      });

      return formatter.format(number);
    }
  },
  computed: {
    total() {
      priceAsInt = this.form.orders.reduce((acc, order) => {
        return acc + order.quantity * order.cost;
      }, 0);

      return this.intToPrice(priceAsInt);
    }
  }
});
