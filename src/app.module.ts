import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { envSchema } from "src/env";
import { CreateAccountController } from "./controllers/create-account.controller";
import { PrismaService } from "./prisma/prisma.service";

@Module({
	imports: [
		ConfigModule.forRoot({
			validate: (env) => envSchema.parse(env),
			isGlobal: true,
		}),
	],
	controllers: [CreateAccountController],
	providers: [PrismaService],
})
export class AppModule {}
