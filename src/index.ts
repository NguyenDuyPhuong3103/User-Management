import 'reflect-metadata'
import { createConnection } from 'typeorm'
import express, { Application } from 'express'
import morgan from 'morgan'

import dbConfig from './config/database'
import Router from './routes'

const PORT = process.env.PORT || 8000

const app: Application = express()

app.use(express.json())
app.use(morgan('tiny'))
app.use(express.static('public'))

app.use(Router)

createConnection(dbConfig)
  .then((_connection) => {
    app.listen(PORT, () => {
      console.log(`App listening at http://localhost:${PORT}`)
    })
  })
  .catch((err) => {
    console.log('Unable to connect to db', err)
    process.exit(1)
  })
