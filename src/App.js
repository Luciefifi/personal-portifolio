/* eslint-disable no-unused-vars */

// import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import WorkPage from './pages/WorkPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';


function App() {
  return (
    <div className="App">
      
      {/* <HomePage/> */}
       {/* <LoginPage/> */}
      {/* <SignupPage/>  */}
    <  Router>
    <Routes>
    <Route exact path="/" element={<HomePage />} />
    <Route path='/Login'  element={<LoginPage/>}/>
    <Route path='/signup'  element={<SignupPage/>}/>
    <Route path='/Works'  element={<WorkPage/>}/>
    <Route path='/Blogs'  element={<BlogPage/>}/>
    <Route path='/Contacts'  element={<ContactPage/>}/>

    </Routes>
    </Router>
     

    </div>
  );
}

export default App;
