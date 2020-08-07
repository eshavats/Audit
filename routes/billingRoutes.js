const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);

module.exports = (app) => {
  app.post("/api/stripe", async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 5000,
      currency: "inr",
      description: "₹50 for 5 credits",
      source: req.body.id,
    });
    console.log(charge);
  });
};
