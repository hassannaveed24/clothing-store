// const mongoose = require("mongoose");

const mongoose = require("mongoose");

// const db = process.env.db;

// mongoose
//   .connect(db, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//   })
//   .then(() => console.log("Connected to MongoDB.."))
//   .catch((err) => console.log(err));

const db =
  process.env.db ||
  "mongodb+srv://posuser:1234@posdb-0yxjw.mongodb.net/clothing-store?retryWrites=true&w=majority";

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to Mongodb"))
  .catch((err) => console.log(err));
