const express=require("express");
const app=express();

app.use(express.json());

app.post("/login", (req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    res.send("Login successful for "+email);
});

app.listen(5000, () => {
    console.log("Server started");
});