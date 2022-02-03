import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { useAuth } from "../contexts/auth"
const Login = () => {
  const [user, setUser] = useState()
  const navigate = useNavigate()
  const auth = useAuth()
  const location = useLocation()

  const redirectPath = location.state?.path || "/"
  const handleLogin = () => {
    auth.login(user)

    navigate(redirectPath, { replace: true })
  }
  return (
    <div style={{ margin: "20px" }}>
      <label>
        UserName:
        <input type='text' onChange={e => setUser(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}
export default Login
