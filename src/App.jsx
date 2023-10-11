import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Form from "./components/common/Form";
import { useEffect, useState } from "react";
import { app } from "./firebase-config";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import Home from "./Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/home");
    }
  }, []);

  const handleAction = (id) => {
    console.log(id);
    const authentication = getAuth();

    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate("/home");
          sessionStorage.setItem(
            "Auth Token",
            response._tokenResponse.refreshToken
          );
        })
        .catch((error) => {
          console.log(error);
          if (error.code === "auth/email-already-in-use") {
            toast.error("Email Already in Use");
          }
          if (error.code === "auth/weak-password") {
            toast.error("Password should be at least 6 characters");
          }
          if (error.code === "auth/invalid-email") {
            toast.error("Please enter a valid email address");
          }
        });
    }

    if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          console.log(response);
          sessionStorage.setItem(
            "Auth Token",
            response._tokenResponse.refreshToken,

            navigate("/home")
          );
        })
        .catch((error) => {
          console.log(error);
          if (error.code === "auth/wrong-password") {
            toast.error("Please check the Password");
          }
          if (error.code === "auth/invalid-login-credentials") {
            toast.error("Please check the Password");
          }
          if (error.code === "auth/user-not-found") {
            toast.error("Please check the Email");
          }
          if (error.code === "auth/invalid-email") {
            toast.error("Please enter a valid email address");
          }
        });
    }
  };

  return (
    <div className="App">
      <>
        <ToastContainer />
        <Routes>
          <Route
            path="/login"
            element={
              <Form
                title="Login"
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction(1)}
              />
            }
          />
          <Route
            path="/register"
            element={
              <Form
                title="Register"
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction(2)}
              />
            }
          />

          <Route path="/home" element={<Home />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
