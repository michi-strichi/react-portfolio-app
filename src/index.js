import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  // <Router>
  //   <Routes>
  //     <Route path='/work' element={<Work/>}></Route>
  //     <Route path='/' element={<App/>}></Route>
  //     <Route path='/about' element={<About/>}></Route>

  //   </Routes>
  // </Router>,

  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
