import { Request, Response } from "express";
import { UserService } from "./user.service";

const insertUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.insertUserToDB(req.body);

    res.send({
      success: true,
      message: "User Create Successfully",
      data: result,
    });
  } catch (err) {
    res.send({
      success: false,
      message: "User not create !",
      data: err,
    });
  }
};

export const UserController = {
  insertUser,
};
