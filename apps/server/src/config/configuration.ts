import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { User } from 'src/entities/user.entity';

dotenv.config(); // Ensure .env is loaded

export interface EnvironmentVariables {
    PORT: number;
}

export function validateConfig(config: Record<string, unknown>): EnvironmentVariables {
    const port = Number(config.PORT);
    if (isNaN(port)) {
        throw new Error('PORT must be a number');
    }
    return {
        PORT: port,
    };
}

export const databaseConfig: TypeOrmModuleOptions = {
    type: process.env.DB_TYPE as any,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: process.env.DB_SYNC === 'true',
    autoLoadEntities: process.env.DB_AUTOLOAD === 'true',
    entities: [User],

};

export default () => validateConfig(process.env);