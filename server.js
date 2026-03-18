const express = require("express");
const app = express();
app.use(express.json());
let products = [
  { id: 1,name:"Shirt",price: 1000 },
  { id: 2,name:"Shoes",price: 2000 }
];
app.get("/",(req, res)=>{
    res.send("API is working");
});
app.get("/products",(req, res)=>{
    res.json(products);
});
app.listen(3000,() =>{
    console.log("Server running on port 3000");
});
