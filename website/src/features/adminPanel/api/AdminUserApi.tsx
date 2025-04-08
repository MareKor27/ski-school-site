import axios from "axios";
import { CollectionResponseDto } from "./type/collectionResponse.dto";
import { CreateUserDto, UserDto } from "./type/user.dto";
import { ResponseDto } from "./type/response.dto";
import { useSessionStore } from "~/features/authorization/store/useSessionStore";
import { handleApiError } from "~/features/authorization/services/ErrorServices";

const api = axios.create({
  baseURL: "http://localhost:3000/users",
});

api.interceptors.request.use(
  (config) => {
    const token = useSessionStore.getState().token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

//react query i walidacja kodu

export async function readUsers(): Promise<CollectionResponseDto<UserDto>> {
  const response = await api.get<CollectionResponseDto<UserDto>>("/");
  return response.data;
}

export async function readUser(id: number): Promise<ResponseDto<UserDto>> {
  const response = await api.get<ResponseDto<UserDto>>(`${"/" + id}`);
  return response.data;
}

// export async function createUser(
//   user: CreateUserDto
// ): Promise<ResponseDto<CreateUserDto>> {
//   console.log(user);
//   const response = await api.post<ResponseDto<CreateUserDto>>("/", user);
//   return response.data;
// }

export async function updateUser(
  id: number,
  user: Partial<CreateUserDto>
): Promise<ResponseDto<CreateUserDto>> {
  try {
    const response = await api.patch<ResponseDto<CreateUserDto>>(
      `${"/" + id}`,
      user
    );
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

export async function deleteUser(id: number): Promise<ResponseDto<UserDto>> {
  const response = await api.delete<ResponseDto<UserDto>>(`${"/" + id}`);
  return response.data;
}
