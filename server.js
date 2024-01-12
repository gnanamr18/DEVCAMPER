const express = require("express");
const dotenv = require("dotenv");
const bootcamps = require("./Routes/bootcamps");

//Load env var
dotenv.config({ path: "./config/config.env" });

const app = express();

app.use("/api/v1/bootcamps", bootcamps);
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server running in ${process.env.NODE_ENV} on the PORT ${PORT}`);
});
