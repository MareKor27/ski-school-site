export type RegistretionType = {
  email: string;
  password: string;
};

export type FormErrorType<T extends Record<string, unknown>> = {
  field: keyof T | "root";
  message: string;
};
