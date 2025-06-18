import { useEffect, useMemo, useState } from "react";
import { ReservationDto } from "../../api/type/reservation.dto";
import {
  readReservations,
  setReservationStatus,
} from "../../api/AdminReservationApi";
import { deleteReservations } from "../../api/AdminReservationApi";
import { RequestOptions } from "../../api/type/paginationOptions.dto";

export const useReservation = () => {
  const [reservations, setReservations] = useState<ReservationDto[]>([]);
  const [instructorId, setInstructorId] = useState<number | null>(null);
  const [paginationRows, setPaginationRows] = useState<number>(10);
  const [paginationPage, setPaginationPage] = useState<number>(1);
  // const [pagination, setPagination] = useState<{ page: number; rows: number }>({
  //   page: 1,
  //   rows: 10,
  // });
  const [totalRows, setTotalRows] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);
  const [openAdditionalConntent, setOpenAdditionalConntent] = useState<
    number | null
  >(null);
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

  const toogleAdditionalConntent = (id: number): void => {
    setOpenAdditionalConntent((prev) => (prev == id ? null : id));
  };

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

  const handleReservationStatus = async (
    lessonStatus: string,
    reservationId: number
  ) => {
    const response = await setReservationStatus(lessonStatus, reservationId);
    console.log(response.content);
    console.log(lessonStatus, reservationId);
    readData();
  };

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
    setPaginationPage(1);
  }, [paginationRows]);

  useEffect(() => {
    fetchReservationResponse(requestOptions);
  }, [requestOptions]);

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
    openAdditionalConntent,
    toogleAdditionalConntent,
    handleReservationStatus,
  } as const;
};
