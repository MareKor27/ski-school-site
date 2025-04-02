import { useParams } from "react-router-dom";
import { useUserInputData } from "~/features/adminPanel/hooks/user/useUserInputData";
import { useUsers } from "~/features/adminPanel/hooks/user/useUsers";
import { handleOnSubmit } from "~/features/adminPanel/services/CompanyStuffServices";

export function UserCreateEditForm() {
  const params = useParams();
  const userId = params.id ? Number(params.id) : null;

  const { fetchResponse } = useUsers();
  const { userForm, handleInputChange } = useUserInputData(userId);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleOnSubmit(userId, userForm, fetchResponse);
      }}
    >
      <label htmlFor="name">Imie i Nazwisko:</label>
      <input
        type="text"
        id="name"
        name="name"
        size={50}
        onChange={handleInputChange}
        value={userForm.name}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        size={50}
        onChange={handleInputChange}
        value={userForm.email}
      />

      <input type="submit" value={userId ? "Aktualizuj" : "Stwórz"} />
    </form>
  );
}

// PRZERZUCAM TYP USER ID JEŚLI number to edycja jeśli null to tworzenie noweg
