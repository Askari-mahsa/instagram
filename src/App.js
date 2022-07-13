
// import './App.css';
// import{BrowserRouter,Routes,Route} from "react-router-dom"
// import Login from 'pages/Login/Login';
import SignUp from 'pages/SignUp/SignUp';
import SignUpEmail from 'pages/SignUp/SignUpEmail';
import "./assets/styles/App.css"
// import PreLogin from './pages/PreLogin/PreLogin'

function App() {
  return (
    <div className="App">
      {/* <PreLogin/> */}
      {/* <Login /> */}
      {/* <SignUp /> */}
      <SignUpEmail/>
      {/* <BrowserRouter>
                <Routes>
                    <Route path="/" element={PreLogin}></Route>
                    <Route path="/PreLogin" element={PreLogin}></Route>
                    <Route path="/" element={} ></Route> 
                    <Route path="/" element={} ></Route> 
                    <Route path="/" element={} ></Route> 
                    <Route path="/" element={} ></Route> 
                    <Route path="/" element={} ></Route> 
                    <Route path="/" element={} ></Route> 
                    <Route path="/" element={}></Route>
                </Routes>
            </BrowserRouter> */}
    </div>
  );
}

export default App;
