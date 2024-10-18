import fs from 'fs'
import { __dirname } from './../server.js'
export const getAllUser = (req, res, next) => {
    const users = JSON.parse(fs.readFileSync(`${__dirname}/data/users.json`))
    return res.status(200).json(users)
}