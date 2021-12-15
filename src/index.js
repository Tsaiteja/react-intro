import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Home from './components/Home';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";

class PageNotFound extends React.Component {
  render() {
    return <div>
      Page Not Found
    </div>
  }
}

const routes = (
  <Router>
    <ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
    </ul>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  </Router>
)

ReactDOM.render(routes,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
