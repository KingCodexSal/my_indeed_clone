require("./config/db");

const app = require("express")();
port = 5000;

const bodyParser = require("express").json;
app.use(bodyParser());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
