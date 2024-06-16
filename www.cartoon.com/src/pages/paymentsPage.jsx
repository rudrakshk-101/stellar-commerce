import React from "react";
import '../styles/paymentsPage.css';

const PaymentsPage = ()=>{
    return(
        <div className="paymentOuterOuter">
            <div className="paymentOuter">
            <h1>Payment</h1>
            <div className="totalPayment">
                Total :-  900₹
            </div>
            <div className="gst">
                cgst :-   9%
            </div>
            <div className="sgst">
                cgst :-   9%
            </div>
            <div className="withTax">
                Sub-Total :- 1062₹
            </div>
            {/* <hr />   */}
            <div className="rp"><label htmlFor="">RazorPay</label>
            <input name="PaymentMethod" type="radio" className="cashOnDelivery" placeholder="RazorPay">
            </input></div>
            {/* <hr /> */}
            <div className="cod"><label htmlFor="">Cash On Delivery</label>
            <input name="PaymentMethod" type="radio" className="RazorPay" placeholder="Cash On Delivery">
            </input></div>
            <button className="toRazorPay">
                CONFIRM
            </button>
        </div>
        </div>
    )
}

export default PaymentsPage;