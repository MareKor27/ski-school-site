import { CSSProperties } from "react";
import useStyles from "~/hooks/useStyle";
const S = useStyles(style);
import style from "./Login.module.scss";
import { useForgotPassword } from "../hooks/useForgotPassword";
import { Helmet } from "react-helmet-async";

export function ForgotPasswordView() {
  const { onChangeEmail, sendReminderLink, email } = useForgotPassword();
  return (
    <div className={S(`login`)}>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <section>
        <div className={S(`color`)}></div>
        <div className={S(`color`)}></div>
        <div className={S(`color`)}></div>
        <div className={S(`box`)}>
          <div className={S(`square`)} style={{ "--i": 0 } as CSSProperties}>
            <img src="/images/logo.webp" alt={"Logo FigowSki Sport"} />
          </div>
          <div className={S(`square`)} style={{ "--i": 1 } as CSSProperties}>
            <img src="/images/logo.webp" alt={"Logo FigowSki Sport"} />
          </div>
          <div className={S(`square`)} style={{ "--i": 2 } as CSSProperties}>
            <img src="/images/logo.webp" alt={"Logo FigowSki Sport"} />
          </div>
          <div className={S(`square`)} style={{ "--i": 3 } as CSSProperties}>
            <img src="/images/logo.webp" alt={"Logo FigowSki Sport"} />
          </div>
          <div className={S(`square`)} style={{ "--i": 4 } as CSSProperties}>
            <img src="/images/logo.webp" alt={"Logo FigowSki Sport"} />
          </div>
          <div className={S(`cointainer`)}>
            <div className={S(`form`)}>
              <h2>Figowski Sport Przypomnij Hasło</h2>
              <form onSubmit={sendReminderLink}>
                <div className={S(`inputBox`)}>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Wpisz email użytkownika"
                    onChange={onChangeEmail}
                    value={email.email}
                  />
                </div>
                <div className={S(`inputBox`)}>
                  <input type="submit" name="" id="login" value={"Wyślij"} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
