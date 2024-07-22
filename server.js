const express = require("express");
const bodyParser = require("body-parser");
require("./config/database");
require("dotenv").config();
const app = express();
require("dotenv").config();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const http = require("http");
const server = http.createServer(app);
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
require("./Config/global");


//response handler
app.use((req, res, next) => {
    const ResponseHandler = require("./Config/response_handler");
    res.handler = new ResponseHandler(req, res);
    next();
});

// routers
try {
    const appRoutes = require("./routes");
    appRoutes(app);
} catch (error) {
    console.log("Route Crash -> ", error);
}

/*app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);*/

//port
const PORT = process.env.PORT || 8000;
const BACKEND_SERVER = process.env.BACKEND_SERVER_LINK;

//swagger-doc
/*const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: "node_intern_team API Documentation",
        description: `Server is running on ${BACKEND_SERVER}`,
        version: "1.0.0",
      },
      servers: [
        {
          url: `http://localhost:5501`,
          description: "This is my local Server",
        },
      ],
      securityDefinitions: {
        AuthToken: {
          type: "apiKey",
          name: "Authorization",
          in: "header",
          description:
            "Set Authorization Token it will be applied wherever Authorization is defined",
        },
        AuthResetPasswordToken: {
          type: "apiKey",
          name: "admin_reset_token",
          in: "header",
          description: "Set token user_reset_token for admin reset password",
        },
      },
    },
    apis: ["./Routes/*.js"], // Specify the path to your route file(s)
  };
  
  const swaggerSpec = swaggerJsdoc(swaggerOptions);
  // Serve Swagger UI
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  */

//server
server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});