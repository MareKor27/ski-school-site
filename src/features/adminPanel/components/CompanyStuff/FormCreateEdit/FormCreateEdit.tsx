import { UserFormType } from "~/features/adminPanel/components/CompanyStuff/CompanyStuff";

type FormCreateEditType = {
  formData: UserFormType;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  type: "Edit" | "Create";
};

export function FormCreateEdit({
  formData,
  handleInputChange,
  handleOnSubmit,
  type,
}: FormCreateEditType) {
  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="imieiNazwisko">Imie i Nazwisko:</label>
      <input
        type="text"
        id="imieiNazwisko"
        name="imieiNazwisko"
        size={50}
        onChange={handleInputChange}
        value={formData.imieiNazwisko}
      />
      <label htmlFor="tel">Numer telefonu:</label>
      <input
        type="text"
        id="tel"
        name="tel"
        placeholder="+48 123 456 789"
        pattern="^\+(\d{2})\s(\d{3})\s(\d{3})\s(\d{3})$|^(\d{9})$"
        title="Numer telefonu musi być w formacie: +XX XXX XXX XXX."
        onChange={handleInputChange}
        value={formData.tel}
      />
      <label htmlFor="info1">Informacja 1:</label>
      <input
        type="text"
        id="info1"
        name="info1"
        size={50}
        onChange={handleInputChange}
        value={formData.info1}
      />
      <label htmlFor="finfo2">Informacja 2:</label>
      <input
        type="text"
        id="finfo2"
        name="finfo2"
        size={50}
        onChange={handleInputChange}
        value={formData.info2}
      />
      <label htmlFor="finfo3">Informacja 3:</label>
      <input
        type="text"
        id="finfo3"
        name="finfo3"
        size={50}
        onChange={handleInputChange}
        value={formData.info3}
      />

      <input type="submit" value={type === "Edit" ? "Aktualizuj" : "Stwórz"} />
    </form>
  );
}
