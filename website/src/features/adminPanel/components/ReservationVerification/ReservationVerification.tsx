import useStyles from "~/hooks/useStyle";
import style from "./ReservationVerification.module.scss";
import { Paths } from "~/features/app/constants/Paths";
import { Link } from "react-router-dom";
const S = useStyles(style);

const rezerwacja = true;

const ReservationVerification = () => {
  return (
    <div className={S(`summary-positioning`)}>
      <div className={S(`summary-wrapper`)}>
        <div className={S(`section-title`)}>
          <h1>{rezerwacja ? "Rezerwacja potwierdzona!" : "Link wygasł"}</h1>
        </div>
        <div className={S(`summary-info`)}>
          <h2>Numer rezerwacji: #[350]</h2>
          <p>Zapraszamy na Górkę Szcześliwicką dnia [10.7.2025]</p>
          <p>O godzinie: 10:00</p>
          <i>+ dodatkowe informacje +</i>
          <p></p>
          <Link to={Paths.INDEX.absolute}> Wróć na Stronę Główną</Link>
        </div>
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
