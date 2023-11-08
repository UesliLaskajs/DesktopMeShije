const ProductController=require("../controllers/ProductController")

module.exports=(app)=>{
    app.get("/products",ProductController.getAllProducts)
    app.get("/products/:id",ProductController.getOneProduct)
    app.post("/product/new",ProductController.crateProduct)
    app.patch("/product/edit/:id",ProductController.updateProduct)
    app.delete("/product/delete/:id",ProductController.deleteProduct)
    app.post("/product/save/:userId/:foodId", ProductController.saveFood);
}