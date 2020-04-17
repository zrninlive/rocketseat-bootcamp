import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: "Christian Oliveira",
    email: "christian.soliveira@outlook.com",
    password: "123456",
    techs: [
      "NodeJs",
      "React",
      "React Native",
      {
        title: "Javascript",
        experience: 1000,
      },
    ],
  });

  return response.json({ user });
}
