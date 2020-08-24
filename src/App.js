import React from "react";

import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import "./App.css";

function App() {
  return (
    <>
      <Profile />
      <LoginButton />
      <LogoutButton />
    </>
  );
}

export default App;
