import useResults from "../hook/useResults";

export default function Task2() {
  //get users
  const { users, handleRefresh } = useResults();

  return (
    <>
      <div>
        <h1>Task2</h1>
        <button className="refreshBtn" onClick={handleRefresh}>
          Refresh
        </button>
        <pre>{JSON.stringify(users, null, 4)}</pre>
      </div>
    </>
  );
}
