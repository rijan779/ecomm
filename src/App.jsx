import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from "./features/auth/pages/Register"
import Login from "./features/auth/pages/Login"
import Home from "./features/Home/pages/Home.jsx"
import Product from "./features/Home/pages/Product.jsx"
import ItemsPage from "./features/Home/pages/ItemsPage.jsx"
import { ProdProvider } from "./features/auth/ProductContext.jsx"
import { Protected } from "./features/Home/components/Protected.jsx"
import Cart from "./features/Home/pages/Cart.jsx"
import Order from "./features/Home/pages/Order.jsx"

function App() {
  return (
    <ProdProvider>  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Protected><Home /></Protected>}/>
          <Route path="/page/:pageId" element={<Protected><ItemsPage /></Protected>} />
          <Route path="/search/:searchItem" element={<Protected><ItemsPage/></Protected>} />
          <Route path="product/cart" element={<Cart />}/>
          <Route path="/order" element={<Order />} />
        </Routes>
      </BrowserRouter>
    </ProdProvider>
  )
}

export default App
