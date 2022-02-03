import { Link, Outlet } from "react-router-dom"
const Products = () => {
  return (
    <div className='product-container'>
      <form>
        <input type='text' className='search' placeholder='Search products' />
      </form>
      <nav>
        <Link to='featured'>Featured</Link>
        <Link to='new'>New</Link>
      </nav>

      <Outlet />
    </div>
  )
}

export default Products
