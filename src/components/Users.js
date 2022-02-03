import { Outlet, useSearchParams } from "react-router-dom"

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const showActiveUsers = searchParams.get("filter") === "active"
  return (
    <div>
      <ul>
        <li>User 1</li>
        <li>User 2</li>
        <li>User 3</li>
        <li>User 4</li>
      </ul>

      <Outlet />

      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
      </div>

      {showActiveUsers ? (
        <h2>Showing active users</h2>
      ) : (
        <h2>Showing all users</h2>
      )}
    </div>
  )
}

export default Users
