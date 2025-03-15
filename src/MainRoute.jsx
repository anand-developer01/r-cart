import { HashRouter, Route, Routes } from "react-router-dom";
import Task1 from "./components/react-typescript-user-task/tasks/Task1.jsx";
import Task2 from "./components/react-typescript-user-task/tasks/Task2";
import Task3 from "./components/react-typescript-user-task/tasks/Task3";
import Task4 from "./components/react-typescript-user-task/tasks/Task4";

import Header from './components/header/Header'
import StatusManagement from './components/status-management/StatusManagement';
import StatusManagementApp from './components/status-management-without-react-dnd/StatusManagementApp';
import AppDragDrop from "./components/drag-and-drop/AppDragDrop";
import AppPagination from './components/pagination/AppPagination';

import AppHoc from "./components/HOC/AppHoc";

import AppContextAuth from './components/context-login-hoc/AppContextAuth'

import Dashboard from "./components/context-login-hoc/Dashboard";
import LoginContext from './components/context-login-hoc/LoginContext';
import AuthProvider from './components/context-login-hoc/AuthContext';
import WithAuthHOC from './components/context-login-hoc/WithAuthHOC';

import AppCart from './components/shoping-cart/AppCart'

export default function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Header />
          <Routes>

            {/* <Route path="/AppContextAuth" element={<AppContextAuth />} /> */}



            <Route element={<WithAuthHOC />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/" element={<Task1 />} />
              {/* <Route path="/task2" element={<Task2 />} />
              <Route path="/task3" element={<Task3 />} />
              <Route path="/task4" element={<Task4 />} /> */}

              <Route path="/StatusManagement" element={<StatusManagement />} />
              <Route path="/StatusManagementApp" element={<StatusManagementApp />} />
              <Route path="/AppDragDrop" element={<AppDragDrop />} />
              <Route path="/AppPagination" element={<AppPagination />} />
              <Route path="/AppHoc" element={<AppHoc />} />
              <Route path="/AppCart" element={<AppCart />} />
            </Route>
            <Route path="/login" element={<LoginContext />} />

          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}



