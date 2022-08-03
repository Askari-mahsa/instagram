import "./assets/styles/App.css";
import { Routes, Route } from "react-router-dom";
// import Login from "pages/Login/Login";
// import SignUp from "pages/SignUp/SignUp";
// import SignUpEmail from "pages/SignUp/SignUpEmail";
import PreLogin from "./pages/PreLogin/PreLogin";
// import Profile from "pages/Profile/Profile";
// import Home from "./pages/Home/Home";
// import Chat from "pages/Chat/Chat";
// import Explorer from "./pages/Explore/Explorer";
// import Notification from "pages/Notification/Notification";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="" element={<PreLogin />} />
				{/* <Route path="/signUp" element={<Notification />} />
				<Route path="/notification" element={<Notification />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/signUpEmail" element={<SignUpEmail />} />
				<Route path="/signUp" element={<SignUp />} />
				<Route path="/chat" element={<Chat />} />
				<Route path="/explorer" element={<Explorer />} />
				<Route path="/home" element={<Home />} />
				<Route path="/Login" element={<Login />} /> */}
			</Routes>
		</div>
	);
}

export default App;
