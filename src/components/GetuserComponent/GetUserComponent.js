import { useState } from "react";

function GetUserComponent({ setUser, setIsLogged }) {
  const [userInput, setUserInput] = useState("");
  const HandleLogin = (userInput) => {
    setUser(userInput);
    setIsLogged(true);
    console.log(userInput);
  };
  return (
    <>
      <form>
        <input
          type="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        />
        <button onClick={() => HandleLogin(userInput)}>Acessar com Nome</button>
      </form>
    </>
  );
}
export default GetUserComponent;
