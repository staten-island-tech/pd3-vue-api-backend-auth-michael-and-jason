const express = require("express");
const app = express();

//Import Routes
const authRoute = require(`./routes/auth`);

//use external server port OR local 3000
const port = process.env.PORT || 3000; 

//Route Middlewares
app.use(`/api/user`, authRoute);

app.listen(3000, () => console.log(`Server is twerking on ${port}`));
