import style from "./CalendarAddReservation.module.scss";
import errorStyle from "~/assets/styles/errorStyles.module.scss";
import useStyles from "~/hooks/useStyle";
import { useLessonReservation } from "../../hooks/reservation/useLessonReservation";
import { reservationAdvancement } from "../../api/type/reservation.dto";
import AgeMultiSelect from "./AgeMultiSelect/AgeMultiSelect";
import { Info } from "lucide-react";
const S = useStyles(style);
const ES = useStyles(errorStyle);
export function CalendarAddReservation() {
  const {
    addReservation,
    register,
    errors,
    handleSubmit,
    sending,
    todayReservation,
    formatTitleDateReservation,
    instructorDataSet,
    lessonLenght,
    control,
  } = useLessonReservation();

  return (
    <div className={S(`form-app-wrapper`)}>
      <div className={S(`main-container`)}>
        <div className={S(`section-title`)}>
          <h1>Rezerwacja: {formatTitleDateReservation(todayReservation)}</h1>
          <h2>Wypełnij poniższy formularz, aby dokonać rezerwacji</h2>
        </div>
        {/* <div className={S(`weather-section`)}>
          <div className={S(`section-heading`)}>Aktualna pogoda</div>
          <div className={S(`weather-info`)}>
            <div className={S(`weather-property`)}>
              <div>
                <SunMedium size={25} strokeWidth={1} />
              </div>
              <p>Słonecznie</p>
            </div>
            <div className={S(`weather-property`)}>
              <div>21°C</div>
              <p>Temperatura</p>
            </div>
            <div className={S(`weather-property`)}>
              <div>
                <MoveUpRight size={25} strokeWidth={1} />
              </div>
              <p>Pł-Wsch.</p>
            </div>
            <div className={S(`weather-property`)}>
              <div>5 m/s</div>
              <p>Siła wiatru</p>
            </div>
          </div>
        </div> */}
        <form
          onSubmit={handleSubmit((form) => {
            // console.log(form);
            addReservation(form);
          })}
        >
          <div className={S(`form-container`)}>
            <div className={S(`personal-data`)}>
              <div className={S(`full-width section-heading`)}>
                Dane Osobowe
              </div>
              <div>
                <label
                  htmlFor="fullName"
                  onPointerEnter={() => {
                    console.log(errors.fullName);
                  }}
                >
                  Imie i Nazwisko*:
                </label>
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
                <div className={ES(`errors`)}>
                  {errors.fullName && errors.fullName.message}
                </div>
              </div>
              <div>
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
                <div className={ES(`errors`)}>
                  {errors.email && errors.email.message}
                </div>
              </div>
              <div>
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
                <div className={ES(`errors`)}>
                  {errors.phoneNumber && errors.phoneNumber.message}
                </div>
              </div>
            </div>
            {/* <hr /> */}
            <div className={S(`reservation-details`)}>
              <div className={S(`full-width section-heading`)}>
                Szczegóły rezerwacji
              </div>
              <div>
                <label htmlFor="participants">Liczba osób*:</label>
                <input
                  type="number"
                  {...register("participants", {
                    valueAsNumber: true,
                    required: "Proszę podać liczbę osób",
                  })}
                />
                <div className={ES(`errors`)}>
                  {errors.participants && errors.participants.message}
                </div>
              </div>
              <div>
                <label
                  htmlFor="ageOfParticipants"
                  title="Proszę wybrać wiek wszystkich uczestników albo tylko najmłodszą i najstarszą osobę z grupy"
                >
                  Wiek osób*: <Info size={15} strokeWidth={1.5} />
                </label>
                <AgeMultiSelect control={control} name="ageOfParticipants" />
                {/* <input
                  type="text"
                  {...register("ageOfParticipants", {
                    required: "Proszę podać wiek osób",
                  })}
                  placeholder="Słownie lub liczbowo"
                /> */}
                <div className={ES(`errors`)}>
                  {errors.ageOfParticipants && errors.ageOfParticipants.message}
                </div>
              </div>
              <div>
                <label htmlFor="advancement">Poziom zawansowania*:</label>

                <select
                  {...register("advancement", {
                    required: "Proszę określić poziom zawansowania",
                  })}
                >
                  {/* <option>Wybierz poziom</option> */}
                  {reservationAdvancement.map((text) => (
                    <option key={text}>{text}</option>
                  ))}
                </select>
                {/* <input
                  type="text"
                  {...register("advancement", {
                    required: "Proszę określić poziom zawansowania",
                    minLength: {
                      value: 6,
                      message: "Proszę wpisać poziom zawansowania",
                    },
                  })}
                /> */}
                <div className={ES(`errors`)}>
                  {errors.advancement && errors.advancement.message}
                </div>
              </div>
            </div>
            <div className={S(`instructor-option`)}>
              <div className={S(`instructor-picker`)}>
                <label htmlFor="appointmentId">Wybór instruktora:</label>

                <select
                  {...register("instructorId", {
                    required: "Proszę wybrać instruktora",
                  })}
                >
                  <option value="">Wybierz instruktora</option>
                  {instructorDataSet.map((element) => {
                    return (
                      <option
                        value={element.instructor.id}
                        key={element.instructor.id}
                      >
                        {element.instructor.name + " " + element.hours}
                      </option>
                    );
                  })}
                </select>
                <div className={ES(`errors`)}>
                  {errors.instructorId && errors.instructorId.message}
                </div>
              </div>
              <div className={S(`duration-picker`)}>
                <label htmlFor="purchasedTime">Wybór ilości godzin:</label>
                <select
                  {...register("purchasedTime", {
                    required: "Proszę wybrać czas zajęć",
                    setValueAs: (v) => Number(v),
                  })}
                  disabled={lessonLenght == 0}
                >
                  <option value="">Wybierz Czas</option>
                  {Array.from({ length: lessonLenght }, (_, i) => i + 1).map(
                    (hour) => (
                      <option key={hour} value={hour}>
                        {`${hour} h`}
                      </option>
                    )
                  )}
                </select>
                <div className={ES(`errors`)}>
                  {errors.purchasedTime && errors.purchasedTime.message}
                </div>
              </div>
            </div>

            <div className={S(`equipment-picker`)}>
              <label htmlFor="equipment">Sprzęt</label>
              <div className={S(`equipment-choice`)}>
                <div className={S(`equipment-choice-item`)}>
                  <input
                    id="contactChoice1"
                    type="radio"
                    value="WŁASNY"
                    {...register("chosenEquipment", {
                      required: "Proszę określić",
                    })}
                  />
                  <label htmlFor="contactChoice1">Własny sprzęt</label>
                </div>
                <div className={S(`equipment-choice-item`)}>
                  <input
                    id="contactChoice2"
                    type="radio"
                    value="WYPOŻYCZONY"
                    {...register("chosenEquipment", {
                      required: "Proszę określić",
                    })}
                  />
                  <label htmlFor="contactChoice2">Wypożyczenie kompletu</label>
                </div>
              </div>
              <div className={ES(`errors`)}>
                {errors.chosenEquipment && errors.chosenEquipment.message}
              </div>
            </div>
            <div className={S(`extra-comments`)}>
              <label htmlFor="additionalComments">Dodatkowe uwagi:</label>
              <input type="text" {...register("additionalComments")} />
              <div className={ES(`errors`)}></div>
              <label htmlFor="insuranceInformation">
                Informacje o ubezpieczeniu:
              </label>
              <input type="text" {...register("insuranceInformation")} />
              <div className={ES(`errors`)}></div>
            </div>
            <div className={S(`send-reservation`)}>
              <input
                type="submit"
                value={sending ? "Przetwarzanie" : "Zarezerwuj"}
                disabled={sending}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

/*
<form
        onSubmit={handleSubmit((form) => {
          addReservation(form);
        })}
      >
        <label
          htmlFor="fullName"
          onPointerEnter={() => {
            console.log(errors.fullName);
          }}
        >
          Imie i Nazwisko*:
        </label>
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
        <div className={ES(`errors`)}>
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
        <div className={ES(`errors`)}>
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
        <div className={ES(`errors`)}>
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
        <div className={ES(`errors`)}>
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
        <div className={ES(`errors`)}>
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
        <div className={ES(`errors`)}>
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
              if (appointment.reservation == null)
                return (
                  <option
                    value={appointment.id}
                    key={appointment.instructor.id}
                  >
                    {appointment.instructor.name}
                  </option>
                );
            }
          )}
        </select>
        <div className={ES(`errors`)}>
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
          //<label htmlFor="contactChoice1">Swój</label>

          <input
            type="radio"
            value="WYPOŻYCZONY"
            {...register("chosenEquipment", {
              required: "Proszę określić",
            })}
          />
          <label htmlFor="contactChoice2">Wypożyczony</label>
        </div>
        <div className={ES(`errors`)}>
          {errors.chosenEquipment && errors.chosenEquipment.message}
        </div>
        <label htmlFor="additionalComments">Dodatkowe uwagi:</label>
        <input type="text" {...register("additionalComments")} />
        <div className={ES(`errors`)}></div>
        <label htmlFor="insuranceInformation">
          Informacje o ubezpieczeniu:
        </label>
        <input type="text" {...register("insuranceInformation")} />
        <div className={ES(`errors`)}></div>
        //<Link to={Paths.ADMIN.CALENDAR.absolute}> 
        <input
          type="submit"
          value={sending ? "Przetwarzanie" : "Zarezerwuj"}
          disabled={sending}
        />
       //  </Link>
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


*/
