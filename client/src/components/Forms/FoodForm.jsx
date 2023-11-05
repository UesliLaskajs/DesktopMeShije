import  { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FoodForm = () => {
  const [formData, setFormData] = useState({
    food_name: "",
    cuisine: "",
    instructions: "",
    food_photo: "",
    food_video: "",
    price:""
  });

  const [errors, setErrors] = useState({});
  const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/product/new", formData);
      console.log("Form submitted:", response.data);
      navigate("/menu")
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setErrors(error.response.data.error);
      } else {
        console.error("Error submitting form:", error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: null
    });
  };

  return (
    <section>
      <div className="container mx-auto mt-8 p-[60px]">
        <h1 className="text-2xl font-bold mb-4">Product Form</h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="food_name" className="block text-sm font-medium text-gray-600">
              Food Name:
            </label>
            <input
              type="text"
              id="food_name"
              name="food_name"
              value={formData.food_name}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.food_name && <p className="text-red-500">{errors.food_name}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="cuisine" className="block text-sm font-medium text-gray-600">
              Cuisine:
            </label>
            <input
              type="text"
              id="cuisine"
              name="cuisine"
              value={formData.cuisine}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.cuisine && <p className="text-red-500">{errors.cuisine}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="instructions" className="block text-sm font-medium text-gray-600">
              Instructions:
            </label>
            <textarea
              id="instructions"
              name="instructions"
              value={formData.instructions}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.instructions && <p className="text-red-500">{errors.instructions}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="food_photo" className="block text-sm font-medium text-gray-600">
              Image URL:
            </label>
            <input
              type="text"
              id="food_photo"
              name="food_photo"
              value={formData.food_photo}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.food_photo && <p className="text-red-500">{errors.food_photo}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="food_video" className="block text-sm font-medium text-gray-600">
              Video URL:
            </label>
            <input
              type="text"
              id="food_video"
              name="food_video"
              value={formData.food_video}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.food_video && <p className="text-red-500">{errors.food_video}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-medium text-gray-600">
              Price:
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.price && <p className="text-red-500">{errors.price}</p>}
          </div>
       
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
            >
              Submit
            </button>
          
        </form>
      </div>
    </section>
  );
};

export default FoodForm;
