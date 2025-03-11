import axios from "axios";
import { CollectionResponseDto } from "./type/collectionResponse.dto";
import { CreateUserDto, UserDto } from "./type/user.dto";
import { ResponseDto } from "./type/response.dto";
import { buildResponseDto } from "./type/response.dto.mapper";
import { useSessionStore } from "~/features/authorization/store/useSessionStore";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

api.interceptors.request.use(
  (config) => {
    const token = useSessionStore.getState().token;
    console.log("t", token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log("c", config);
    return config;
  },
  (error) => Promise.reject(error)
);

//react query i walidacja kodu

export async function readUsers(): Promise<CollectionResponseDto<UserDto>> {
  const response = await api.get<CollectionResponseDto<UserDto>>("/users");
  return response.data;
}

export async function createUser(
  user: CreateUserDto
): Promise<ResponseDto<CreateUserDto>> {
  console.log(user);
  const response = await api.post<ResponseDto<CreateUserDto>>("/users", user);
  return response.data;
}

export async function updateUser(
  id: number,
  user: Partial<CreateUserDto>
): Promise<ResponseDto<CreateUserDto>> {
  const response = await api.patch<ResponseDto<CreateUserDto>>(
    `/users${"/" + id}`,
    user
  );
  return response.data;
}

export async function deleteUser(id: number): Promise<ResponseDto<UserDto>> {
  const response = await api.delete<ResponseDto<UserDto>>(`/users${"/" + id}`);
  return response.data;
}
