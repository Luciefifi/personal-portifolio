/* eslint-disable no-unused-vars */

// import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
      
      {/* <HomePage/> */}
      <LoginPage/>
     

    </div>
  );
}

export default App;
