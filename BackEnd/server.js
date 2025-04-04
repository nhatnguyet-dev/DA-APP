const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const customerRoutes = require("./routers/CustomerRouter");

app.use(cors());
app.use(express.json());
app.use("/api", customerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
