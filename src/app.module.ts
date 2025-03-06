import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { envSchema } from "src/env";
import { AuthModule } from "./auth/auth.module";
import { CreateAccountController } from "./controllers/create-account.controller";
import { PrismaService } from "./prisma/prisma.service";

@Module({
	imports: [
		ConfigModule.forRoot({
			validate: (env) => envSchema.parse(env),
			isGlobal: true,
		}),
		AuthModule,
	],
	controllers: [CreateAccountController],
	providers: [PrismaService],
})
export class AppModule {}
