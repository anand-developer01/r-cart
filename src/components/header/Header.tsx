import React from "react";
import { Link } from "react-router-dom";
import './header.css'
const ColumnComponent: React.FC = () => {

  return (
    <section className="header">
      <Link className="text-dec" to="/">
        Task1
      </Link>
      <Link className="text-dec" to="/task2">
        Task2
      </Link>
      <Link className="text-dec" to="/task3">
        Task3
      </Link>
      <Link className="text-dec" to="/task4">
        Task4
      </Link>
      <Link className="text-dec" to="/StatusManagement">
      Status Management
      </Link>
      <Link className="text-dec" to="/StatusManagementApp">
      Status Management App
      </Link>
      <Link className="text-dec" to="/AppDragDrop">
      App Drag Drop
      </Link>
      <Link className="text-dec" to="/AppPagination">
      AppPagination
      </Link>
      <Link className="text-dec" to="/AppHoc">
      AppHoc
      </Link>
      <Link className="text-dec" to="/AppCart">
      AppCart
      </Link>
      <Link className="text-dec" to="/login">
      login
      </Link>
    </section>
  );
};

export default ColumnComponent;
