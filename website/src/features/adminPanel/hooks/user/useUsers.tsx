import { useEffect, useState } from "react";
import { UserDto } from "~/features/adminPanel/api/type/user.dto";
import { readUsers } from "~/features/adminPanel/api/AdminUserApi";

export const useUsers = () => {
  const [users, setUsers] = useState<UserDto[]>([]);

  const fetchResponse = async () => {
    const response = await readUsers();
    setUsers(response.content);
  };

  // async function returnUser(id: number): Promise<UserDto> {
  //   await fetchResponse();
  //   console.log(users);
  //   const user = users.find((user) => user.id == id);
  //   if (!user) {
  //     throw new Error(`User with id=${id} not found`);
  //   }
  //   return user;
  // }

  useEffect(() => {
    fetchResponse();
  }, []);

  return { users, fetchResponse } as const;
};
