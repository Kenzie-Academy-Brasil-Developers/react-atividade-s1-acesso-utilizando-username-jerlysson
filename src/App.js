import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import GetuserComponent from "./components/GetuserComponent/GetUserComponent";
import WelcomePage from "./components/WelcomePage/WelcomePage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {isLoggedIn ? (
          <WelcomePage user={user} setIsLogged={setIsLoggedIn} />
        ) : (
          <GetuserComponent setUser={setUser} setIsLogged={setIsLoggedIn} />
        )}
      </div>
    </div>
  );
}

export default App;
