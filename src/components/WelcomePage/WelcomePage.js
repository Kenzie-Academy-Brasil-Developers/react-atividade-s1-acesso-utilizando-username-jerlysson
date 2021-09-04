function WelcomePage({ user, setIsLogged }) {
  const HandleLogout = () => {
    setIsLogged(false);
  };

  return (
    <>
      <p>Olá Grande, {user}!!</p>

      <button onClick={HandleLogout}>Fazer Logout</button>
    </>
  );
}

export default WelcomePage;
