import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/Homepage";
import Login from "./pages/Login";
import ProductsPage from "./pages/ProductsPage"
import ProductDetailPage from "./pages/ProductDetailPage"
import Cart from "./pages/Cart";
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
    }
  ])
  return (
    <>
        <RouterProvider router={router}></RouterProvider> 
    </>
  )
}

export default App
