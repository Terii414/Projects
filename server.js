const express = require("express");
const app = express();
const cors = require("cors");
//const formidable = require("express-formidable");
const fs = require("fs");
const filename = "data.json";
require("dotenv").config();

app.use(cors());
//app.use(formidable());
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

const backendUrl = `https://${process.env.CODESPACE_NAME}-${process.env.HOST_PORT}.app.github.dev`;

app.use("/public", express.static("./public"));

app.get("/", (req, res) => {
  console.log("Testing VMInfo");
  if (fs.existsSync(filename)) {
    const jsonData = fs.readFileSync(filename, "utf8");
    res.send(`
      <h1>${backendUrl}</h1>
      <code>${jsonData}</code>
    `);
  } else {
    res.status(404).send(`
      <h1>${backendUrl}</h1>
      <hr
      <h3>Ready to send the validation data</h3>
      <h3>Listo para enviar la información de validación</h3>
    `);
  }
});

app.post("/", async (req, res) => {
  console.log("Receiving data");
  let data=req.body
  fs.writeFileSync(filename, JSON.stringify(data), "utf8");
  res.status(200).send({ message: "JSON saved successfully" });
});

//app.listen(3001,()=>{console.log("Listening")})
app.listen(process.env.HOST_PORT, () => {
  let text = `
  /* Your url is:
  * -----------------------------------
  * ${backendUrl}
  * ----------------------------------- 
  */
 console.log(${backendUrl})
  `;
  //console.clear();
  console.log("Your URL for the verification script is: " + backendUrl);
});
