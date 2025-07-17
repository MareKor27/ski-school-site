import { useEffect, useMemo, useState } from "react";
import {
  FilterReservation,
  ReservationDto,
} from "../../api/type/reservation.dto";
import {
  readReservations,
  setReservationStatus,
} from "../../api/AdminReservationApi";
import { deleteReservations } from "../../api/AdminReservationApi";
import { RequestOptions } from "../../api/type/paginationOptions.dto";
import { useForm } from "react-hook-form";

export const useReservation = () => {
  const { register, handleSubmit, watch } = useForm<FilterReservation>({
    mode: "onSubmit",
    defaultValues: {
      instructorId: "",
      appointmentDate: "",
      reservationId: "",
    },
  });

  const [reservations, setReservations] = useState<ReservationDto[]>([]);

  const [paginationRows, setPaginationRows] = useState<number>(10);
  const [paginationPage, setPaginationPage] = useState<number>(1);
  const [filters, setFilters] = useState<string[]>([
    // "appointmentDate>=2025-06-07T00:00:00.000",
    // "appointmentDate<=2025-06-07T23:59:59.999",
  ]);

  const watchFilters = watch();

  const [totalRows, setTotalRows] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);
  const [openAdditionalConntent, setOpenAdditionalConntent] = useState<
    number | null
  >(null);

  const requestOptions = useMemo<RequestOptions>(() => {
    return {
      page: paginationPage,
      size: paginationRows,
      filter: filters,
      sort: ["appointmentDate"],
    };
  }, [paginationRows, paginationPage, filters]);

  function updateFilters(): string[] {
    const pad = (n: number, len = 2) => String(n).padStart(len, "0");

    function formatLocal(date: Date): string {
      const year = date.getFullYear();
      const month = pad(date.getMonth() + 1);
      const day = pad(date.getDate());
      const hours = pad(date.getHours());
      const minutes = pad(date.getMinutes());
      const seconds = pad(date.getSeconds());
      const ms = pad(date.getMilliseconds(), 3);
      return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${ms}`;
    }

    return Object.entries(watchFilters)
      .filter(
        ([_, value]) => value !== null && value !== "" && value !== undefined
      )
      .flatMap(([key, value]) => {
        if (key === "appointmentDate" && value) {
          const date = new Date(value);
          const start = new Date(date);
          start.setHours(0, 0, 0, 0);
          const end = new Date(date);
          end.setHours(23, 59, 59, 999);

          return [
            `appointmentDate>=${formatLocal(start)}`,
            `appointmentDate<=${formatLocal(end)}`,
          ];
        }

        return [`${key}=${value}`];
      });
  }

  function buttonFilters() {
    console.log(filters);
    setFilters(updateFilters());
  }

  // const buildRequestOptions = (formData: FilterReservation): RequestOptions => {
  //   const filters: string[] = Object.entries(formData)
  //     .filter(
  //       ([_, value]) => value !== null && value !== "" && value !== undefined
  //     )
  //     .map(([key, value]) => `${key}=${value}`);

  //   return {
  //     page: paginationPage,
  //     size: paginationRows,
  //     filter: filters,
  //     sort: ["appointmentDate"],
  //   };
  // };

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
    setPaginationRows,
    totalRows,
    lastPage,
    setPaginationPage,
    paginationInformation,
    openAdditionalConntent,
    toogleAdditionalConntent,
    handleReservationStatus,
    handleSubmit,
    register,
    buttonFilters,
  } as const;
};
