export type UserDto = {
  id: number;

  name: string;

  email: string;
};

export type CreateUserDto = {
  name: string;

  email: string;

  role: "INSTRUCTOR" | "ADMIN";
};
