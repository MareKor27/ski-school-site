import { CreateUserDto } from "~/features/adminPanel/api/type/user.dto";

import { useState } from "react";
import { createUser } from "~/features/adminPanel/api/AdminPanelApi";
import axios from "axios";

type FormCreateEditType = {
  formData: CreateUserDto;
  // handleOnSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: "Edit" | "Create";
};

export function FormCreateEdit({
  formData,
  // handleOnSubmit,
  handleInputChange,
  type,
}: FormCreateEditType) {
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await createUser(formData);
      console.log("User Created:", response.content);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error creating user:");
        const errors = JSON.parse(error.request.response);
        console.error(errors.message);
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
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
