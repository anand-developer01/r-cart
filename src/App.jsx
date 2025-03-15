
// // import React from 'react';
// import './App.css';
// // import MainRoute from './MainRoute'
// import AppContextAuth from './components/context-login-hoc/AppContextAuth'
// import LoginContext from './components/context-login-hoc/LoginContext.jsx';

// import TempComp from './components/context-login-hoc/TempComp'

// import AppHocAuth from './components/HOC-auth-no-type/AppHocAuth'
// const App : React.FC = () => {
//   return (
//     <div className="App">
//       {/* <MainRoute/> */}
//       <AppHocAuth/>
//     </div>
//   );
// }

// export default App;


// import React from 'react';
import './App.css';
// index.js or index.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import MainRoute from './MainRoute';
import { Provider } from 'react-redux'
import store from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <MainRoute/>
    </Provider>
  );
}

export default App;


