import { Request, Response } from "express";
import { User, users } from "..";

// Get my user
const getMyUser = async (req: Request, res: Response) => {
  try {
    const currentUser = users.find((user) => user.id === req.userId);
    if (!currentUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(currentUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error in getting the user" });
  }
};

// Create my user
const createMyUser = async (req: Request, res: Response) => {
  try {
    const auth0Id = req.body.auth0Id;
    const existingUser = users.find((user) => user.auth0Id === auth0Id);
    if (existingUser) {
      return res.status(200).send();
    }

    // const email
    const { email } = req.body;
    const newUser: User = {
      id: "46546",
      auth0Id,
      email,
      name: "gfgfj",
      mobile: "fdfdl",
    };
    users.push(newUser);
    console.log(users);
    res.send(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error in getting the user" });
  }
};

export default {
  getMyUser,
  createMyUser,
};
