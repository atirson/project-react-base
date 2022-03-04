import { useUsers } from '@app/core/hooks/Users/useUsersClient';

function Users() {
  const { data, isLoading, error } = useUsers();

  return (
    <>
      <h1>Users</h1>
      {isLoading && <p>Loading...</p>}
      {error && (
      <p>
        Error:
        {error}
      </p>
      )}
      {
        data?.map((user) => (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        ))
      }
    </>
  );
}

export default Users;
