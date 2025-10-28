import useStyles from "~/hooks/useStyle";
import style from "./ReservationVerification.module.scss";
import { Paths } from "~/features/app/constants/Paths";
import { Link, useParams } from "react-router-dom";
import { useReservationVerivication } from "../../hooks/reservation/useReservationVerivication";
import { useEffect, useState } from "react";
import { ReservationDto } from "../../api/type/reservation.dto";
const S = useStyles(style);

function dateToHours(dateString: string) {
  const date = new Date(dateString);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

const ReservationVerification = () => {
  const params = useParams();
  const [reservation, setReservation] = useState<ReservationDto | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyReservation = async () => {
      const token = String(params.token);
      try {
        const response = await useReservationVerivication(token);
        setReservation(response);
      } catch (e) {
        console.error("Verification failed:", e);
      } finally {
        setLoading(false);
      }
    };

    verifyReservation();
  }, [params.token]);

  if (loading) return <div>Ładowanie...</div>;

  return (
    <div className={S(`summary-positioning`)}>
      <div className={S(`summary-wrapper`)}>
        <div className={S(`section-title`)}>
          <h1>{reservation ? "Rezerwacja potwierdzona!" : "Link wygasł"}</h1>
        </div>
        {reservation && (
          <div className={S(`summary-info`)}>
            <h2>Numer rezerwacji: #{reservation?.id}</h2>
            <p>
              Dziękujemy za skorzystanie z naszych usług! <br />
              Zapraszamy serdecznie na
              <br /> Górkę Szcześliwicką dnia <br />
              <span>
                {" "}
                {reservation
                  ? reservation.appointments[0].appointmentDate.split("T")[0]
                  : ""}
              </span>
            </p>
            <p>
              O godzinie:{" "}
              {reservation
                ? dateToHours(reservation.appointments[0].appointmentDate)
                : ""}
            </p>
            <i>+ dodatkowe informacje +</i>
            <Link to={Paths.INDEX.absolute}>Wróć na Stronę Główną</Link>
          </div>
        )}
        {!reservation && (
          <div className={S(`summary-info`)}>
            <p>
              Twój link do rejestracji zajęć narciarstwa wygasł. Aby rozpocząć
              proces od nowa i zarezerwować lekcje, zarezerwuj lekcję jeszcze
              raz.
            </p>
            <Link to={Paths.INDEX.absolute}>Wróć na Stronę Główną</Link>
          </div>
        )}
        <div className={S(`summary-contact`)}>
          <p>W razie pytań lub problemów, skontaktuj się z nami:</p>
          <a href="tel:+">📞 [Numer telefonu]</a>
          <a href="mailto:">📧 [E-mail kontaktowy]</a>
        </div>
      </div>
    </div>
  );
};

export default ReservationVerification;
