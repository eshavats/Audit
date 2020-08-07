import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Payments extends React.Component {
  render() {
    return (
      <StripeCheckout
        name="Audit"
        description="Get 5 email credits for ₹50"
        amount={5000}
        currency="inr"
        token={(token) => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button
          style={{ marginRight: "15px" }}
          className="btn"
        >
          Add Credits
        </button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
