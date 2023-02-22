const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const userRouter = require("./routes/userRoute")
const authRouter = require('./routes/auth')
const productRouter = require('./routes/productsRoute')
const cartRouter = require('./routes/cartRoute')
const orderRouter = require('./routes/orderRoute')
const path = require('path');

dotenv.config()

mongoose.connect(process.env.MONGO_URL).then(console.log("DB Connected")).catch((err)=>{console.log(err)})

app.use(express.json())


app.use('/uploads/images', express.static(path.join('uploads', 'images')));


app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);
app.use("/api/orders", orderRouter);
app.use('/',(req, res, next) => {
    console.log("called base url")
    res.send("Base URL executed")
})

app.listen( process.env.PORT || 5000, ()=>{
    console.log("running")
});