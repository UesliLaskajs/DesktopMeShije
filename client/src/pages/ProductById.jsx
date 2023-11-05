import  { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ProductById = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    // Fetch product data based on the ID from the API
    axios.get(`http://localhost:3000/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log("Error getting specific Product Data", err);
      });
  }, [id]); // Re-run the effect whenever the ID changes

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <section className="p-8 bg-white shadow-md rounded-lg h-full w-full max-w-screen-xl">
        <div className="container mx-auto h-full">
          <div className="flex justify-between items-center h-full">
            <div className="links">
              {/* Display product image */}
              <img src={product.food_photo} alt="" className="w-48 h-48 object-cover rounded-lg" />
              {/* Check if product has a YouTube video and there's no error */}
              {product.food_video && !videoError && (
                <div className="mt-4">
                  {/* Embed YouTube video */}
                  <iframe
                    title="YouTube Video"
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${product.food_video}`}
                    frameBorder="0"
                    allowFullScreen
                    // Handle video loading error
                    onError={() => setVideoError(true)}
                  ></iframe>
                </div>
              )}
              {/* Display error message if there was an error loading the video */}
              {videoError && <p>Failed to load the video. Please try again later.</p>}
            </div>
            <div className="details_section ml-8">
              {/* Display product details */}
              <h1 className="text-4xl font-bold mb-4">{product.food_name}</h1>
              <h1 className="text-xl mb-4">{product.cuisine}</h1>
              <p className="text-gray-700">{product.instructions}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductById;
