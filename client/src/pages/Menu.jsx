import  { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";

const Menu = () => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/products")
      .then((res) => {
        console.log(res.data);
        setFood(res.data);
      })
      .catch((err) => {
        console.log("Error getting data:", err);
      });
  }, []); 

  return (
    <>
      <Navbar />
      <section className="p-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {food.map((item, index) => (
              <div className="bg-white rounded shadow" key={index}>
                <img
                  src={item.food_photo}
                  alt={item.food_name}
                  className="w-full h-56 object-cover rounded-t"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{item.food_name}</h2>
                  <p className="text-gray-700 mb-4">{item.cuisine}</p>
                  <Link to={`/products/${item._id}`}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300">
                      View more
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Menu;
