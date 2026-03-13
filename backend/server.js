const express = require("express")
const cors = require("cors")

const connectDB = require("./config/db")
const authRoutes = require("./routes/authRoutes")

const formRoutes = require("./routes/formRoutes")
const responseRoutes = require("./routes/responseRoutes")

const app = express()

connectDB()

app.use(cors())
app.use(express.json())
app.use("/api/auth", authRoutes);
app.use("/api/forms",formRoutes)
app.use("/api/responses",responseRoutes)

const PORT = 5000

app.listen(PORT,()=>{

console.log("Server running")

})