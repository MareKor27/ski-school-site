import { deleteUser } from "../../api/AdminUserApi";
import { UserDto } from "../../api/type/user.dto";
import {
  createInstructor,
  editInstructor,
} from "../../services/CompanyStuffServices";

// export const useUserAction = (userData: UserDto, refreshView: () => void) => {
//   const handleCreateUser = async (event: React.FormEvent) => {
//     event.preventDefault();

//     await createInstructor(userData);
//     refreshView();
//   };

//   const handleEditUser = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     await editInstructor(userData);
//     refreshView();
//   };

//   const handleDeleteUser = async (id: number) => {
//     const isConfirmed = window.confirm(
//       "Czy na pewno chcesz usunąć tego użytkownika?"
//     );
//     if (isConfirmed) {
//       await deleteUser(id);
//     }
//     refreshView();
//   };

//   return [handleCreateUser, handleDeleteUser, handleEditUser] as const;
// };

//wywalenie event.preventDefault();
