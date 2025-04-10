import { useParams } from "react-router-dom";
import { useUserInputData } from "~/features/adminPanel/hooks/user/useUserInputData";
import { useUsers } from "~/features/adminPanel/hooks/user/useUsers";
import useStyles from "~/hooks/useStyle";
import style from "./UserCreateEditForm.module.scss";
const S = useStyles(style);
export function UserCreateEditForm() {
  const params = useParams();
  const userId = params.id ? Number(params.id) : null;

  const { fetchResponse } = useUsers();
  const { register, handleSubmit, errors, createOrUpdateUser, sending } =
    useUserInputData(userId, fetchResponse);

  return (
    <form onSubmit={handleSubmit(createOrUpdateUser)}>
      <label htmlFor="name">Imie i Nazwisko:</label>
      <input
        type="text"
        {...register("name", {
          required: "Imie i nazwisko jest wymagane",
          minLength: {
            value: 6,
            message: "Pole musi mieć conajmneij 6 znaków",
          },
        })}
      />
      <div className={S(`errors`)}>{errors.name && errors.name.message}</div>
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        {...register("email", {
          required: "Email jest wymagane",
          minLength: {
            value: 6,
            message: "Pole musi mieć conajmneij 6 znaków",
          },
        })}
      />
      <div className={S(`errors`)}>
        {errors.email && errors.email.message}
        {errors.root && errors.root.message}
      </div>

      <input
        type="submit"
        value={sending ? "Przetwarzanie" : userId ? "Aktualizuj" : "Stwórz"}
        disabled={sending}
      />
    </form>
  );
}

// PRZERZUCAM TYP USER ID JEŚLI number to edycja jeśli null to tworzenie noweg
