const express = require("express");
const app = express();
const authRoute = require(`./routes/auth`);

app.use(`/api/user`);

app.listen(3000, () => console.log(`Server is twerking on ${port}`));
