import { useUsers } from "@app/core/hooks/Users/useUsersClient"

const Users = () => {
  const { data, isLoading, error } = useUsers()

  return (
    <>
      <h1>Users</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && data.users.map(user => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </>
  )  
}

export default Users