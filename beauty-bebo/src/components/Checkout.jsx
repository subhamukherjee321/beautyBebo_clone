import React from 'react'
import "./Checkout.css"
import { Link } from 'react-router-dom'

const Checkout = () => {
  return (
    <div>
        <div className="to-top">
        <i className="fas fa-angle-double-up"></i>
      </div>
    <div className="header_anmol_ks"></div>
    
    <div className="checkoutcontainer_at">
        <div className="checkout_details_at">
            <div className="shipping_heading_at"><h3>Shipping Address</h3></div>
            <form action="./payment.html">
                <label for="firstname">First Name</label>
                <div><input type="text" className="checkout_firstname_at checkout_details_comm_at"/></div>

                <label for="Lastname">Last Name</label>
                <div><input type="text" className="checkout_lastname_at checkout_details_comm_at"/></div>

                <label for="streetaddress">Street Address</label>
                <div><input type="text" className="checkout_street_at checkout_details_comm_at"/></div>

                <label for="city">City</label>
                <div><input type="text" className="checkout_city_at  checkout_details_comm_at"/></div>

                <label for="state">State</label>
                <div><select name="state" className="checkout_select_at">
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujrat">Gujrat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jharkand">Jharkand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerla">Kerla</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                    </select>
                </div>

                <label for="zipcode">Zip/Postal Code</label>
                <div><input type="text" className="checkout_zipcode_at checkout_details_comm_at"/></div>

                <label for="country">Country</label>
                <div><select name="country" className="checkout_country_at">
                    <option value="India">India</option>
                </select></div>

                <label for="phoneno">First Phone Number</label>
                <div><input type="tel" className="checkout_phoneno_at checkout_details_comm_at"/></div>

                <div className="checkout_delivery_div_at"><h3>Delivery Charges</h3></div>
                <div className="checkout_delivery_at"><span><input type="radio"/>&#8377;0.00</span>
                    <span>Max 7 Business Days</span>
                </div>

              <Link to="/payment">  <div className="submitdetails_at"><input type="submit" value="Next"/></div></Link>
            </form>
           
        </div>
    </div>
    

    
    </div>
  )
}

export default Checkout
