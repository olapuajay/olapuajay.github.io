import express from "express";
import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const SECRET = "sometext"

const app = express()

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/lpu")
  .then(() => {
    app.listen(8080, () => { console.log('server started on port 8080'); console.log('connected to db') });
  }
);

const userSchema = mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    role: { type: String }
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema)

app.post("/register", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const hashesPassword = await bcrypt.hash(password, 10);
    const user = {
      name, email, password: hashesPassword, role
    };
    const result = await userModel.create(user);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" })
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await userModel.findOne({email});
    if(existingUser) {
      const isMatch = await bcrypt.compare(password, existingUser.password)
      if(isMatch) {
        const userObj = { name: existingUser.name, email: existingUser.email, role: existingUser.role }
        const token = jwt.sign(userObj, SECRET, { expiresIn: '1h' });
        res.status(200).json({ user: userObj, token });
      } else {
        res.status(400).json({ message: "Invalid Password" });
      }
    } else {
      res.status(400).json({ message: "User not found" });
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Something went wrong" })
  }
})

app.put("/update", async (req, res) => {
  try {
    const { email, role } = req.body;
    const updateUser = await userModel.updateOne(
      { email: email },
      { $set: { role: role } }
    );
    if(updateUser.modifiedCount === 0) {
      return res.status(404).json({ message: "user not found or role already set" });
    }
    res.status(200).json({ message: "user role updated succussfully" })
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" })
  }
})

app.delete("/delete", async (req, res) => {
  try {
    const { email } = req.body;
    const deletedUser = await userModel.deleteOne({ email });
    if(deletedUser.deletedCount === 0) {
      return res.status(404).json({ message: "user not found!" });
    }
    res.status(200).json({ message: "user deleted successfully" })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "something went wrong" })
  }
})