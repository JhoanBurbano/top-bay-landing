import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <>
    <ToastContainer />
          <Navbar />
          <Outlet/>
    </>
  );
}

export default App;
