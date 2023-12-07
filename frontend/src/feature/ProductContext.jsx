import { createSlice } from "@reduxjs/toolkit";
const initialState = {
 items:[
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
  ],
 cartTotal:0
}
const productSlice= createSlice({
    name:"cart",
    initialState,
})
export default productSlice.reducer
