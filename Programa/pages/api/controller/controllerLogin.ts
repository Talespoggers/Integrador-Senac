// controller/userController.js
import {ffindUserByEmailn ,  verifyPassword} 

export function loginUser(email:string, password:string) {
  const user = findUserByEmail(email);

  if (!user || !verifyPassword(user, password)) {
    throw new Error("Credenciais inválidas");
  }

  return { token: user.token };
}

export function verifyToken(token) {
  const user = users.find((user) => user.token === token);

  if (!user) {
    throw new Error("Token inválido");
  }

  return user;
}
