const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Hardcoded admin
const ADMIN_EMAIL = "steadyboy229@gmail.com";
const ADMIN_PASSWORD = "steady21";

// Paystack Keys
const PAYSTACK_PUBLIC_KEY = "pk_live_c1236c66fb7373f00ccf13f2a8466ba40b581ce6";
const PAYSTACK_SECRET_KEY = "sk_live_a9682cffeea5acd1d79f0fef4b025e68259fba77";
const PLAN_MONTHLY = "PLN_7zl31ylpn9yt28z";
const PLAN_ANNUAL = "PLN_qdr1xfta5sy35vr";

// Routes
app.get("/", (req,res)=> res.send("Quick Delivery Backend Running"));

app.post("/api/login", (req,res)=> {
  const { email, password } = req.body;
  if(email === ADMIN_EMAIL && password === ADMIN_PASSWORD){
    res.json({ success:true, role:"admin" });
  } else {
    res.json({ success:false, message:"Invalid credentials" });
  }
});

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
