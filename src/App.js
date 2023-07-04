import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom"
import Cart from "./components/Cart";
import {productsData} from "./api/Api"
import Product from "./components/Product";
import Spacet from "./components/Spacet";
import Checkout from "./components/Checkout";

const Layout=()=>{
  return(
    <div>
      <Header />
      <Spacet />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>,
        loader: productsData,
      },
      {
        path:"/product/:id",
        element:<Product/>,
      },
      {
        path:"/cart",
        element:<Cart />,
      },
      {
        path:"/checkout",
        element:<Checkout />,
      }
    ]
  }
])

function App() {

  return (
    <div className="App">
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
