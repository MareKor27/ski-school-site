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

export function lightenColor(hex: string, percent: number): string {
  // Upewnij się, że hex jest poprawny (np. "#ff9900" lub "ff9900")
  if (!hex) return "";
  hex = hex.replace(/^#/, "");

  if (hex.length !== 6) {
    throw new Error("Invalid HEX color.");
  }

  // Konwersja HEX -> RGB
  let r = parseInt(hex.slice(0, 2), 16);
  let g = parseInt(hex.slice(2, 4), 16);
  let b = parseInt(hex.slice(4, 6), 16);

  // Rozjaśnianie RGB
  r = Math.min(255, Math.floor(r + (255 - r) * (percent / 100)));
  g = Math.min(255, Math.floor(g + (255 - g) * (percent / 100)));
  b = Math.min(255, Math.floor(b + (255 - b) * (percent / 100)));

  // RGB -> HEX
  const toHex = (n: number) => n.toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
