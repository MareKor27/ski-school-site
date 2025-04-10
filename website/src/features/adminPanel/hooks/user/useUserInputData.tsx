import { useCallback, useEffect, useState } from "react";
import { UserForm } from "../../api/type/user.dto";
import { readUser, updateUser } from "../../api/AdminUserApi";
import { useForm } from "react-hook-form";
import { createUser } from "../../api/AdminAuthApi";
import { useNavigate } from "react-router-dom";
import { Paths } from "~/features/app/constants/Paths";
import { mapApiErrorToFormErrors } from "~/features/authorization/services/ErrorServices";

export const useUserInputData = (
  userId: number | null,
  fetchResponse: () => void
) => {
  const navigate = useNavigate();
  const [sending, setSending] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    setError,
  } = useForm<UserForm>({
    mode: "onSubmit",
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const createOrUpdateUser = useCallback(
    async (userForm: UserForm) => {
      setSending(true);
      let response;
      try {
        if (userId) {
          response = await updateUser(userId, {
            name: userForm.name,
            email: userForm.email,
          });
        } else {
          response = await createUser(userForm.name, userForm.email);
        }
      } catch (error: any) {
        const mappedErrors = mapApiErrorToFormErrors<UserForm>(error, [
          "name",
          "email",
        ]);
        const result = Object.values(mappedErrors);
        result.forEach((element) => {
          setError(element.field, { message: element.message });
        });
      }
      setSending(false);
      console.log(response);
      if (!response) return;

      fetchResponse();
      navigate(Paths.ADMIN.STAFF.INDEX.absolute);
    },
    [userId]
  );

  const fetchUser = async (userId: number) => {
    const response = await readUser(userId);
    setValue("name", response.content.name);
    setValue("email", response.content.email);
  };

  useEffect(() => {
    if (userId) {
      fetchUser(userId);
    } else {
      setValue("name", "");
      setValue("email", "");
    }
  }, [userId]);

  return {
    errors,
    register,
    handleSubmit,
    createOrUpdateUser,
    sending,
  } as const;
};
