import { findUserByEmail, verifyPassword, users } from '../model/User';

export function loginUser(email: string, password: string) {
  const user = findUserByEmail(email);

  if (!user || !verifyPassword(user, password)) {
    throw new Error("Credenciais inválidas");
  }

  return { token: user.token };
}

export function verifyToken(token: string) {  
  const user = users.find((user) => user.token === token);  

  if (!user) {
    throw new Error("Token inválido");
  }

  return user;
}
