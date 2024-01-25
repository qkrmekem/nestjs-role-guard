import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { Role } from "../enum/role.enum";
import { ROLES_KEY } from "../decorators/roles.decorator";

@Injectable()
export class RolesGuard implements CanActivate{
    constructor(private reflector: Reflector){}

    canActivate(context: ExecutionContext): boolean {
        // ROLES_KEY와 일치하는 키값을 가진 메타데이터를 가지고 와서
        // 뒤에 나오는 메타데이터로 override
        context.switchToHttp().getRequest().user = { roles: [Role.Admin] };

        console.log('role guard ', context.switchToHttp().getRequest());
        const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
            context.getHandler(), 
            context.getClass(),
        ]);
        if(!requiredRoles){
            return true;
        }
        const { user } = context.switchToHttp().getRequest();
        console.log('request.user = ', user);
        
        return requiredRoles.some((role) => user?.roles?.includes(role));
    }

}