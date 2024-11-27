import { Body, Controller,Get,Post, Request, UseGuards} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './guard/auth/auth.guard';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Post('register')
    register(
        @Body()
        registerDto: RegisterDto,
    ) {
        return this.authService.register(registerDto);
    }

    @Post('login')
    login(
        @Body()
        loginDto: LoginDto,
    ) {
        return this.authService.login(loginDto);
    }
 
    
    @Get('profile')
    // @Auth(Role.USER)
    @UseGuards(AuthGuard)
    profile(@Request() req) {
        return req.user;
    }
    
    
}

/*
profile(@ActiveUser() user: UserActiveInterface) {
        console.log(user)
        return this.authService.profile(user);
    }
*/