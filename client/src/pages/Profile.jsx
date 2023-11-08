import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import jsPDF from "jspdf"; // Import jsPDF from the correct path

const Profile = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        // Filter products where saved is true
        const savedProducts = response.data.filter((product) => product.saved);
        setProducts(savedProducts);
      } catch (error) {
        console.error("Error fetching saved products:", error);
      }
    };

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
    fetchData(); 
  }, [cookies, navigate, removeCookie]);

  const handleLogout = () => {
    removeCookie("token");
    navigate("/signup");
  };

  const handleDelete = async (productId) => {
    try {
      await axios.patch(`http://localhost:3000/product/edit/${productId}`, {
        saved: false,
      });
      const updatedProducts = products.filter((product) => product._id !== productId);
      setProducts(updatedProducts);
      toast.success("Product removed successfully!");
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Failed to remove product. Please try again.");
    }
  };

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.text("Saved Products", 20, 10);
    let totalPrice = 0;
  
    products.forEach((item, index) => {
      if (item.saved === true) {
        doc.text(`Product Name: ${item.food_name}`, 20, 20 + index * 60);
        doc.text(`Cuisine: ${item.cuisine}`, 20, 30 + index * 60);
        doc.text(`Instructions: ${item.instructions}`, 20, 40 + index * 60);
        if (item.price) {
          doc.text(`Price: $${item.price}`, 20, 50 + index * 60);
          totalPrice += parseFloat(item.price);
        }
        if (item.food_photo) {
          doc.addImage(item.food_photo, "JPEG", 20, 60 + index * 60, 50, 50);
        }
        doc.text("--------------------------------------------------", 20, 70 + index * 60);
      }
    });
  
    doc.text(`Total Price: $${totalPrice.toFixed(2)}`, 20, 70 + products.length * 60);
    doc.save("saved_products.pdf");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-400 via-pink-500 to-red-500">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-12 rounded-lg shadow-lg max-w-2xl w-full mb-8">
          <h2 className="text-3xl mb-6 text-center">
            Welcome, <span className="font-bold">{username}</span>
          </h2>
          <h3 className="text-2xl mb-4">Saved Products:</h3>
          <ul>
            {products.map((item, index) =>
              item.saved === true ? (
                <li
                  key={index}
                  className="mb-6 p-6 bg-gradient-to-r from-blue-300 to-purple-500 rounded-lg shadow-md text-white"
                >
                  <div className="font-bold text-xl mb-2">{item.food_name}</div>
                  <div className="text-lg mb-2">Cuisine: {item.cuisine}</div>
                  <div className="text-lg mb-2">Instructions: {item.instructions}</div>
                  {item.price && <div className="text-xl font-bold">Price: ${item.price}</div>}
                  {item.food_photo && (
                    <img
                      src={item.food_photo}
                      alt={item.food_name}
                      className="w-64 h-64 object-cover mt-4 rounded-lg shadow"
                    />
                  )}
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg mt-4"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </li>
              ) : null
            )}
          </ul>
        </div>

        <button
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg mb-4"
          onClick={handleDownload}
        >
          DOWNLOAD SAVED PRODUCTS (PDF)
        </button>

        <button
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg"
          onClick={handleLogout}
        >
          LOGOUT
        </button>
        <ToastContainer className="mt-4" />
      </div>
    </div>
  );
};

export default Profile;
