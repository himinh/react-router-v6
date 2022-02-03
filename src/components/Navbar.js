import { NavLink } from "react-router-dom"
import { useAuth } from "../contexts/auth"

function Navbar() {
  const auth = useAuth()
  const navLinkActiveStyles = ({ isActive }) => {
    const style = isActive
      ? { background: "black", color: "white", borderRadius: "4px" }
      : {}
    return style
  }
  return (
    <>
      <div className='navbar-container'>
        <NavLink to='/' className='navbar-link' style={navLinkActiveStyles}>
          Home
        </NavLink>
        <NavLink
          className='navbar-link'
          style={navLinkActiveStyles}
          to='/about'>
          About
        </NavLink>
        <NavLink
          className='navbar-link'
          style={navLinkActiveStyles}
          to='/products'>
          Products
        </NavLink>
        <NavLink
          className='navbar-link'
          style={navLinkActiveStyles}
          to='/profile'>
          Profile
        </NavLink>
        {!auth.user && (
          <NavLink
            className='navbar-link'
            style={navLinkActiveStyles}
            to='/login'>
            Login
          </NavLink>
        )}
      </div>
    </>
  )
}
export default Navbar
