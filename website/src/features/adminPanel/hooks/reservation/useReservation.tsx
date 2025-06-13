import { useEffect, useMemo, useState } from "react";
import { ReservationDto } from "../../api/type/reservation.dto";
import { readReservations } from "../../api/AdminReservationApi";
import { deleteReservations } from "../../api/AdminReservationApi";
import { RequestOptions } from "../../api/type/paginationOptions.dto";

export const useReservation = () => {
  const [reservations, setReservations] = useState<ReservationDto[]>([]);
  const [instructorId, setInstructorId] = useState<number | null>(null);
  const [paginationRows, setPaginationRows] = useState<number>(10);
  const [paginationPage, setPaginationPage] = useState<number>(1);
  const [totalRows, setTotalRows] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);

  const requestOptions = useMemo<RequestOptions>(() => {
    const filters: string[] = [];

    if (instructorId) {
      filters.push(`instructorId=${instructorId}`);
    }
    return {
      page: paginationPage,
      size: paginationRows,
      filter: filters,
      sort: ["appointmentDate"],
    };
  }, [paginationRows, paginationPage, instructorId]);

  const handleDeleteReservation = async (id: number) => {
    const isConfirmed = window.confirm(
      "Czy na pewno chcesz usunąć tą rezerwacje?"
    );
    if (isConfirmed) {
      await deleteReservations(id);
    }
    fetchReservationResponse(requestOptions); //, paginationRows, paginationPage);
  };

  function formatPhone(phone: string) {
    const parts = phone.match(/.{1,3}/g);
    return parts!.join(" ");
  }

  function readData() {
    fetchReservationResponse(requestOptions);
  }

  function paginationInformation(): string {
    const firstReserwation = (paginationPage - 1) * paginationRows + 1;

    const lastReservation =
      firstReserwation > paginationRows
        ? totalRows
        : totalRows < paginationRows
        ? totalRows
        : paginationRows;

    return (
      firstReserwation +
      " do " +
      lastReservation +
      " z " +
      totalRows +
      " rezerwacji  "
    );
  }

  // refresh
  const fetchReservationResponse = async (requestOptions: RequestOptions) => {
    //console.log(paginationRows, paginationPage);
    const response = await readReservations(requestOptions);
    console.log(response.content);
    setReservations(response.content);
    setTotalRows(response.pagination.totalRows);
    setLastPage(response.pagination.lastPage);
  };

  useEffect(() => {
    fetchReservationResponse(requestOptions);
  }, []);
  //  TODO: musi siępo czyms odświeżać tylko po czym?

  return {
    reservations,
    handleDeleteReservation,
    formatPhone,
    readData,
    setInstructorId,
    instructorId,
    setPaginationRows,
    totalRows,
    lastPage,
    setPaginationPage,
    paginationInformation,
  } as const;
};
