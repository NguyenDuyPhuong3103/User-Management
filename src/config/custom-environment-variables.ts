export default {
  port: 'PORT',
  postgresConfig: {
    host: process.env.POSTGRES_HOST || 'localhost',
    port: Number(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'postgres',
    database: process.env.POSTGRES_DB || 'postgres',
  },
  accessTokenPrivateKey: 'JWT_ACCESS_TOKEN_PRIVATE_KEY',
  accessTokenPublicKey: 'JWT_ACCESS_TOKEN_PUBLIC_KEY',
  refreshTokenPrivateKey: 'JWT_REFRESH_TOKEN_PRIVATE_KEY',
  refreshTokenPublicKey: 'JWT_REFRESH_TOKEN_PUBLIC_KEY',
}
