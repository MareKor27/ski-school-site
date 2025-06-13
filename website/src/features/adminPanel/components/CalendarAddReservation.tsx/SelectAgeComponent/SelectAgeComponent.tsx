import Select, { StylesConfig } from "react-select";
import { Controller, Control } from "react-hook-form";

type OptionType = {
  value: number;
  label: string;
};

const ageOptions = Array.from({ length: 96 }, (_, i) => {
  const value = i + 5;
  return {
    value,
    label: `${value} lat`,
  };
});

type AgeMultiSelectProps = {
  control: Control<any>;
  name: string;
};

const AgeMultiSelect = ({ control, name }: AgeMultiSelectProps) => {
  return (
    <Controller
      name={name}
      control={control}
      // defaultValue=""
      rules={{
        required: "Proszę podać wiek osób",
      }}
      render={({ field }) => (
        <Select
          closeMenuOnSelect={false}
          isMulti
          options={ageOptions}
          placeholder="Wybierz wiek uczestników"
          styles={customStyles}
          value={
            field.value
              ? ageOptions.filter((option) =>
                  field.value.split(",").includes(option.value.toString())
                )
              : []
          }
          onChange={(selected) => {
            const selectedString = selected
              .map((opt) => opt.value)
              .sort((a, b) => a - b) // ⬅️ sortujemy liczby rosnąco
              .join(",");
            field.onChange(selectedString);
          }}
        />
      )}
    />
  );
};

export default AgeMultiSelect;

const customStyles: StylesConfig<OptionType, true> = {
  control: (base, state) => ({
    ...base,
    backgroundColor:
      "hsl(from var(--main-color-3) calc(h + 0) calc(s + 0) calc(l + 0) / 0.5)",
    border: "1px solid var(--main-color-3)",
    borderRadius: "5px",
    padding: "4px",
    color: "#fff",
    fontSize: "1.2em",
    marginTop: "5px",
    boxShadow: state.isFocused ? "0 0 0 1px var(--main-color-3)" : "none",
    "&:hover": {
      borderColor: "var(--main-color-3)",
    },
  }),
  menu: (base) => ({
    ...base,
    backgroundColor:
      "hsl(from var(--main-color-3) calc(h + 0) calc(s + 0) calc(l + 0) / 0.9)",
    color: "#fff",
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused
      ? "hsl(from var(--main-color-3) calc(h + 0) calc(s + 0) calc(l + 0) / 1)"
      : "transparent",
    color: "#fff",
    cursor: "pointer",
  }),
  multiValue: (base) => ({
    ...base,
    backgroundColor: "var(--main-color-3)",
    color: "#fff",
    borderRadius: "3px",
  }),
  multiValueLabel: (base) => ({
    ...base,
    color: "#fff",
  }),
  multiValueRemove: (base) => ({
    ...base,
    color: "#fff",
    ":hover": {
      backgroundColor: "#fff",
      color: "var(--main-color-3)",
    },
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#fff",
    ":hover": {
      color: "#fff",
    },
  }),
  placeholder: (base) => ({
    ...base,
    color: "#eee",
  }),
  input: (base) => ({
    ...base,
    color: "#fff",
  }),
};
