// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const ProductsByName = ({ food_name }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Fetch all products from the API
//     axios.get("http://localhost:3000/products")
//       .then((res) => {
//         console.log(res.data);
//         // Filter products based on the provided food_name prop
//         const filteredProducts = res.data.filter(product => product.food_name.includes(food_name));
//         setProducts(filteredProducts);
//       })
//       .catch((err) => {
//         console.log("Error getting products", err);
//       });
//   }, [food_name]); // Re-run the effect whenever the food_name prop changes

//   return (
//     <div className="mt-4">
//       <h2 className="text-2xl font-bold mb-2">Products matching:</h2>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>{product.food_name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductsByName;
