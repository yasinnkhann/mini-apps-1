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
  return (
    <div>
      <button>Checkout</button>
      <Form1 />
      <Form2 />
      <Form3 />
    </div>
  )
}
// FORM 1 COMP
function Form1 () {
  return (
    <form>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        id="name"
      />
      <br />
      <br />
      <label htmlFor="email">Email: </label>
      <input
        type="text"
        id="email"
      />
      <br />
      <br />
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        id="password"
      />
      <br />
      <br />
      <button>Next</button>
    </form>
  )
}
// FORM 2 COMP
function Form2 () {
  return (
    <form>
      <label htmlFor="shippingAdr1">Shipping Address 1: </label>
      <input
        type="text"
        id="shippingAdr1"
      />
      <br />
      <br />
      <label htmlFor="shippingAdr2">Shipping Address 2: </label>
      <input
        type="text"
        id="shippingAdr2"
      />
      <br />
      <br />
      <label htmlFor="city">City: </label>
      <input
        type="text"
        id="city"
      />
      <br />
      <br />
      <label htmlFor="zipCode">Zip Code: </label>
      <input
        type="number"
        id="zipCode"
      />
      <br />
      <br />
      <label htmlFor="phoneNum">Phone Number: </label>
      <input
        type="tel"
        id="phoneNum"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
      />
      <br />
      <br />
      <button>Submit</button>
    </form>
  )
}
// FORM 3 COMP
// F3 collects credit card #, expiry date, CVV, and billing zip code.
function Form3 () {
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
      />
      <br />
      <br />
      <label htmlFor="expiryDate">Expiry Date: </label>
      <input
        type="text"
        id="expiryDate"
      />
      <br />
      <br />
      <label htmlFor="CVV">CVV: </label>
      <input
        type="number"
        id="CVV"
      />
      <br />
      <br />
      <label htmlFor="billingZipCode">Billing Zip Code: </label>
      <input
        type="number"
        id="billingZipCode"
      />
      <br />
      <br />
      <button>Submit</button>
    </form>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));