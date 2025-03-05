import axios from "axios";
import { CollectionResponseDto } from "./type/collectionResponse.dto";
import { UserDto } from "./type/user.dto";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

//react query i walidacja kodu

export async function readUsers(): Promise<CollectionResponseDto<UserDto>> {
  const response = await api.get<CollectionResponseDto<UserDto>>("/users");
  return response.data;
}
