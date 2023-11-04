import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";

const Profile = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        "http://localhost:3000",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      return status
        ? toast(`Hello ${user}`, {
            position: "top-right",
          })
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const handleLogout = () => {
    removeCookie("token");
    navigate("/signup");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar /> {/* Include the Navbar component */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="bg-white p-8 rounded shadow-lg">
          <h2 className="text-2xl mb-4">Welcome, <span className="font-bold">{username}</span></h2>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
            onClick={handleLogout}
          >
            LOGOUT
          </button>
        </div>
        <ToastContainer className="mt-4" />
      </div>
    </div>
  );
};

export default Profile;
