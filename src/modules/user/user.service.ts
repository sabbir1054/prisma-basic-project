import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

const insertUserToDB = async (data: User): Promise<User> => {
  const result = await prisma.user.create({ data });
  return result;
};

export const UserService = {
  insertUserToDB,
};
