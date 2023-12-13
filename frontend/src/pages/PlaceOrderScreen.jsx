import React from 'react';
import Navbar from '../component/Navbar/Navbar';
import OrderDetails from '../component/PaymentScreen/OrderDetails';
import NavSec from '../component/Navbar/NavSec';
const PlaceOrderScreen = () => {
  // Replace with actual order data retrieved from API
  const order = {
    id: 1234,
    customerName: 'John Doe',
    orderDate: '2023-12-09',
    orderStatus: 'Shipped',
    paymentMethod: 'PayPal',
    shippingAddress: '123 Main Street, Anytown, USA',
    subtotal: 90.00,
    shippingCost: 10.00,
    tax: 5.00,
    totalAmount: 105.00,
    items: [
      {
        name: 'Product A',
        quantity: 5,
        price: 56.00,
        image: '/images/product-a.jpg',
      },
      {
        name: 'Product B',
        quantity: 1,
        price: 50.00,
        image: 'https://cdn.pixabay.com/photo/2017/08/01/08/29/woman-2563491_1280.jpg',
      },
    ],
  };

  return (<>
  <div style={{minWidth:"100vw"}}>
  <Navbar></Navbar>
  </div>
  <div style={{minWidth:"100vw",overflow:"hidden"}}>
  <NavSec></NavSec>
  </div>
    <OrderDetails order={order} />
    </>)
  
};

export default PlaceOrderScreen;
