import React from 'react'
import './Card.css'
import { useNavigate } from "react-router-dom";
function Card() {
  const navigation = useNavigate()
  return (
    <div>
        
    <div class="container">
  <div id="Checkout" class="inline">
    <h1>Pay Invoice</h1>
    <div class="card-row">
      <span class="visa"></span>
      <span class="mastercard"></span>
      <span class="amex"></span>
      <span class="discover"></span>
    </div>
    <form  onSubmit={(e) =>{e.preventDefault();  navigation('/cash')  }}>
      <div class="form-group">
        <label className=''>Payment amount</label>
        <div class="amount-placeholder">
          <span>$</span>
          <span>500.00</span>
        </div>
      </div>
      <div class="form-group">
        <label or="NameOnCard">Name on card</label>
        <input id="NameOnCard" class="form-control border border-blue3 m-2" type="text" maxlength="255"></input>
      </div>
      <div class="form-group">
        <label for="CreditCardNumber">Card number</label>
        <input id="CreditCardNumber" class="null card-image form-control border border-blue3 m-2" type="text"></input>
      </div>
      <div class="expiry-date-group form-group">
        <label for="ExpiryDate">Expiry date</label>
        <input id="ExpiryDate" class="form-control border border-blue3 m-2" type="text" placeholder="MM / YY" maxlength="7"></input>
      </div>
      <div class="security-code-group form-group">
        <label for="SecurityCode">Security code</label>
        <div class="input-container">
          <input id="SecurityCode" class="form-control border border-blue3 m-2" type="text"></input>
        </div>
        <div class="cvc-preview-container two-card hide">
          <div class="amex-cvc-preview"></div>
          <div class="visa-mc-dis-cvc-preview"></div>
        </div>
      </div>
      <div class="zip-code-group form-group">
        <label for="ZIPCode">ZIP/Postal code</label>
        <div class="input-container">
          <input id="ZIPCode" class="form-control border border-blue3 m-2" type="text" maxlength="10"></input>
          <a tabindex="0" role="button" data-toggle="popover" data-trigger="focus" data-placement="left" data-content="Enter the ZIP/Postal code for your credit card billing address."></a>
        </div>
      </div>
      <button  class="btn btn-block btn-success submit-button bg-yellow1 hover:bg-yellow2 p-3 "  >
        <span class="submit-button-lock"></span>
        <span class="align-middle p-2 " >Pay $500.00</span>
      </button>
    </form>
  </div>
</div>
    </div>
  )
}

export default Card