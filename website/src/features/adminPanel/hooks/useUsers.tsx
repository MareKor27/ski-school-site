import { useEffect, useState } from "react";
import { UserDto } from "../api/type/user.dto";
import { readUsers } from "../api/AdminUserApi";

export const useUsers = () => {
  const [users, setUsers] = useState<UserDto[]>([]);

  const fetchResponse = async () => {
    const response = await readUsers();
    setUsers(response.content);
  };

  useEffect(() => {
    fetchResponse();
  }, []);

  return [users, fetchResponse] as const;
};
