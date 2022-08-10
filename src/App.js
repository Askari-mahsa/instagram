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
import Verify from "pages/SignUp/Verify";
import SignUpForm from "pages/SignUp/SignUpForm";
const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<PreLogin />}></Route>
				<Route path="/Login" element={<Login />}></Route>
				<Route path="/SignUp" element={<SignUp />}></Route>
				<Route path="/Home" element={<Home />}></Route>
				<Route path="/Explorer" element={<Explorer />}></Route>
				<Route path="/Notification" element={<Notification />}></Route>
				<Route path="/Chat" element={<Chat />}></Route>
				<Route path="/SignUpEmail" element={<SignUpEmail />}></Route>
				<Route path="/Profile" element={<Profile />}></Route>
				<Route path="/Verify" element={<Verify />}></Route>
				<Route path="/SignUpForm" element={<SignUpForm />}></Route>
			</Routes>
		</>
	);
};

export default App;
