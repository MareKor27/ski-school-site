import { checkReservationToken } from "../../api/AdminReservationApi";

export const useReservationVerivication = async (token: string) => {
  const response = await checkReservationToken(token);
  const reservation = response.content;

  // wziąść ten token i znaleźć w bazie czy jest taki i czy jest kliknięty o podanym czasie

  // jesli jest to wziąść jego id i zmienić rezerwacje z oczekującą na zweryyfikowaną
  //jeśli to wszystko się uda to wyświetlamy krótkie podsumowanie z zaproszeniem i podziękowaniami
  // wysyłamy maila że potwierdziliśmy

  return { reservationId: reservation.id };
};
