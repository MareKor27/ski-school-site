import {
  CreateUserDto,
  UserDto,
} from "~/features/adminPanel/api/type/user.dto";

import { useState } from "react";
import { createUser } from "~/features/adminPanel/api/AdminPanelApi";

type FormCreateEditType = {
  formData: UserDto;
  handleOnSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: "Edit" | "Create";
};

export function FormCreateEdit({
  formData,
  handleOnSubmit,
  handleInputChange,
  type,
}: FormCreateEditType) {
  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="name">Imie i Nazwisko:</label>
      <input
        type="text"
        id="name"
        name="name"
        size={50}
        onChange={handleInputChange}
        value={formData.name}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        size={50}
        onChange={handleInputChange}
        value={formData.email}
      />

      <input type="submit" value={type === "Edit" ? "Aktualizuj" : "Stwórz"} />
    </form>
  );
}
