import { SetMetadata } from "@nestjs/common";
import { Permission } from "../enum/permission.enum";

export const PERMISSIONS_KEY = 'permissions';
export const RequirePermissions = (...permissions: Permission[]) => {
    console.log('RequirePermissions = ', permissions);
    SetMetadata(PERMISSIONS_KEY, permissions);
}