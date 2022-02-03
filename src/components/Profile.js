import { useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/auth"
const Profile = () => {
  const auth = useAuth()
  const navigate = useNavigate()
  const handleLogout = () => {
    auth.logout()
    navigate("/")
  }

  return (
    <div>
      <h2>Profile page</h2>
      <h4>Welcome {auth.user}</h4>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Profile
