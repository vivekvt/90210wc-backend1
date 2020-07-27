const dotenv = require("dotenv");
const mongoose = require("mongoose");
const serverless = require("serverless-http");

dotenv.config({ path: "./config.env" });

const app = require("./app");

const DB = process.env.DATABASE.replace(
    "<PASSWORD>",
    process.env.DATABASE_PASSWORD
);

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
    })
    .then((con) => console.log("DB Connection Successfull!"))
    .catch((err) => console.log("DB Connection Failed"));

module.exports.handler = serverless(app);

// app.listen(process.env.PORT, () => {
//     console.log(`Express App is runing on Port ${process.env.PORT}`);
// });