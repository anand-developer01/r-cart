import { Link } from "react-router-dom";

export default function Task4() {
  return (
    <section className="header">
      <Link to="/">
        <button className="headerBtn">Task1</button>
      </Link>
      <Link to="/task2">
        <button className="headerBtn">Task2</button>
      </Link>
      <Link to="/task3">
        <button className="headerBtn">Task3</button>
      </Link>
      <Link to="/task4">
        <button className="headerBtn">Task4</button>
      </Link>
    </section>
  );
}
