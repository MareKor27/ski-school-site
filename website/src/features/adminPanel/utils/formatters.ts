import { AuditLog } from "../api/type/auditLog.dto";
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

export function formatToAuditDate(data: Date): string {
  return new Date(data).toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

export function formatToAuditPerDay(data: Date): string {
  return new Date(data).toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
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
export function accountStatus(status: string): string {
  switch (status) {
    case "CREATED":
      return "C";
    case "ACTIVE":
      return "A";
    case "PASSWORD_RESET":
      return "PR";
    case "INACTIVE":
      return "IA";
    default:
      return "???";
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

export function auditActionToDescription(audit: AuditLog): string {
  switch (audit.action) {
    case "AUTH_LOGIN_TO_SYSTEM":
      if (audit.isError) {
        return `Nieudane logowanie użytkownika ${audit.body?.email}`;
      }
      return `Logowanie użytkownika ${audit.body?.email}`;
    case "APPO_ADM_MODIFIES_USERS":
      return `Utworzenie lekcji ${formatToShortDate(audit.response?.appointmentDate)} ${audit.response?.id != audit.userId.id ? "" : "użytkownikowi " + audit.response?.instructorName} przez ${audit.userId.name}`;
    case "APPO_INS_MODIFIES":
      return `Utworzenie lekcji ${formatToShortDate(audit.response?.appointmentDate)} przez instruktora ${audit.response?.instructorName}`;
    case "APPO_BY_DAY":
      if (audit.body?.checked) {
        return `Zaznaczenie lekcji dnia ${formatToAuditPerDay(audit.body?.chosenDate)}  ${audit.response?.id == audit.userId.id ? "" : "dla " + audit.response?.instructorName} przez ${audit.userId.name}`;
      }
      return `Odznaczenie lekcji dnia ${formatToAuditPerDay(audit.body?.chosenDate)}  ${audit.response?.id == audit.userId.id ? "" : "dla " + audit.response?.instructorName} przez ${audit.userId.name}`;
    case "APPO_DELETE":
      if (audit.userId?.id == audit.response.instructorId) {
        return `Usunięcie lekcji ${formatToShortDate(audit.response?.appointmentDate)} przez instruktora ${
          audit.response?.instructorName
        }`;
      }
      return `Usunięcie lekcji ${formatToShortDate(audit.response?.appointmentDate)} instruktora ${audit.response?.instructorName} przez ${audit.userId?.name} `;
    case "USER_UPDATE":
      return `Aktualizacja użytkownika ${audit.response?.name} przez ${audit.userId.name}`;
    case "USER_DELETE":
      return `Usunięcie użytkownika ${audit.response?.content.name} przez ${audit.userId}`;

    case "REMOVE_EXPIRED_TOKENS":
      return `Usunięcie przeterminowanych tokenów ${audit.body?.reservationId}`;
    default:
      return "Nieznana akcja";
  }
}
