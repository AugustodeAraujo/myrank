import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "API Documentation",
    description: "Documentação da API",
  },
  host: "localhost:3030",
  schemes: ["http"],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./src/routes/index.ts"];

swaggerAutogen()(outputFile, endpointsFiles, doc).then(() => {
  require("./index.ts");
});
