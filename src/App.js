import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import "./App.css";
import { useEffect, useState } from "react";
import { useAuthentication } from "./hooks/useAuthentication";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Users from "./pages/Users/Users";
import Sidebar from "./components/Sidebar/Sidebar";


function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }
  return (
    <div className="App">
    <AuthProvider value={{ user }}>
        <BrowserRouter>
        <Navbar />
        <Sidebar />
          <div className="container">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/users" element={<Users />} />
              <Route path="/" element={!user ? <Login /> : <Navigate to="/" />} />
            </Routes>
          </div>
     
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
