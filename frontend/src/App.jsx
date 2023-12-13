import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/Homepage";
import Login from "./pages/Login";
import ProductsPage from "./pages/ProductsPage"
import ProductDetailPage from "./pages/ProductDetailPage"
import Cart from "./pages/Cart";
import ShippingScreen  from "./pages/ShippingScreen";
import PaymentScreen from "./pages/PaymentScreen";
import PlaceOrderScreen from "./pages/PlaceOrderScreen";
import Logout from "./pages/Logout";
import Checkout from "./pages/Checkout";
 function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<HomePage/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/logout",
      element:<Logout/>
    },
    {
      path:"/allproducts",
      element:<ProductsPage></ProductsPage>
    },
    {
      path:"/productdetailpage/:id",
      element:<ProductDetailPage></ProductDetailPage>
    },
    {
      path:"/cart",
      element:<Cart></Cart>
    },
    {path:"/shipping_address",
    element:<ShippingScreen/>
  },
  {path:"/payment_screen",
  element:<PaymentScreen/>
},
{path:"/order_screen",
element:<PlaceOrderScreen/>
},
{
  path:"/checkout",
  element:<Checkout />
},
// {
//   path:"/return",
//   element:<Return />
  
// }
  ])
  return (
    <>
        <RouterProvider router={router}></RouterProvider> 
    </>
  )
}

export default App
