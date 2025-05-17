import { prisma } from "../DB";
import {
  getUserByIdAndRoleInterface,
  updateUserInterface,
} from "../interfaces/user.interface";

export async function getUserByIdAndRole(
  userData: getUserByIdAndRoleInterface
) {
  return await prisma.user.findUnique({
    where: {
      id: userData.userId,
      role: userData.userRole,
    },
  });
}

export async function updateUserDetails(
  userId: string,
  userDetailsToUpdate: updateUserInterface
) {
  console.log("userID ", userId);
  console.log("object" , userDetailsToUpdate)

   const payload : any = userDetailsToUpdate;

   delete payload.removeAvatar;

  return await prisma.user.update({
    where: {
      id: userId,
    },
    data: { ...payload },
  });
}
