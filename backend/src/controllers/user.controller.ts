import { Request, Response, NextFunction } from 'express';
import * as UserService from '../services/user.service';

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await UserService.getAllUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await UserService.getUserById(req.params.id);
    if (!user) 
         res.status(404).json({ message: 'User not found' });
        
    res.json(user);
  } catch (err) {
    next(err);
  }
};

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newUser = await UserService.createUser(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
};
