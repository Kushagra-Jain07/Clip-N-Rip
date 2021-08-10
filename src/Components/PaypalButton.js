import React from "react";
import ReactDOM from "react-dom";
import scriptLoader from "react-async-script-loader";
import { Link } from "react-router-dom";

 const CLIENT = {
   sandbox:
     "AWjYrYVzWTusHSpO_ow-ad_5d4vzdgANQf0jZYcVOIbyevQeJyshCSRy_4QhnGEe8Yx6jfconVQYSh_l",
   production:
     "your_production_key"
 };

 const CLIENT_ID =
   process.env.NODE_ENV === "production" ? CLIENT.production : CLIENT.sandbox;

let PayPalButton = null;
class PaypalButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showButtons: false,
      loading: true,
      paid: false
    };

    window.React = React;
    window.ReactDOM = ReactDOM;
  }

  componentDidMount() {
    const { isScriptLoaded, isScriptLoadSucceed } = this.props;

    if (isScriptLoaded && isScriptLoadSucceed) {
      PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
      this.setState({ loading: false, showButtons: true });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { isScriptLoaded, isScriptLoadSucceed } = nextProps;

    const scriptJustLoaded =
      !this.state.showButtons && !this.props.isScriptLoaded && isScriptLoaded;

    if (scriptJustLoaded) {
      if (isScriptLoadSucceed) {
        PayPalButton = window.paypal.Buttons.driver("react", {
          React,
          ReactDOM
        });
        this.setState({ loading: false, showButtons: true });
      }
    }
  }
  createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: +"Shopping",
          amount: {
            currency_code: "USD",
            value: this.props.amount
          }
        }
      ]
    });
  };

  onApprove = (data, actions) => {
    actions.order.capture().then(details => {
      this.setState({ showButtons: false, paid: true });
      const paymentData = {
        payerID: data.payerID,
        orderID: data.orderID
      };
      console.log("Payment Approved: ", paymentData);
    });
  };

  render() {
    const { showButtons, loading, paid } = this.state;

    return (
      <div className="mainorder">

        {loading && <h1>Loading...</h1>}

        {showButtons && (
          <div>
            <div>
              <h2>Service: {this.props.service}</h2>
              <h2>Amount: £ {this.props.amount}</h2>
            </div>

            <PayPalButton
              createOrder={(data, actions) => this.createOrder(data, actions)}
              onApprove={(data, actions) => this.onApprove(data, actions)}
            />
          </div>
        )}

        {paid && (
          <div className="order-success">
          <ul>
              <li>
                  <h2>Your Appointment is Successful !</h2>
                  <h3>We'll contact you soon.</h3>
                  <h6>Ref No- {this.props.id}</h6>
              </li>
              <li>
              <li>
                  <Link to="/">Home</Link>  |  <Link to="/about">About</Link>  |  <Link to="/services">Services</Link>
              </li>
              </li>
          </ul>
      </div>
        )}
      </div>
    );
  }
}


 export default scriptLoader(`https://www.paypal.com/sdk/js?client-id=${CLIENT_ID}`)(PaypalButton);