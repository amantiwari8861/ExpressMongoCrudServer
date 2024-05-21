const mongoose=require("mongoose");
const productSchema = new mongoose.Schema({
    prid: String,
    image: String,
    name: String,
    price: Number
});
const Product = mongoose.model('Product', productSchema);

module.exports = Product;

// Model -> interact with Database (or store data that is received/sent from/to backend )
