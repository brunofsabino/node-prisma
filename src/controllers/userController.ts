import { Request, Response } from 'express'
import { UserService } from '../services/UserService'

export const all = async (req: Request, res: Response) => {
    const users = await UserService.findAll()
    res.json({ users})
}

export const create = async (req: Request, res: Response) => {
    const { name, email, age } = req.body 
    if(name && email) {
        // TODO: validar email
        const user = await UserService.findOne({ email })
        if(!user) {
            const newUser = await UserService.create({ name, email, age: age ? parseInt(age) : undefined })
            res.status(201).json({ user: newUser })
        } else {
            res.json({ error: 'Já existe usuario com esse e-mail'})
        }
    } else {
        res.json({ error: 'Dados não preenchidos'})
    }
}