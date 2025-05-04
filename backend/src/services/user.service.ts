import { User } from '../models/user.model';

export const getAllUsers = async () => {
  return await User.find();
};

export const getUserById = async (id: string) => {
  return await User.findById(id);
};

export const createUser = async (userData: { name: string; email: string }) => {
  const user = new User(userData);
  return await user.save();
};
