// model/User.js
export const users = [
    {
      id: 1,
      email: "admin@example.com",
      password: "password123", // Em uma aplicação real, essa senha deve ser hashada
      token: "sample-token-123", // Em uma aplicação real, este token será gerado dinamicamente
    },
    // Adicione mais usuários conforme necessário
  ];
  
  export function findUserByEmail(email) {
    return users.find((user) => user.email === email);
  }
  
  export function verifyPassword(user, password) {
    return user.password === password;
  }
  