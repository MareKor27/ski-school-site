import { useEffect, useState } from "react";
import { UserDto } from "~/features/adminPanel/api/type/user.dto";
import { readUsers } from "~/features/adminPanel/api/AdminUserApi";

export const useUsers = () => {
  const [users, setUsers] = useState<UserDto[]>([]);

  const fetchResponse = async () => {
    const response = await readUsers();
    setUsers(response.content);
  };

  useEffect(() => {
    fetchResponse();
  }, []);

  return { users, fetchResponse } as const;
};
