import { useNavigate } from "react-router-dom"
function Home() {
  const navigate = useNavigate()
  return (
    <>
      <h1>Home page</h1>
      <button onClick={() => navigate("order-summary")}>Place order</button>
    </>
  )
}
export default Home
