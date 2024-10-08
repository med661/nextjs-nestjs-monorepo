export interface EnvironmentVariables {
    PORT: number;
    // DATABASE_URL: string;
    // API_KEY: string;

}

export function validateConfig(config: Record<string, unknown>): EnvironmentVariables {
    const port = Number(config.PORT);
    if (isNaN(port)) {
        throw new Error('PORT must be a number');
    }

    // const databaseUrl = config.DATABASE_URL;
    // if (typeof databaseUrl !== 'string') {
    //     throw new Error('DATABASE_URL must be a string');
    // }

    // const apiKey = config.API_KEY;
    // if (typeof apiKey !== 'string') {
    //     throw new Error('API_KEY must be a string');
    // }



    return {
        PORT: port,
        // DATABASE_URL: databaseUrl,
        // API_KEY: apiKey,

    };
}

export default () => validateConfig(process.env);