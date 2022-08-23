const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.static("public"));
app.use(cors({ origin: ["http://localhost:3000", "http://heroku.com"] }));
// for multiple use array

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

const userRouter = require("./routes/user");
const entryController = require("./routes/entry");

app.use("/user", userRouter);
app.use("/entry", entryController);
