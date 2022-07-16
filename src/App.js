
// import './App.css';
import{BrowserRouter,Routes,Route} from "react-router-dom"
// import Login from 'pages/Login/Login';
import SignUp from 'pages/SignUp/SignUp';
import SignUpEmail from 'pages/SignUp/SignUpEmail';
import "./assets/styles/App.css"
import PreLogin from './pages/PreLogin/PreLogin'
import Profile from "pages/Profile/Profile";

function App() {
  return (
    <div className="App">
    
      <Profile/>
      <BrowserRouter>
                {/* <Routes>
                    <Route path="/" element={PreLogin}></Route>
                    <Route path="/preLogin" element={PreLogin}></Route>
                    <Route path="/SignUpEmail" element={SignUpEmail} ></Route> 
                    <Route path="/BrowserRouter" element={BrowserRouter} ></Route> 
                    <Route path="/SignUp" element={SignUp} ></Route>  */}
                    {/* <Route path="/" element={} ></Route> 
                    <Route path="/" element={} ></Route> 
                    <Route path="/" element={} ></Route> 
                    <Route path="/" element={}></Route> */}
                {/* </Routes> */}
            </BrowserRouter>
    </div>
  );
}

export default App;
