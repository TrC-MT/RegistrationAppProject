//This was example code.


// const express = require("express");
// const jwt = require("jsonwebtoken");
// const { expressjwt } = require("express-jwt");
// uuid;

// const secret = "supersecretstring";
// const auth = expressjwt({ secret: secret, algorithms: ["HS256"] });
// const users = [
//   {
//     username: "asdf",
//     password: "asdf",
//   },
// ];

// const app = express();

// app.use(express.json());
// app.use(express.static("./public"));

// app.post("/login", (req, res) => {
//   const { username, password } = req.body;
//   const user = users.find((currUser) => currUser.username === username);
//   if (!user || user.password !== password) {
//     return res.status(401).json({ errorMessage: "Invalid Credentials" });
//   } else {
//     const token = jwt.sign({ userId: user._id }, secret, {
//       algorithm: "HS256",
//       expiresIn: "10s",
//     });
//     console.log(token);
//     return res.json({ token: token, message: `${user.username} is logged in` });
//   }
// });

// app.get("/getUserProfile", auth, (req, res) => {
//   res.json({ course: { courseId: 1, courseName: "courseName" } });
// });

// app.use((err, req, res, next) => {
//   if (err.name === "UnauthorizedError") {
//     res.status(401).json({ errorMessage: "invalid token..." });
//   } else {
//     next(err);
//   }
// });

// app.listen(5000, () => {
//   console.log("listening  on port 5000");
// });
