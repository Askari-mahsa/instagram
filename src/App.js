import "./assets/styles/App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "pages/Login/Login";
// import SignUp from "pages/SignUp/SignUp";
// import SignUpEmail from "pages/SignUp/SignUpEmail";
import PreLogin from "./pages/PreLogin/PreLogin";
// import Profile from "pages/Profile/Profile";
// import Home from "./pages/Home/Home";
// import Chat from "pages/Chat/Chat";
// import Explorer from "./pages/Explore/Explorer";
// import Notification from "pages/Notification/Notification";

const App = () => {
	return (
		<>
			<PreLogin />
			{/* <Routes> */}
			{/* <Route path="/" element={<PreLogin />} />
			<Route path="/signup" element={<SignUp />}></Route>
			<Route path="/notification" element={<Notification />}></Route>
			<Route path="/profile" element={<Profile />}></Route>
			<Route path="/signupemail" element={<SignUpEmail />}></Route>
			<Route path="/chat" element={<Chat />}></Route>
			<Route path="/explorer" element={<Explorer />}></Route>
			<Route path="/home" element={<Home />}></Route>
			<Route path="/Login" element={<Login />}></Route> */}
			{/* </Routes> */}
		</>
	);
};

export default App;
