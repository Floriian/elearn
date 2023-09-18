import { JwtStrategy } from "@/auth/strategy/JwtStrategy";
import { auth0Config } from "@/config/auth0.config";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PassportModule } from "@nestjs/passport";
@Module({
    imports: [
        ConfigModule.forFeature(auth0Config),
        PassportModule.register({ defaultStrategy: 'jwt'})
    ],
    providers: [JwtStrategy]
})
export class AuthModule {}