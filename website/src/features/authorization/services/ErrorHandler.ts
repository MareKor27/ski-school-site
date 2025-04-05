export const handleApiError = (error: any) => {
  if (!error.response) {
    // Handle network errors, CORS issues, timeouts, etc.
    return {
      statusCode: 0,
      message: "Network error or CORS issue occurred",
      error: "Network Error",
      timestamp: new Date(),
      path: "unknown",
      issues: [],
    };
  }

  const { status, data } = error.response;

  return {
    statusCode: status,
    message: data?.message || "An unexpected error occurred",
    error: data?.error || "Unknown Error",
    timestamp: data?.timestamp || new Date(),
    path: data?.path || "/?",
    issues: data?.issues || [],
  };
};
