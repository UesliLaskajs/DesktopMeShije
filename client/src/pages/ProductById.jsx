import  { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const ProductById = () => {
  const [product, setProduct] = useState({});
  // const [user, setUser] = useState(null);
  const [saved, setSave] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Check user authentication status when the component mounts
    axios.get("http://localhost:3000/user").then((res) => {
      if (res.data.status) {
        // setUser(res.data.user);
      }
    });

    // Fetch product data based on the ID
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError("Error getting specific Product Data");
        console.error(err);
      });
  }, [id]);

  const eventHandler = (e) => {
    e.preventDefault();
    axios.patch(`http://localhost:3000/product/edit/${id}`, {
      saved: true,
    })
      .then(() => {
        console.log("Successfully Saved");
        setSave(true);
        // Optionally, redirect to another page after saving
        navigate("/profile");
      })
      .catch((err) => {
        console.log("Couldn't Save", err);
      });
  };

  if (loading) {
    return <div className="min-h-screen flex justify-center items-center">Loading...</div>;
  }

  if (error) {
    return <div className="min-h-screen flex justify-center items-center text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <section className="p-8 bg-white shadow-md rounded-lg max-w-screen-xl w-full">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="mr-8">
              <img src={product.food_photo} alt="" className="w-48 h-48 object-cover rounded-lg" />

              {product.food_video && !videoError && (
                <div className="mt-4">
                  <iframe
                    title="YouTube Video"
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${product.food_video}`}
                    frameBorder="0"
                    allowFullScreen
                    onError={() => setVideoError(true)}
                  ></iframe>
                </div>
              )}

              {videoError && <p className="text-red-500 mt-2">Failed to load the video. Please try again later.</p>}
            </div>
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold mb-4">{product.food_name}</h1>
              <h1 className="text-xl mb-4">{product.cuisine}</h1>
              <p className="text-gray-700 mb-4">{product.instructions}</p>

              {product.price && <p className="text-xl font-bold">Price: ${product.price}</p>}

              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded"
                onClick={eventHandler}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductById;
