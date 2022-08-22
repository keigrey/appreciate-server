const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8080;

// app.use(cors({ origin: "http://localhost:3000" }));
//

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
