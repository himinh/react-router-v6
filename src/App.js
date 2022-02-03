import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
// import About from "./components/About"
import NotFound from "./components/NotFound"
import OrderSummary from "./components/OrderSummary"
import Products from "./components/Products"
import FeaturedProducts from "./components/FeaturedProducts"
import NewProducts from "./components/NewProducts"
import Users from "./components/Users"
import Admin from "./components/Admin"
import UserDetails from "./components/UserDetails"
import Profile from "./components/Profile"
import Login from "./components/Login"
import RequireAuth from "./contexts/RequireAuth"
const LazyAbout = lazy(() => import("./components/About"))

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/order-summary' element={<OrderSummary />} />

        <Route path='/products' element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path='featured' element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />} />
        </Route>

        <Route path='/users' element={<Users />}>
          <Route path=':userId' element={<UserDetails />} />
          <Route path='admin' element={<Admin />} />
        </Route>

        <Route
          path='/about'
          element={
            <Suspense fallback='Loading...'>
              <LazyAbout />
            </Suspense>
          }
        />
        <Route
          path='/profile'
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
