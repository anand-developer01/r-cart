import useResults from "../hook/useResults";

export default function Task4() {
  //get users
  const { users, handleRefresh } = useResults();

  return (
    <>
      <div>
        <h1>Task4</h1>
        <button className="refreshBtn" onClick={handleRefresh}>
          Refresh
        </button>
        <table>
          <thead>
            <tr>
              <th className="tableCell">name</th>
              <th className="tableCell">email</th>
              <th className="tableCell">username</th>
              <th className="tableCell">password</th>
              <th className="tableCell">picture</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr key={index}>
                  <td className="tableCell">
                    {user.name.title + " " + user.name.first + user.name.last}
                  </td>
                  <td className="tableCell">{user.email}</td>
                  <td className="tableCell">{user.login.username}</td>
                  <td className="tableCell">{user.login.password}</td>
                  <td className="tableCell">
                    <img
                      src={user.picture.medium}
                      className="userImg"
                      alt={user.login.username}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5}>no data</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
