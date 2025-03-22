import { CSSProperties } from "react";
import useStyles from "~/hooks/useStyle";
const S = useStyles(style);
import style from "./Login.module.scss";
import { useLogin } from "../hooks/useLogin";
import { Paths } from "~/features/app/constants/Paths";

export function LoginView() {
  const { onChangeAccount, loginToSystem, account, errors, setErrors } =
    useLogin();

  return (
    <div className={S(`login`)}>
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
              <h2>Figowski Sport Logowanie</h2>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  loginToSystem();
                }}
              >
                <div className={S(`inputBox`)}>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Adres E-mail"
                    onChange={onChangeAccount}
                    value={account.email}
                  />
                </div>
                <div className={S(`inputBox`)}>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Hasło"
                    onChange={onChangeAccount}
                    value={account.password}
                  />
                </div>
                <div className={S(`inputBox`)}>
                  <input type="submit" name="" id="login" value={"Login"} />
                </div>
                <p className={S(`forget`)}>
                  {" "}
                  Zapomniałeś hasła?{" "}
                  <a href={Paths.ADMIN.FORGOT_PASSWORD.absolute}>
                    Kliknij tutaj
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
