const stripe = require("stripe")(
  "sk_test_51IUiTqDJrsoPxmlZ63B89PNGbzEJQS6oQ0YujSNlFxDKEU5vKv1x0KOTlyTyY8pmJzN5Cr47zlBwzO29DGNtQhAg00YAm557D1"
);

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
