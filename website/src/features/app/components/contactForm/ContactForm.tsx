import useStyles from "~/hooks/useStyle";
import style from "./ContactForm.module.scss";
import { useCalendar } from "./useContactForm";

export function ContactForm() {
  const s = useStyles(style);

  const {
    isSubmitting,
    isSubmitSuccessful,
    sendEmail,
    handleSubmit,
    register,
  } = useCalendar();

  if (isSubmitSuccessful) {
    return (
      <div className={s(`contact-form-container`)}>
        <div className={s(`content`)}>
          <h2>Wiadomość została wysłana</h2>
          <p>
            Dziękujemy za wiadomość. Odpowiemy najszybciej jak tylko się da.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={s(`contact-form-container`)}>
      <div className={s(`content`)}>
        <h2>Masz Pytanie? Napisz do nas</h2>
        <p>* pola wymagane</p>
        <form
          onSubmit={handleSubmit((form) => {
            sendEmail(form);
          })}
        >
          <input
            type="text"
            className={s(`form-name`)}
            placeholder="Imie i Nazwisko*"
            required
            {...register("fullName", {
              required: "Imie i nazwisko jest wymagane",
              minLength: {
                value: 6,
                message: "Pole musi mieć conajmneij 6 znaków",
              },
            })}
          />
          <input
            type="tel"
            className={s(`form-phone`)}
            placeholder="Telefon*"
            required
            {...register("phone", {
              required: "Numer telefonu jest wymagany",
              pattern: {
                value: /^[0-9 ]*$/,
                message: "Numer telefonu musi składać się z 9 cyfr",
              },
            })}
          />
          <input
            type="email"
            className={s(`form-email`)}
            placeholder="Email*"
            required
            {...register("email", {
              required: "Email jest wymagany",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Nieprawidłowy email",
              },
            })}
          />

          <input
            type="text"
            className={s(`form-title`)}
            placeholder="Temat*"
            required
            {...register("subject", {
              required: "Temat jest wymagany",
              minLength: {
                value: 6,
                message: "Pole musi mieć conajmneij 6 znaków",
              },
            })}
          />
          <textarea
            className={s(`form-message`)}
            placeholder="Wiadomość*"
            required
            rows={4}
            {...register("message", {
              required: "Wiadomość jest wymagana",
              minLength: {
                value: 6,
                message: "Pole musi mieć conajmneij 6 znaków",
              },
            })}
          ></textarea>
          <div className={s(`form-privacy`)}>
            <input type="checkbox" name="" required /> Zapoznałem/am się z i
            wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z
            obowiązującymi przepisami prawa w celu realizacji zapytania oraz
            dalszego kontaktu. *
          </div>
          <div className={s(`form-submit`)}>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Wysyłam..." : "Wyślij"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
