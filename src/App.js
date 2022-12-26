import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useContext } from "react";
import UserContext from "./contexts/UserContext";

import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import SubscriptionsPage from "./pages/SubscriptionsPage/SubscriptionsPage";
import PlanInfoPage from "./pages/SubscriptionsPage/PlanInfoPage";
import HomePage from "./pages/HomePage/HomePage"
import { useState } from "react";


export default function App() {

  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("userData")));
  const [token, setToken] = useState("");
  const [name, setName] = useState("");

  return (
    <BrowserRouter>
      <UserContext.Provider value={{
        token, setToken, userData, setUserData, name, setName 
      }}>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/sign-up" element={<SignUpPage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/subscriptions" element={<SubscriptionsPage/>}/>
          <Route path="/subscriptions/id" element={<PlanInfoPage/>}/>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
