export type AuditLog = {
  id: number | null | undefined;
  action: string;
  method: string;
  path: string;
  userId: any | null;
  body: any;
  response: any;
  isError: boolean;
  message: string | null;
  createdAt: Date;
};
