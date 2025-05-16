import { UserRoleType } from "./userRole.entity";

export interface DecodedUserType  {
     userId : string;
     userRole : UserRoleType.USER | UserRoleType.ADMIN
}