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
    }
  },
  computed: {
    total() {
      return this.form.orders.reduce((acc, order) => {
        return acc + order.quantity * order.cost;
      }, 0);
    }
  }
});
