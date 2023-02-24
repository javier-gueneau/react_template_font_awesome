const express = require("express");
const cors = require('cors')
const app = express();
const cookieParser = require('cookie-parser');


require("./config/mongoose.config");

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cookieParser());


const AllProductRoutes = require("./routes/invest.routes");
const Users = require("./routes/user.routes");
const Comments = require("./routes/comment.routes");
AllProductRoutes(app);
Users(app)
Comments(app)

app.listen(8000, () => console.log("The server is all fired up on port 8000"));