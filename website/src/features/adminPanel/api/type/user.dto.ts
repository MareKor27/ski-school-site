export type UserDto = {
  id: number;

  name: string;

  email: string;

  role: "INSTRUCTOR" | "ADMIN";

  iconColor: string;

  status: string;
};

export type CreateUserDto = {
  name: string;

  email: string;

  password: string;

  role: "INSTRUCTOR" | "ADMIN";

  iconColor: string;

  status: string;
};

export type UpdateUserDto = {
  name: string;

  email: string;

  role: "INSTRUCTOR" | "ADMIN";

  iconColor: string;

  status: string;
};

export type UserForm = {
  name: string;

  email: string;

  iconColor: string;
};
