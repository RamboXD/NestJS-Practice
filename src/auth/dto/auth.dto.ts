import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

//dto means data to object  
export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
