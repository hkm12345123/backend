require("dotenv").config(require("./config/dotenv"));
const bodyParser = require('body-parser');
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const path = require("path");
const apiResponse = require("./utils/apiResponse");
const APIStatus = require("./constants/APIStatus");
const db = require("./db/mongoose");
const cors = require("cors");
const route = require("./routes");
const { app:{port} } = require("./config");
const app = express();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Smart Home",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:8081",
      },
    ],
  },
  apis: ["./src/routes/*.js"], // files containing annotations as above
};
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsDoc(options)));

// Parse body req to json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable cors
app.use(cors());

// Route middleware
route(app);

// Handle exception
app.use((err, req, res, next) => {
  if (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json(
      apiResponse({
        status: APIStatus.FAIL,
        msg: "validation failed",
        data: err,
      })
    );
  }

  console.log(err);
  return res
    .status(500)
    .json(
      apiResponse({ status: APIStatus.ERROR, msg: "Internal Server error" })
    );
});

//Connect to mongodb database
db.connect();

//Start an express server
app.listen(port, () => console.log(`Server Started http://localhost:${port}`));
