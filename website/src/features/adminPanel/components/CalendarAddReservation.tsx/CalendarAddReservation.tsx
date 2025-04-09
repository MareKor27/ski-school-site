import style from "./CalendarAddReservation.module.scss";
import useStyles from "~/hooks/useStyle";
import { AppointmentDto } from "../../api/type/appointment.dto";
import { useReservationStore } from "../../hooks/reservation/useReservationStore";

import { useLessonReservation } from "../../hooks/reservation/useLessonReservation";
const S = useStyles(style);
export function CalendarAddReservation() {
  const resevationStore = useReservationStore();

  const { addReservation, register, errors, handleSubmit, sending } =
    useLessonReservation();

  let appDate = "";
  resevationStore.appointmentsData &&
    resevationStore.appointmentsData.map((appointment: AppointmentDto) => {
      appDate = appointment.appointmentDate;
    });
  const date = new Date(appDate);

  return (
    <div className={S(`add-reservation`)}>
      <form
        onSubmit={handleSubmit((form) => {
          addReservation(form);
        })}
      >
        <label htmlFor="fullName">Imie i Nazwisko*:</label>
        <input
          type="text"
          {...register("fullName", {
            required: "Imie i nazwisko jest wymagane",
            minLength: {
              value: 6,
              message: "Pole musi mieć conajmneij 6 znaków",
            },
          })}
        />
        <div className={S(`errors`)}>
          {errors.fullName && errors.fullName.message}
        </div>
        <label htmlFor="email">Adres Email*:</label>
        <input
          type="email"
          {...register("email", {
            required: "Adres email jest wymagane",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Nieprawidłowy email",
            },
          })}
        />
        <div className={S(`errors`)}>
          {errors.email && errors.email.message}
        </div>
        <label htmlFor="phoneNumber">Numer telefonu*:</label>
        <input
          type="number"
          {...register("phoneNumber", {
            required: "Numer telefonu jest wymagany",
            pattern: {
              value: /^[0-9]{9}$/,
              message: "Numer telefonu musi składać się z 9 cyfr",
            },
          })}
        />
        <div className={S(`errors`)}>
          {errors.phoneNumber && errors.phoneNumber.message}
        </div>
        <label htmlFor="participants">Liczba osób*:</label>
        <input
          type="number"
          {...register("participants", {
            valueAsNumber: true,
            required: "Proszę podać liczbę osób",
          })}
        />
        <div className={S(`errors`)}>
          {errors.participants && errors.participants.message}
        </div>
        <label htmlFor="ageOfParticipants">Wiek osób*:</label>
        <input
          type="text"
          {...register("ageOfParticipants", {
            required: "Proszę podać wiek osób",
          })}
          placeholder="Słownie lub liczbowo"
        />
        <div className={S(`errors`)}>
          {errors.ageOfParticipants && errors.ageOfParticipants.message}
        </div>
        <label htmlFor="advancement">Poziom zawansowania*:</label>
        <input
          type="text"
          {...register("advancement", {
            required: "Proszę określić poziom zawansowania",
            minLength: {
              value: 6,
              message: "Proszę wpisać poziom zawansowania",
            },
          })}
        />
        <div className={S(`errors`)}>
          {errors.advancement && errors.advancement.message}
        </div>
        <label htmlFor="appointmentId">Wybór instruktora:</label>
        <select
          {...register("appointmentId", {
            required: "Proszę wybrać instruktora",
          })}
          // onChange={(e) => {
          //   console.log(e.target.value);
          //   console.log(Number(e.target.value));
          //   setAppointmentId(Number(e.target.value));
          // }}
        >
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
        <div className={S(`errors`)}>
          {errors.appointmentId && errors.appointmentId.message}
        </div>
        <label htmlFor="equipment">Sprzęt</label>
        <div className={S(`equipment-choice`)}>
          <input
            type="radio"
            value="WŁASNY"
            {...register("chosenEquipment", {
              required: "Proszę określić",
            })}
          />
          <label htmlFor="contactChoice1">Swój</label>

          <input
            type="radio"
            value="WYPOŻYCZONY"
            {...register("chosenEquipment", {
              required: "Proszę określić",
            })}
          />
          <label htmlFor="contactChoice2">Wypożyczony</label>
        </div>
        <div className={S(`errors`)}>
          {errors.chosenEquipment && errors.chosenEquipment.message}
        </div>
        <label htmlFor="additionalComments">Dodatkowe uwagi:</label>
        <input type="text" {...register("additionalComments")} />
        <div className={S(`errors`)}></div>
        <label htmlFor="insuranceInformation">
          Informacje o ubezpieczeniu:
        </label>
        <input type="text" {...register("insuranceInformation")} />
        <div className={S(`errors`)}></div>
        {/* <Link to={Paths.ADMIN.CALENDAR.absolute}> */}
        <input
          type="submit"
          value={sending ? "Przetwarzanie" : "Zarezerwuj"}
          disabled={sending}
        />
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
