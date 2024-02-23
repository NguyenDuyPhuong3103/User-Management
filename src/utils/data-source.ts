require('dotenv').config()
import { DataSource } from 'typeorm'
import config from 'config'
import { User } from '../models'

const postgresConfig = config.get<{
  host: string
  port: number
  username: string
  password: string
  database: string
}>('postgresConfig')

export const AppDataSource = new DataSource({
  ...postgresConfig,
  type: 'postgres',
  synchronize: true,
  entities: [User],
})
