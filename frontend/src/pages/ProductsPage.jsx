import React from 'react'
import NavSec from '../component/Navbar/NavSec'
import Navbar from '../component/Navbar/Navbar'
import Card from '../utilities/Card'
import { useNavigate } from 'react-router-dom'
const dummyData = [
  {
    id: "h1",
    title: "Tutu dress",
    description: "good to wear", 
    price: 5,
    images: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
    rating: 4.69,
    stock: 94,
  },
  {
    id: "h2",
    title: "Polo dress",
    description: "best in the market",
    price: 4,
    images: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
    rating: 2,
    stock: 94,
  },
  {
    id: "h3",
    title: "Shirtdress",
    description: "hottest in the market",
    price: 10,
    images: "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
    rating: 4.69,
    stock: 94,
  },

  {
    id: "h4",
    title: "Culotte dress.",
    description: "makes you pretier",
    price: 55,
    images: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    rating: 4.69,
    stock: 84,
  },
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 2,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    images: "https://i.dummyjson.com/data/products/1/1.jpg",
   
    },
    {
    id: 2,
    title: "iPhone X",
    description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    images:"https://i.dummyjson.com/data/products/2/thumbnail.jpg"
    },
    {
    id: 71,
    title: "Women Shoulder Bags",
    description: "LouisWill Women Shoulder Bags Long Clutches Cross Body Bags Phone Bags PU Leather Hand Bags Large Capacity Card Holders Zipper Coin Purses Fashion Crossbody Bags for Girls Ladies",
    price: 46,
    discountPercentage: 14.65,
    rating: 4.71,
    stock: 17,
    brand: "LouisWill",
    category: "womens-bags",
    thumbnail: "https://i.dummyjson.com/data/products/71/thumbnail.jpg",
    images:  "https://i.dummyjson.com/data/products/71/1.jpg",
    },
    {
    id: 86,
    title: "Bluetooth Aux",
    description: "Bluetooth Aux Bluetooth Car Aux Car Bluetooth Transmitter Aux Audio Receiver Handfree Car Bluetooth Music Receiver Universal 3.5mm Streaming A2DP Wireless Auto AUX Audio Adapter With Mic For Phone MP3",
    price: 25,
    discountPercentage: 10.56,
    rating: 4.57,
    stock: 22,
    brand: "Car Aux",
    category: "automotive",
    thumbnail: "https://i.dummyjson.com/data/products/86/thumbnail.jpg",
    images:"https://i.dummyjson.com/data/products/86/thumbnail.jpg"
    }
];

const ProductPage = () => {
  const navigate = useNavigate()
  const onSubmitHandler=(e)=>{
    e.preventDefault()
    console.log(e.target.id)
}
const onClickHandler = (e) =>{
  console.log(e.target.id)
  if(e.target.id){
     navigate(`/productdetailpage/${e.target.id}`)
  }
}
  return (
    <div>
        <Navbar/>
        <NavSec/>
        <div className="allProducts container-fluid p-3">
           <div className=" fs-2 fw-bolder  text-capitalize d-flex justify-content-center ">all products</div>
           <div className="container-fluid ">  
            {/* <!-----------mens-->        */}
            <div className="row justify-content-center row">
            {
                dummyData.map((item,i)=>{
                    return <Card  onClick={onClickHandler} onSubmitHandler={onSubmitHandler} key={item.i} id={item.id}>
                    <img
                    id={item.id}
                     src={item.images}
                      className=" "
                      height="200"
                      width="fit-content"
                    />
                    <div
                    id={item.id}
                      className="makingHeadingCenterAlign card-body bg-secondary rounded-bottom-3"
                    >
                      <h5 className="text-bg-dark rounded" id={item.id}>T-Shirt
                    </h5>
                      <span className="text-bold" id={item.id}>${item.price}</span>
                      <p className="makingThingsFlex text-light ">This comfortable and stylish t-shirt </p>
                      <ul className='px-2 text-white d-flex justify-content-center  ' >
                      {
                        Array.from(Array(Math.floor(item.rating)),(e,i)=>{
                          return <li key={i} id={item.id} className='list-unstyled mx-1 fs-2 ' >*</li>
                        })
                      }
                      </ul>
                      <button
                       id={item.id}
                        className="btn btn-warning d-flex justify-content-center align-align-items-center text-dark"
                      >
                        <span className="material-symbols-rounded" id={item.id} >shopping_cart</span>
                        Add to cart
                      </button>
                    </div>
                  </Card>
                })
            }
                </div>
                {/* <!------------womens--> */}
                {/* <div className="row justify-content-center ">
                {
                dummyData.map((item,i)=>{
                    return <Card >
                    <img
                      className=" "
                      height="200"
                      width="fit-content"
                    />
                    <div
                      className="makingHeadingCenterAlign card-body bg-secondary rounded-bottom-3"
                    >
                      <h5 className="text-bg-dark rounded">T-Shirt
                    </h5>
                      <span className="text-bold">$8</span>
                      <p className="makingThingsFlex text-light ">This comfortable and stylish t-shirt </p>
                      <button
                        className="btn btn-warning d-flex justify-content-center align-align-items-center text-dark"
                      >
                        <span className="material-symbols-rounded">shopping_cart</span>
                        Add to cart
                      </button>
                    </div>
                  </Card>
                })
            }
                </div> */}
                {/* <!-----------kids--> */}
                {/* <div className="row justify-content-center ">
                {
                dummyData.map((item,i)=>{
                    return <Card >
                    <img
                      className=" "
                      height="200"
                      width="fit-content"
                    />
                    <div
                      className="makingHeadingCenterAlign card-body bg-secondary rounded-bottom-3"
                    >
                      <h5 className="text-bg-dark rounded">T-Shirt
                    </h5>
                      <span className="text-bold">$8</span>
                      <p className="makingThingsFlex text-light ">This comfortable and stylish t-shirt </p>
                      <button
                        className="btn btn-warning d-flex justify-content-center align-align-items-center text-dark"
                      >
                        <span className="material-symbols-rounded">shopping_cart</span>
                        Add to cart
                      </button>
                    </div>
                  </Card>
                })
            }
                </div> */}
         </div>      
           </div>
        </div>
  )
}

export default ProductPage
