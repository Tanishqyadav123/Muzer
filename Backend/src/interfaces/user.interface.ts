import { UserRoleType } from "../entity/userRole.entity";

export interface getUserByIdAndRoleInterface {
  userId: string;
  userRole: UserRoleType;
}

export interface updateUserInterface {
  firstName?: string;
  lastName?: string;
  avatarUrl: string | null;
  publicId: string | null;
  removeAvatar: boolean;
}
