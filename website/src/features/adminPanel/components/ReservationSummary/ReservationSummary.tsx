import useStyles from "~/hooks/useStyle";
import style from "./ReservationSummary.module.scss";
import { Paths } from "~/features/app/constants/Paths";
import { Link } from "react-router-dom";
const S = useStyles(style);

const ReservationSummary = () => {
  return (
    <div className={S(`summary-positioning`)}>
      <div className={S(`summary-wrapper`)}>
        <div className={S(`section-title`)}>
          <h1>Rezerwacja przyjęta!</h1>
        </div>
        <div className={S(`summary-info`)}>
          <h2>Dziękujemy za złożenie rezerwacji.</h2>

          <p>
            Wysłaliśmy do Ciebie wiadomość e-mail z linkiem potwierdzającym.
          </p>
          <p>
            <b>Sprawdź swoją skrzynkę mailową</b> 📩 i kliknij w link, aby
            potwierdzić rezerwację.
          </p>
          <p>
            <i>Nie widzisz maila?</i> 📩
            <i>
              Sprawdź folder SPAM, Oferty lub Inne — czasem wiadomość może tam
              trafić.
            </i>
          </p>
          <br />
          <h2>UWAGA !</h2>
          <p>
            Rezerwacja zostanie potwierdzona dopiero po kliknięciu
            <br /> w link z wiadomości.
            <br />
            <b> Masz na to 15 min. </b>
            po tym czasie zarezerwowany przez Ciebie termin będzie znów
            dostępny.
          </p>
          <Link to={Paths.INDEX.absolute}> Wróć na Stronę Główną</Link>
        </div>
        <div className={S(`summary-contact`)}>
          <p>W razie pytań lub problemów, skontaktuj się z nami:</p>
          <a href="mailto:">📧 [E-mail kontaktowy]</a>
          <a href="tel:+">📞 [Numer telefonu]</a>
        </div>
      </div>
    </div>
  );
};

export default ReservationSummary;
