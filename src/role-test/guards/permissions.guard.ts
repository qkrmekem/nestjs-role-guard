import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { PERMISSIONS_KEY } from "../decorators/require-permissions.decorator";

export class PermissionsGuard implements CanActivate{
    constructor(private reflect: Reflector){}

    canActivate(context: ExecutionContext): boolean {
        console.log('PermissionsGuard 실행');
        const requirePermissions = this.reflect.getAllAndMerge(PERMISSIONS_KEY, [
            context.getHandler(),
            context.getClass(),
        ])
        if(!requirePermissions){
            return true;
        }
        const {user} = context.switchToHttp().getRequest();
        return requirePermissions.some((permission) => user?.permissions?.includes(permission));
    }

}