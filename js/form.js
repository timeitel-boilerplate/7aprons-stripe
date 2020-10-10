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
      this.resetForm();
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
      });

      return formatter.format(number);
    },
    resetForm() {
      this.form.orders.map((order) => {
        order.quantity = 0;
      });
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
