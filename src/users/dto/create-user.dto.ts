import { Gender } from "../entities/user.entity";
export class CreateUserDto {
    readonly username: string;
    readonly email: string;
    readonly password: string;
    readonly is_verified?: boolean;
    readonly district : number;
    readonly date_of_birth : Date;
    readonly gender : Gender
}
