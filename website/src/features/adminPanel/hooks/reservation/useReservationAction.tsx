import { deleteReservations } from "../../api/AdminReservationApi";

export const useReservationAction = (refreshView: () => void) => {
  const handleDeleteReservation = async (id: number) => {
    const isConfirmed = window.confirm(
      "Czy na pewno chcesz usunąć tąrezerwacje?"
    );
    if (isConfirmed) {
      await deleteReservations(id);
    }
    refreshView();
  };

  return { handleDeleteReservation } as const;
};
