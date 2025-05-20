import { create } from "zustand";
import { AppointmentDto } from "../../api/type/appointment.dto";
import { AppointmentTile } from "../calendar/useCalendar";
export type ReservationStoreType = {
  appointmentsTile: AppointmentTile[] | null;
  setAppointmentsTile: (data: AppointmentTile[]) => void;
  clearReservationData: () => void;
};

export const useReservationStore = create<ReservationStoreType>((set) => ({
  appointmentsTile: JSON.parse(localStorage.getItem("appointmentsTile")!),

  setAppointmentsTile: (appointmentsTile: AppointmentTile[]) => {
    set({ appointmentsTile }),
      localStorage.setItem(
        "appointmentsTile",
        JSON.stringify(appointmentsTile)
      );
  },
  clearReservationData: () => {
    set({ appointmentsTile: null }),
      localStorage.removeItem("appointmentsTile");
  },
}));

///PROPABLY DEL
