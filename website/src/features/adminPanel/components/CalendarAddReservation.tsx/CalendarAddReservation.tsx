import { Paths } from "~/features/app/constants/Paths";
import style from "./CalendarAddReservation.module.scss";
import useStyles from "~/hooks/useStyle";
import { Link } from "react-router-dom";
import { AppointmentDto } from "../../api/type/appointment.dto";
import { useReservation } from "../../hooks/reservation/useReservation";
import { useReservationStore } from "../../hooks/reservation/useReservationStore";
const S = useStyles(style);
export function CalendarAddReservation() {
  const resevationStore = useReservationStore();

  const { addReservation, onChangeReservation, setAppointmentId } =
    useReservation();

  let appDate = "";
  resevationStore.appointmentsData &&
    resevationStore.appointmentsData.map((appointment: AppointmentDto) => {
      appDate = appointment.appointmentDate;
    });
  const date = new Date(appDate);
  return (
    <div className={S(`add-reservation`)}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addReservation();
          resevationStore.clearReservationData();
        }}
      >
        <label htmlFor="fullName">Imie i Nazwisko:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          size={60}
          onChange={onChangeReservation}
        />
        <label htmlFor="email">Adres Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          size={50}
          onChange={onChangeReservation}
        />
        <label htmlFor="phoneNumber">Numer telefonu:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          size={50}
          onChange={onChangeReservation}
        />
        <label htmlFor="participants">Liczba osób:</label>
        <input
          type="number"
          id="participants"
          name="participants"
          size={50}
          onChange={onChangeReservation}
        />
        <label htmlFor="ageOfParticipants">Wiek osób:</label>
        <input
          type="text"
          id="ageOfParticipants"
          name="ageOfParticipants"
          size={50}
          onChange={onChangeReservation}
        />
        <label htmlFor="advancement">Poziom</label>
        <input
          type="text"
          id="advancement"
          name="advancement"
          size={50}
          onChange={onChangeReservation}
        />
        <label htmlFor="skillLevel">Wybór instruktora</label>
        <select
          name="skillLevel"
          id="skillLevel"
          onChange={(e) => {
            setAppointmentId(e.target.value);
          }}
        >
          <option value="default">Wybierz instruktora</option>
          {resevationStore.appointmentsData?.map(
            (appointment: AppointmentDto) => {
              return (
                <option value={appointment.id} key={appointment.instructor.id}>
                  {appointment.instructor.name}
                </option>
              );
            }
          )}
        </select>
        <label htmlFor="equipment">Sprzęt</label>
        <div className={S(`equipment-choice`)}>
          <input
            type="radio"
            id="equipmentChoice1"
            name="chosenEquipment"
            value="WŁASNY"
            onChange={onChangeReservation}
          />
          <label htmlFor="contactChoice1">Swój</label>

          <input
            type="radio"
            id="equipmentChoice2"
            name="chosenEquipment"
            value="WYPOŻYCZONY"
            onChange={onChangeReservation}
          />
          <label htmlFor="contactChoice2">Wypożyczony</label>
        </div>
        <label htmlFor="additionalComments">Dodatkowe uwagi:</label>
        <input
          type="text"
          id="additionalComments"
          name="additionalComments"
          size={50}
          onChange={onChangeReservation}
        />
        <label htmlFor="insuranceInformation">
          Informacje o ubezpieczeniu:
        </label>
        <input
          type="text"
          id="insuranceInformation"
          name="insuranceInformation"
          size={50}
          onChange={onChangeReservation}
        />
        {/* <Link to={Paths.ADMIN.CALENDAR.absolute}> */}
        <input type="submit" value={"Zarezerwuj"} />
        {/* </Link> */}
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
        <div className={S(`date`)}>{date.toLocaleDateString("PL-pl")}</div>
        <div className={S(`day`)}>
          {date.toLocaleDateString("pl-PL", {
            weekday: "long",
            hour: "numeric",
            minute: "2-digit",
          })}
        </div>
      </div>
    </div>
  );
}
