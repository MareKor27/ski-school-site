import { create } from "zustand";
import { AppointmentDto } from "../../api/type/appointment.dto";
export type ReservationStoreType = {
  appointmentsData: AppointmentDto[] | null;
  setReservationData: (data: AppointmentDto[]) => void;
  clearReservationData: () => void;
};

export const useReservationStore = create<ReservationStoreType>((set) => ({
  appointmentsData: JSON.parse(localStorage.getItem("appointmentsData")!),

  setReservationData: (appointmentsData: AppointmentDto[]) => {
    set({ appointmentsData }),
      localStorage.setItem(
        "appointmentsData",
        JSON.stringify(appointmentsData)
      );
  },
  clearReservationData: () => {
    set({ appointmentsData: null }),
      localStorage.removeItem("appointmentsData");
  },
}));
