export type UserDto = {
  id: number;

  name: string;

  email: string;

  role: "INSTRUCTOR" | "ADMIN";
};

export type CreateUserDto = {
  name: string;

  email: string;

  password: string;

  role: "INSTRUCTOR" | "ADMIN";
};

export type UpdateUserDto = {
  name: string;

  email: string;

  role: "INSTRUCTOR" | "ADMIN";
};
