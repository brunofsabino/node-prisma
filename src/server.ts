import { Request, Response } from 'express'
import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import path from 'path'
import router from './routes/index'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.static(path.join(__dirname, '../public')))
app.use(express.urlencoded({ extended: true}))

app.use(router)
app.use('/ping', (req: Request, res: Response) => {
    res.json({ pong: true })
})

//app.use(express.static(path.join(__dirname,)))


app.listen(process.env.PORT)
