const Product = require("../models/ProductModel")
const User = require("../models/UserModel");

module.exports.saveFood = async (req, res) => {
    const { userId, foodId } = req.params;
  
    try {
      const user = await User.findById(userId);
      const foodItem = await Product.findById(foodId);
  
      if (!user || !foodItem) {
        return res.status(404).json({ error: "User or Food not found." });
      }
  
      // Check if the food item is already saved by the user
      if (user.savedFoods.includes(foodItem._id)) {
        return res.status(400).json({ error: "Food already saved." });
      }
  
      // Save the food item for the user
      user.savedFoods.push(foodItem._id);
      await user.save();
  
      res.json({ message: "Food saved successfully." });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

module.exports.getAllProducts = (req, res) => {
    const { search } = req.query;
    let query = {};
    if (search) {
      query = {
        food_name: { $regex: new RegExp(search, "i") } // Case-insensitive search
      };
    }
  
    Product.find(query)
      .then((products) => {
        res.json(products);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  };


module.exports.getOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then((singleUser) => {
            res.json(singleUser);
        })
        .catch((err) => {
            res.status(400).json(err);
        })

}

module.exports.crateProduct = (req, res) => {
    Product.create(req.body)
        .then((productCreated) => {
            res.json(productCreated)
        })
        .catch((err) => {
            res.status(400).json(err);
        })

}

module.exports.updateProduct = (req, res) => {
    Product.updateOne({ _id: req.params.id }, req.body, { new: true })
        .then((updateProduct) => {
            res.json(updateProduct)
        })
        .catch((err) => {
            res.status(400).json(err);
        })

}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then((deleteProduct) => {
            res.json(deleteProduct)
        })
        .catch((err) => {
            res.status(400).json(err);
        })

}

////
