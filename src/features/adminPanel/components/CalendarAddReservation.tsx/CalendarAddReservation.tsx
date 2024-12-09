import { Paths } from "~/features/app/constants/Paths";
import style from "./CalendarAddReservation.module.scss";
import useStyles from "~/hooks/useStyle";
import { Link } from "react-router-dom";
const S = useStyles(style);
export function CalendarAddReservation() {
  return (
    <div className={S(`add-reservation`)}>
      <form action="">
        <label htmlFor="firstAndSecoundName">Imie i Nazwisko:</label>
        <input
          type="text"
          id="firstAndSecoundName"
          name="firstAndSecoundName"
          size={50}
        />
        <label htmlFor="telNumber">Numer telefonu:</label>
        <input type="text" id="telNumber" name="telNumber" size={50} />
        <label htmlFor="email">Numer telefonu:</label>
        <input type="text" id="email" name="email" size={50} />
        <label htmlFor="groupSize">Liczba osób:</label>
        <input type="text" id="groupSize" name="groupSize" size={50} />
        <label htmlFor="membersAge">Wiek osób:</label>
        <input type="text" id="membersAge" name="membersAge" size={50} />
        <label htmlFor="skillLevel">Zawansowanie</label>
        <input type="text" id="skillLevel" name="skillLevel" size={50} />
        <label htmlFor="skillLevel">Wybór instruktora</label>
        <select name="skillLevel" id="skillLevel">
          <option value="default">Wybierz instruktora</option>
          <option value="instruktor1">Michał Jaśkiewicz</option>
          <option value="instruktor2">Instruktor 2</option>
          <option value="instruktor3">Instruktor 3</option>
          <option value="instruktor4">Instruktor 4</option>
        </select>
        <label htmlFor="equipment">Sprzęt</label>

        <div className={S(`equipment-choice`)}>
          <input
            type="radio"
            id="equipmentChoice1"
            name="equipment"
            value="Swój"
          />
          <label htmlFor="contactChoice1">Swój</label>

          <input
            type="radio"
            id="equipmentChoice2"
            name="equipment"
            value="Wypożyczony"
          />
          <label htmlFor="contactChoice2">Wypożyczony</label>
        </div>
        <label htmlFor="additionalComments">Dodatkowe uwagi:</label>
        <input
          type="text"
          id="additionalComments"
          name="additionalComments"
          size={50}
        />
        <label htmlFor="insurance">Informacje o ubezpieczeniu:</label>
        <input type="text" id="insurance" name="insurance" size={50} />
      </form>

      <div className={S(`infobox`)}>
        <div className={S(`weather`)}>
          <div>
            <img src="/images/weather/cloudy.png" />
            <div className={S(`temperature`)}>-3 °C</div>
          </div>
          <div>
            <img className={S(`wind`)} src="/images/weather/right-arrow.png" />
            <div className={S(`wind-speed`)}>13 m/s</div>
          </div>
        </div>
        <div className={S(`date`)}>16.11.2024</div>
        <div className={S(`day`)}>Sobota 11:00</div>
        <Link to={Paths.ADMIN.CALENDAR.absolute}>
          <input type="submit" value={"Zarezerwuj"} />
        </Link>
      </div>
    </div>
  );
}
