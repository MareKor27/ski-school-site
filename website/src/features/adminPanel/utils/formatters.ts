import { ChosenEquipment } from "../api/type/reservation.dto";

export function formatToLongDate(data: string): string {
  return new Date(data).toLocaleDateString("pl-PL", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

export function formatToShortDate(data: string): string {
  return new Date(data).toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

export function nameToInitials(fullName: string): string {
  const parts = fullName.split(" ");
  const initial = parts.map((name) => name.charAt(0).toUpperCase());
  return initial.join("");
}

export function formatEquipment(equipment: ChosenEquipment): string {
  switch (equipment) {
    case "WYPOŻYCZONY":
      return "Wypożyczony";
    case "WŁASNY":
      return "Własny";
  }
}

export function formatAdvancement(advancement: string): string {
  switch (advancement) {
    case "Początkujący":
      return "P0";
    case "Podstawowy":
      return "P1";
    case "Średniozawansowany":
      return "P2";
    case "Zaawansowany":
      return "P3";
    case "Ekspert":
      return "P4";
    default:
      return "brak";
  }
}

export function ageRangeStudents(ageTable: string): string {
  const table = ageTable.split(",");
  if (table.length == 1) return table[0];

  return table[0] + "-" + table[table.length - 1];
}
