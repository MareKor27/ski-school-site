import { deleteUser, updateUser } from "../api/AdminUserApi";

export const deleteUserInList = async (
  id: number,
  fetchResponse: () => void
) => {
  const isConfirmed = window.confirm(
    "Czy na pewno chcesz usunąć tego użytkownika?"
  );
  if (isConfirmed) {
    await deleteUser(id);
  }
  fetchResponse();
};

// export async function createInstructor(
//   userData: CreateUserDto
// ): Promise<ResponseDto<CreateUserDto>> {
//   const response = await register(userData.name, userData.email);
//   return response;
// }

// export async function editInstructor(userData: UserDto) {
//   const updatedUser: UpdateUserDto = {
//     name: userData.name,
//     email: userData.email,
//     role: userData.role,
//   };
//   const response = await updateUser(userData.id, updatedUser);
//   return response;
// }

// export const toggleTab = (tabIndex: ListMenuType) => {
//   setActiveView(tabIndex);
//   setUserData({
//     id: 1,
//     name: "",
//     email: "",
//     role: "INSTRUCTOR",
//   });
// };

// export const fetchResponse = async () => {
//   try {
//     const response = await readUsers();
//     setUsers(response.content);
//   } catch (error) {
//     console.error("Error fetching users:", error);
//   }
// };

// const formatPhoneNumber = (value: string): string => {
//   // Usuwamy wszystko poza cyframi i "+"
//   const sanitizedValue = value.replace(/[^\d+]/g, "");

//   // Jeśli numer zaczyna się od "+", przetwarzamy prefiks
//   if (sanitizedValue.startsWith("+")) {
//     const withoutPlus = sanitizedValue.slice(1); // Usuwamy "+"
//     const prefix = withoutPlus.slice(0, 2); // Pobieramy pierwsze 2 cyfry po "+"
//     const rest = withoutPlus.slice(2); // Reszta po prefiksie
//     const parts = rest.match(/.{1,3}/g) || []; // Grupujemy w bloki po 3 cyfry
//     return `+${prefix} ${parts.join(" ")}`.trim(); // Formatowanie z "+" i spacjami
//   }

//   // Jeśli brak "+", grupujemy od początku co 3 cyfry
//   const defaultPrefix = "+48";
//   const parts = sanitizedValue.match(/.{1,3}/g) || []; // Grupujemy od początku
//   return `${defaultPrefix} ${parts.join(" ")}`.trim();
// };

// export const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   const { name, value } = e.target;
//   setUserData((prevState) => ({
//     ...prevState,
//     [name]: value,
//   }));
// };

// export const handleShowEditUser = (user: UserDto) => {
//   setActiveView("EDIT");
//   setUserData({
//     id: user.id,
//     name: user.name,
//     email: user.email,
//     role: user.role,
//   });
// };

// export const handleCreateUser = async (event: React.FormEvent) => {
//   event.preventDefault();
//   try {
//     const newUser: CreateUserDto = {
//       name: userData.name,
//       email: userData.email,
//       password: passwordGeneration(),
//       role: "INSTRUCTOR", //???????
//     };
//     const response = await createUser(newUser);
//     console.log("User Created:", response.content);
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       console.error("Error creating user:");
//       const errors = JSON.parse(error.request.response);
//       console.error(errors.message);
//     }
//   }
//   setActiveView("LIST");
//   fetchResponse();
// };

// export const handleDeleteUser = async (id: number) => {
//   const isConfirmed = window.confirm(
//     "Czy na pewno chcesz usunąć tego użytkownika?"
//   );
//   if (isConfirmed) {
//     try {
//       const response = await deleteUser(id);
//     } catch (error) {
//       console.error("Error fetching users:", error);
//     }
//   }
//   setActiveView("LIST");
//   fetchResponse();
// };

// export const handleEditUser = async (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//   try {
//     const updatedUser: UpdateUserDto = {
//       name: userData.name,
//       email: userData.email,
//       role: userData.role,
//     };
//     const response = await updateUser(userData.id, updatedUser);
//     console.log("User Updated:", response.content);
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       console.error("Error updating user:");
//       const errors = JSON.parse(error.request.response);
//       console.error(errors.message);
//     }
//   }
//   setActiveView("LIST");
//   fetchResponse();
// };
