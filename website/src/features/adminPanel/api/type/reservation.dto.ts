// export const PurchasedTime = {
//   PurchasedOneHour: "ONEHOUR",
//   PurchasedTwoHour: "TWOHOUR",
//   PurchasedThreeHour: "THREEHOUR",
// } as const;

import { AppointmentDto } from "./appointment.dto";
import { UserDto } from "./user.dto";

// export type PurchasedTime = (typeof PurchasedTime)[keyof typeof PurchasedTime];
// export const purchasedTime = Object.values(PurchasedTime);

export const ChosenEquipment = {
  OwnEquipment: "WŁASNY",
  RentedEquipment: "WYPOŻYCZONY",
} as const;

export type ChosenEquipment =
  (typeof ChosenEquipment)[keyof typeof ChosenEquipment];
export const chosenEquipment = Object.values(ChosenEquipment);

export const ReservationAdvancement = {
  P0: "Początkujący",
  P1: "Podstawowy",
  P2: "Średniozawansowany",
  P3: "Zaawansowany",
  P4: "Ekspert",
} as const;

export type ReservationAdvancement =
  (typeof ReservationAdvancement)[keyof typeof ReservationAdvancement];
export const reservationAdvancement = Object.values(ReservationAdvancement);

export type ReservationDto = {
  id: number;

  // client: UserDto | EmptyDto;

  fullName: string;

  email: string;

  phoneNumber: string;

  purchasedTime: number;

  participants: number;

  ageOfParticipants: string;

  advancement: ReservationAdvancement;

  chosenEquipment: ChosenEquipment;

  additionalComments: string;

  insuranceInformation: string;

  appointments: AppointmentDto[];
};

export type CreateReservationDto = {
  fullName: string;

  email: string;

  phoneNumber: string;

  purchasedTime: number;

  participants: number;

  ageOfParticipants: string;

  advancement: string;

  chosenEquipment: ChosenEquipment;

  additionalComments: string;

  insuranceInformation: string;
};

//Create Form Reservation
export type ReservationType = {
  fullName: string;
  email: string;
  phoneNumber: string;
  purchasedTime: number;
  participants: number;
  ageOfParticipants: string;
  advancement: string;
  chosenEquipment: ChosenEquipment;
  additionalComments: string;
  insuranceInformation: string;
  instructorId: string;
};
