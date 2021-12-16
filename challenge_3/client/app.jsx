// APP COMP
function App () {
  return (
    <div>
      <HomePage />
    </div>
  )
}
// HOME PAGE COMP
function HomePage () {
  const handleCheckoutBtn = () => {
    fetch('http://localhost:3000/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    })
    .then(res => {
      console.log(res);
      // console.log(res.json());
    })
    .catch(err => {
      console.error(err)
    })
  };

  return (
    <div>
      <button onClick={handleCheckoutBtn}>Checkout</button>
      <Form1 />
      <Form2 />
      <Form3 />
    </div>
  );
}
// FORM 1 COMP
class Form1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
    // BINDERS
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {

    return (
        <form>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <button>Next</button>
          </form>
    );
  }
}

// FORM 2 COMP
class Form2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shippingAdd1: '',
      shippingAdd2: '',
      city: '',
      zipCode: '',
      phoneNum: ''
    };
    // BINDERS
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {

    return (
        <form>
          <label htmlFor="shippingAdd1">Shipping Address 1: </label>
          <input
            type="text"
            id="shippingAdd1"
            name="shippingAdd1"
            value={this.state.shippingAdd1}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label htmlFor="shippingAdd2">Shipping Address 2: </label>
          <input
            type="text"
            id="shippingAdd2"
            name="shippingAdd2"
            value={this.state.shippingAdd2}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label htmlFor="city">City: </label>
          <input
            type="text"
            id="city"
            name="city"
            value={this.state.city}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label htmlFor="zipCode">Zip Code: </label>
          <input
            type="tel"
            id="zipCode"
            name="zipCode"
            value={this.state.zipCode}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label htmlFor="phoneNum">Phone Number: </label>
          <input
            type="tel"
            id="phoneNum"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            name="phoneNum"
            value={this.state.phoneNum}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <button>Next</button>
        </form>
    );
  }
}

// FORM 3 COMP
class Form3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creditCardNum: '',
      expiryDate: '',
      CVV: '',
      billingZipCode: ''
    };
    // BINDERS
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {

    return (
        <form>
            <label htmlFor="creditCardNum">Credit Card Number: </label>
            <input
              type="tel"
              id="creditCardNum"
              inputMode="numeric"
              pattern="[0-9\s]{13,19}"
              autoComplete="cc-number"
              maxLength="19"
              name="creditCardNum"
              value={this.state.creditCardNum}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <label htmlFor="expiryDate">Expiry Date: </label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              value={this.state.expiryDate}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <label htmlFor="CVV">CVV: </label>
            <input
              type="number"
              id="CVV"
              name="CVV"
              value={this.state.CVV}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <label htmlFor="billingZipCode">Billing Zip Code: </label>
            <input
              type="tel"
              id="billingZipCode"
              name="billingZipCode"
              value={this.state.billingZipCode}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <button>Purchase</button>
          </form>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));