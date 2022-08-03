import React from "react";
import ReactDOM from "react-dom/client";
import "assets/styles/index.css";
import App from "App";
// import { BrowserRouter } from "react-router-dom";
// import Login from "pages/Login/Login";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{/* <BrowserRouter> */}
		{/* <Login /> */}
		<App />
		{/* <div>mahsa</div> */}
		{/* </BrowserRouter> */}
	</React.StrictMode>
);
