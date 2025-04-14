const express = require("express");
const dishes = require("./routes/dishesroute");
const user = require("./routes/userroute");
const mongoose = require('mongoose');
const cors=require("cors");
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUI=require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js'], // files containing annotations as above
};





// const { senddishes } = require("./controllers/dishes");
// const { signupuser, loginuser } = require("./controllers/usercontroller");
const app = express();
const port = 5000;
app.use(express.json());
const openapiSpecification = swaggerJsdoc(options);
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(openapiSpecification));
app.use(cors());
app.use((req, res, next) => {
  console.log("time", Date.now());
  next();
  const x = 1;
  if (x > 10) {
    next();
  } else {
    console.log("fails");
  }
});
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/foodapp');
  console.log("database connected");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
main().catch(err => console.log(err));

// const cat=mongoose.model('cat',{name:String});
// const kitty=new cat({name:'zildjian'});
// kitty.save().then(()=>console.log("meow"));

// const kitty2=new cat({name:'bella'});
// kitty2.save().then(()=>console.log("meow"));

// cat.find().then((kittens)=>{
//   console.log(kittens);
// })
app.use("/api", dishes);
app.use("/api", user);
app.get("/", (req, res) => {
  res.send("home hello");
});

//   console.log(req.query.limit);
//   res.send([
//     {
//       id: 1,
//       name: "tanish",
//     },
//   ]);

// app.post("/signup", signupuser);

//   res.status(200).send([
//     {
//       email: "",
//       password: "",
//     },
//   ]);

// app.post("/login",loginuser);
app.listen(port, () => {
  console.log("running at port 5000");
});
// browser by default considers 'get' request
