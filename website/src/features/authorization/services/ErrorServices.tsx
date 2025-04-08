import {
  FormErrorType,
  RegistretionType,
} from "../api/type/authorization-type";

export type ErrorResponseDto = {
  statusCode: number;
  message: string;
  error: string;
  timestamp: Date;
  path: string | null;
  issues: { field: string; message: string }[];
};

export const handleApiError = (error: any): ErrorResponseDto => {
  if (!error.response) {
    // Handle network errors, CORS issues, timeouts, etc.
    return {
      statusCode: 0,
      message: "Network error or CORS issue occurred",
      error: "Network Error",
      timestamp: new Date(),
      path: null,
      issues: [],
    };
  }

  const { status, data } = error.response;

  return {
    statusCode: status,
    message: data?.message || "An unexpected error occurred",
    error: data?.error || "Unknown Error",
    timestamp: data?.timestamp || new Date(),
    path: data?.path || null,
    issues: data?.issues || [],
  };
};

export const mapApiErrorToFormErrors = <T extends Record<string, unknown>>(
  error: ErrorResponseDto,
  allowedFields: (keyof T)[]
): FormErrorType<T>[] => {
  if (error.issues.length > 0) {
    return error.issues.map((issue) => ({
      field: allowedFields.includes(issue.field) ? issue.field : "root",
      message: issue.message,
    }));
  }

  return [{ field: "root", message: error.message }];
};
