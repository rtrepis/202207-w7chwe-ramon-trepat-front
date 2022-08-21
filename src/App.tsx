import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import Login from "./components/Login/Login";

const App = () => {
  const userState = useSelector((state: RootState) => state.user);

  return (
    <div className="App">
      <h1>Social Network</h1>
      {!userState.id ? <Login /> : <h2>Welcome {userState.userName}</h2>}
    </div>
  );
};

export default App;
