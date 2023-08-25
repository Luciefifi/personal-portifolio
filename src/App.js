/* eslint-disable no-unused-vars */

// import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <div className="App">
      
      <HomePage/>
      {/* <LoginPage/>
      <SignupPage/> */}
     

    </div>
  );
}

export default App;
