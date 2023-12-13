import React, { useState } from 'react'

const PaymentScreen = () => {
    const [methodChoosen,setMethodChoosed] = useState("")
    const onChangeHandler =(e)=>{
        const {id} = e.target
        setMethodChoosed(id)
        console.log(e.target.id)
    }
    const submitHandler = (e)=>{
        console.log(methodChoosen)
         e.preventDefault()
    }
  return (
    <div className='bg-info-subtle ' style={{height:"100vh"}}>
    <form className="p-2" onSubmit={submitHandler} >
      <div>
        <h1 className='fw-bold '>Payment Method</h1>
      </div>
      <div className='mb-2 '>
        <div>
          <input
            onBlur={onChangeHandler}
            type="radio"
            id="paypal"
            name="paymentMethod"
            required
          />
          <label htmlFor="paypal">PayPal</label>
        </div>
      </div>
      <div>
        <div>
          <input
            onBlur={onChangeHandler} 
            type="radio"
            id="stripe"
            name="paymentMethod"
            required
          />
          <label htmlFor="stripe">Stripe</label>
        </div>
      </div>
      <div>
        <label />
        <button type="button" className="btn btn-primary mt-2">Primary
          Continue
        </button>
      </div>
    </form>
  </div>
);
}
export default PaymentScreen
