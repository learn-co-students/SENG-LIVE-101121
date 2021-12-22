function LoggedInApp({ setCurrentUser, currentUser }) {
  const handleLogout = () => {
    setCurrentUser(null);
    fetch("/logout", { method: "DELETE" });
  };
  return (
    <div>
      Welcome {currentUser.username}!
      <p>
        <button onClick={handleLogout}>Logout</button>
      </p>
    </div>
  );
}

export default LoggedInApp;
