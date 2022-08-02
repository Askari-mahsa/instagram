import "./assets/styles/App.css";
import { Routes, Route } from "react-router-dom";
import Login from "pages/Login/Login";
import SignUp from "pages/SignUp/SignUp";
import SignUpEmail from "pages/SignUp/SignUpEmail";
import PreLogin from "./pages/PreLogin/PreLogin";
import Profile from "pages/Profile/Profile";
import Home from "./pages/Home/Home";
import Chat from "pages/Chat/Chat";
import Explorer from "./pages/Explore/Explorer";
import Notification from "pages/Notification/Notification";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/SignUp" element={Notification}></Route>
				<Route path="/Profile" element={Profile}></Route>
				<Route path="/preLogin" element={PreLogin}></Route>
				<Route path="/SignUpEmail" element={SignUpEmail}></Route>
				<Route path="/SignUp" element={SignUp}></Route>
				<Route path="/Chat" element={Chat}></Route>
				<Route path="/Explorer" element={Explorer}></Route>
				<Route path="/Home" element={Home}></Route>
				<Route path="/Login" element={Login}></Route>
			</Routes>
		</div>
	);
}

export default App;
