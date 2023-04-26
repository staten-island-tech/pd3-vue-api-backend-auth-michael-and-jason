const express = require("express");
const app = express();
const authRoute = require(`./routes/auth`);
const port = process.env.PORT || 3000; //use external server port OR local 3000

app.use(`/api/user`, authRoute);

app.listen(3000, () => console.log(`Server is twerking on ${port}`));
