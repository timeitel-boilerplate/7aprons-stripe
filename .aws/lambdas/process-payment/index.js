const stripe = require("stripe")(process.env.STRIPE_TEST_KEY);

app.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "T-shirt",
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "https://7aprons.com/success",
    cancel_url: "https://7aprons.com/cancel",
  });

  res.json({ id: session.id });
});
