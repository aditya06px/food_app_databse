const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

// import routers
const dbRouters = require("./routers/dbRouters");

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


// routers
app.use("/db",dbRouters);


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});