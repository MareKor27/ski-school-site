import axios from "axios";
import { UserDto } from "~/features/adminPanel/api/type/user.dto";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

//react query i walidacja kodu

export async function login(): Promise<UserDto> {
  //   const response = await api.get<CollectionResponseDto<UserDto>>("/users");
  //   return response.data;
  return;
}
